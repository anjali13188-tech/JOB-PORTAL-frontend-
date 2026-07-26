
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
// import { Toaster } from 'react-hot-toast'
import { Toaster } from "@/components/ui/sonner"
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDetails from './components/JobDetails'
import Companies from './components/admin/Companies'
import CreateCompanies from './components/admin/CreateCompanies'
import UpdateCompany from './components/admin/updateCompany'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/login' element={<Login />} />
               <Route path='/jobs' element={<Jobs />} />
               <Route path='/jobs/details/:id' element={<JobDetails />} />
               <Route path='/browse' element={<Browse />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/admin/companies' element={<Companies />} />
               <Route path='/companies' element={<Companies />} />
               <Route path='/admin/companies/create' element={<CreateCompanies />} />
               <Route path='/admin/companies/update/:cid' element={<UpdateCompany />} />
               <Route path='/admin/jobs' element={<AdminJobs/>} />
               {/* <Route path='/admin/jobs/create' element={<PostJob/>} /> */}
               // ❌ Missing route - you need to add this
              <Route path="/admin/job/create" element={<PostJob />} /> 
              <Route path='/admin/job/:id' element={<PostJob />} />
              <Route path='/admin/jobs/:id/applicants' element={<Applicants />} />
            </Routes>
         </BrowserRouter>
         <Toaster />
      </>
   )
}
export default App
