import { Sport } from "../../screens/Home"
import {
  doc,
  setDoc,
  getFirestore,
  query,
  collection,
  getDocs,
  where,
  addDoc,
} from "firebase/firestore"
import { getAllSports } from "../api"

const db = getFirestore()

const getUserDocId = async (userId: string) => {
  const userQuery = query(collection(db, "users"), where("id", "==", userId))
  const userSnapShot = await getDocs(userQuery)
  const userDocId = userSnapShot.docs[0].id
  return userDocId
}

export const addSport = async (
  sport: Sport,
  liked: boolean,
  userId: string
) => {
  const userDocId = await getUserDocId(userId)
  await addDoc(collection(db, `users/${userDocId}/sports`), {
    ...sport,
    liked,
  })
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
