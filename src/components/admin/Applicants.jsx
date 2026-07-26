import React from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { useParams } from "react-router-dom";

export default function Applicants(){
 
     return(
        <>
        <Navbar/>

        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-xl my-5">Applicants</h1>
        <ApplicantsTable/>
        </div>
        </>
     )
}