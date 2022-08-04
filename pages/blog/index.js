import React from 'react'
import SubBanner from '../../components/SubBanner'
import VideoCard from '../../components/VideoCard'
import VideoCarousel from '../../components/VideoCarousel'

function index() {
  return (
    <div>
        <SubBanner page="Blog Name" />
     <div className='container'>
     <VideoCard />


     <VideoCarousel />

     </div>
    </div>
  )
}

export default index