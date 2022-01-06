import { Sport } from "../../interfaces/"
import {
  doc,
  setDoc,
  getFirestore,
  query,
  collection,
  getDocs,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore"
import { getAllSports } from "../api"

const db = getFirestore()

const getUserDocId = async (userId: string) => {
  const userQuery = query(collection(db, "users"), where("id", "==", userId))
  const userSnapShot = await getDocs(userQuery)

  if (userSnapShot.docs.length === 0) {
    //create new doc
    const newUserDoc = await addDoc(collection(db, "users"), {
      id: userId,
    })
    return newUserDoc.id
  }
  const userDocId = userSnapShot.docs[0].id
  return userDocId
}

export const addSport = async (
  sport: Sport,
  liked: boolean,
  userId: string
) => {
  const userDocId = await getUserDocId(userId)
  const q = query(
    collection(db, `users/${userDocId}/sports`),
    where("idSport", "==", sport.idSport)
  )
  const snapShot = await getDocs(q)
  if (snapShot.docs.length === 0) {
    await addDoc(collection(db, `users/${userDocId}/sports`), {
      ...sport,
      liked,
      createdAt: new Date().getTime(),
    })
  } else {
    await setDoc(doc(db, `users/${userDocId}/sports`, snapShot.docs[0].id), {
      ...sport,
      liked,
      createdAt: new Date().getTime(),
    })
  }
}
export const getAndFilterSports = async (userId: string) => {
  try {
    const allSports: Sport[] = await getAllSports()
    const userDocId = await getUserDocId(userId)
    const userSports = await getDocs(
      collection(db, `users/${userDocId}/sports`)
    )
    const filteredSports = allSports.filter(
      (sport) =>
        !userSports.docs.some((doc) => doc.data().idSport === sport.idSport)
    )
    return filteredSports
  } catch (e) {
    console.log(e)
  }
}

export const getUserSports = async (userId: string) => {
  const userDocId = await getUserDocId(userId)
  const q = query(
    collection(db, `users/${userDocId}/sports`),
    orderBy("createdAt", "desc")
  )
  const userSports = await getDocs(q)
  return userSports.docs.map((doc) => doc.data())
}
