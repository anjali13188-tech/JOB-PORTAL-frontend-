import { setAllAdminJobs } from "@/redux/jobSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        async function getAllAdminJobs() {
            try {
                const { data } = await axios.get(
                    "http://https://job-portal-backend-si47.onrender.com/api/v1/job/getAdminJobs",
                    {
                        withCredentials: true
                    }
                )
                console.log(data)

                if (data?.success) {
                    // console.log("dispatching:", data.jobs) // 👈 add this

                    dispatch(setAllAdminJobs(data?.jobs))
                }

            } catch (error) {

                console.log(error)

            }

        }

        getAllAdminJobs()

    }, []
    )

}

export default useGetAllAdminJobs

