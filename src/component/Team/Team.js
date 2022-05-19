import React from 'react'
import './team.css'
import Team1 from '../../assets/team-1.jpg'
import Team2 from '../../assets/team-2.jpg'
import Team3 from '../../assets/team-3.jpg'
import Team4 from '../../assets/team-4.jpg'


function Team() {
  return (
    <div className='container py-12'>
        <h3 className='text-base font-bold text-center team-text'>Team Member</h3>
        <h1 className='text-2xl text-center'>Expert Team</h1>
        <div className='grid grid-cols-4 pt-10 gap-x-8'>
            <div>
                <img src={Team2} alt='teams'/>
                <h3 className='text-sm font-bold text-center pt-2'>Tahsin Alam Chowdhury</h3>
                <h4 className='text-xs font-bold text-center'>Managing Director</h4>
            </div>
            <div>
                <img src={Team1} alt='teams'/>
                <h3 className='text-sm font-bold text-center pt-2'>Ava Farrington</h3>
                <h4 className='text-xs font-bold text-center'>Chief creative officer</h4>
            </div>
            <div>
                <img src={Team3} alt='teams'/>
                <h3 className='text-sm font-bold text-center pt-2'>Lucas Martinez</h3>
                <h4 className='text-xs font-bold text-center'>Project Manager</h4>
            </div>
            <div>
                <img src={Team4} alt='teams'/>
                <h3 className='text-sm font-bold text-center pt-2'>Fahad Alam Joy</h3>
                <h4 className='text-xs font-bold text-center'>Software Engineer</h4>
            </div>
        </div>
    </div>
  )
}

export default Team