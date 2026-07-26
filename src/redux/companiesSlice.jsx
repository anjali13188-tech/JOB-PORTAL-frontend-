import { createSlice } from "@reduxjs/toolkit";

const companiesSlice = createSlice({
    name: "company",
    initialState: {
       SingleCompany:null,
       companies:[],
       searchCompanyByName:""
    },
    reducers: {
        setSingleCompany: (state, action) => {
            state.SingleCompany = action.payload
        },
        setAllCompanies:(state,action)=>{
            state.companies=action.payload
        },
        setSearchCompanyByName:(state,action)=>{
            state.searchCompanyByName = action.payload
        }

    }
})
export const { setSingleCompany,setAllCompanies,setSearchCompanyByName } = companiesSlice.actions
export default companiesSlice.reducer


