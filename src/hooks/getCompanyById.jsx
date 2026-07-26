import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { setSingleCompany } from "@/redux/companiesSlice"

const useGetCompanyById = (cid) => {
  const dispatch = useDispatch()

  useEffect(() => {

    const fetchSingleCompany = async () => {
      try {

        const { data } = await axios.get(
          `http://localhost:4040/api/v1/company/${cid}`,
          { withCredentials: true }
        )

        if (data.success) {
          dispatch(setSingleCompany(data.company))
        }

      } catch (error) {
        console.log(error)
      }
    }

    if (cid) {
      fetchSingleCompany()
    }

  }, [cid, dispatch])
}

export default useGetCompanyById