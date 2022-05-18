import React from 'react'
import './service.css'
import It from '../../assets/it.png'
import Web from '../../assets/web.png'
import Networking from '../../assets/networking.png'



const Services = () => {
  return (
    <div className='pt-12 text-center container pb-12'>
        <h1 className='text-4xl font-bold '>Our Services</h1>
        <p className='pt-2 text-sm'>Areas What we serve</p>
        <div className=' conatiner flex mt-10 grid-cols-1 lg:grid-cols-3 gap-x-14 md:grid-cols-2'>
            <div className='services pt-14 pb-10'>
                <img className='mx-auto ' src={It} alt='it'/>
                <h2 className='text-2xl pt-2'>IT Solution</h2>
                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua  dolor sit amet, consectetur adipiscing elit,.</p>
            </div>

            <div className='services pt-14'>
                <img className='mx-auto ' src={Web} alt='it'/>
                <h2 className='text-2xl pt-2'>Web Development</h2>
                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua  dolor sit amet, consectetur adipiscing elit,.</p>
            </div>

            <div className='services pt-14'>
                <img className='mx-auto ' src={Networking} alt='it'/>
                <h2 className='text-2xl pt-2'>Networking Services</h2>
                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua  dolor sit amet, consectetur adipiscing elit,.</p>
            </div>

            


        </div>
    </div>
  )
}

export default Services