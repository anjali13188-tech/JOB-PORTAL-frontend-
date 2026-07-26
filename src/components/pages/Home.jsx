import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import HeroSection from '../HeroSection'
import CategoryCarousel from '../CategoryCarousel'
import LatestJobs from '../LatestJobs'
import useGetAllJobs from '@/hooks/getAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Home() {

  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies")

    }
    // Set blue background only on Home page
    document.body.style.backgroundColor = '#e0f2fe'

    // Reset when leaving Home page
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />

    </>
  )
}
