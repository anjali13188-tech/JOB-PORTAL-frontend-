//custom hooks

import { setAllJobs } from "@/redux/jobSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const useGetAllJobs = () => {
  const dispatch = useDispatch()
  async function fetchAllJobs() {
    const { data } = await axios.get(`https://job-portal-backend-si47.onrender.com/api/v1/job/all`,  // ✅ yahan change karo
 {
      withCredentials: true
    })
    // console.log(data)
    //  console.log("API Response:", data)        
    // console.log("Jobs Array:", data?.jobs)

    if (data?.success) {
      dispatch(setAllJobs(data?.jobs))
      // console.log("Dispatched!")
    }
  }
  useEffect(() => {
    fetchAllJobs()
  }, [])

}

export default useGetAllJobs
