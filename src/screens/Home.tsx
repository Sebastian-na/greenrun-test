import { useEffect, useState } from "react"
import { getAllSports } from "../api"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore"
import { useAuth } from "../contexts/AuthContext"

interface Sport {
  idSport: string
  strSport: string
  strSportThumb: string
}

const db = getFirestore()

const Home = () => {
  const [sports, setSports] = useState<Sport[]>([])
  const { user } = useAuth()

  useEffect(() => {
    document.title = "Home"
    async function getAndFilterSports() {
      try {
        const allSports: Sport[] = await getAllSports()
        const userQuery = query(
          collection(db, "users"),
          where("id", "==", user.uid)
        )
        const userSnapShot = await getDocs(userQuery)
        const userDocId = userSnapShot.docs[0].id
        const userSports = await getDocs(
          collection(db, `users/${userDocId}/sports`)
        )
        const filteredSports = allSports.filter(
          (sport) =>
            !userSports.docs.some(
              (doc) => doc.data().id_sport === sport.idSport
            )
        )
        setSports(filteredSports)
      } catch (e) {
        console.log(e)
      }
    }
    getAndFilterSports()
  }, [])
  return (
    <>
      <div></div>
    </>
  )
}

export default Home
