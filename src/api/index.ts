import axios from "axios"

const api_url = "https://www.thesportsdb.com/api/v1/json/2/"

export const getAllSports = async () => {
  const response = await axios.get(api_url + "all_sports.php")
  return response.data.sports
}
