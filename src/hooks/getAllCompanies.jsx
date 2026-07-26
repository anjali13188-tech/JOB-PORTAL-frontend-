 import { setAllCompanies } from "@/redux/companiesSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
  const useGetAllCompanies=()=>{
     const dispatch = useDispatch()
         useEffect(()=>{
        async function  getCompanies(){
        try {
            const {data} = await axios.get(`http://https://job-portal-backend-si47.onrender.com/api/v1/company/all/`,
                {withCredentials:true})
            if(data?.success)
                
            {
                dispatch(setAllCompanies(data?.companies))
            }
        } catch (error) {
            console.log(error)            
        }
    }
        getCompanies()
    },[])
  }
    export default  useGetAllCompanies