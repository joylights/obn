import React from 'react'
import Creative from '../../assets/creative.jpg'
import './creating.css'

const Creating = () => {
  return (
    <div className='container flex pt-10'>
        <img className='mx-auto ' src={Creative} alt='it'/>
        <div className='pl-14 pt-8'>
            <h1 className='text-4xl font-bold'>Creating Website Solutions</h1>
            <p className='creating-p pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex pt-8'>
              <div className='flex-col left'>
                <div className='left-create text-center'>
                    <div>E-Commerce Development</div>
                </div>
                <div className='right-create text-center'>
                    <div>WordPress Development</div>
                </div>
                <div className='left-create text-center'>
                    <div>React Development</div>
                </div>
              </div>
              <div className='flex-col ml-10'>
                <div className='right-create text-center'>
                    <div>Ux/Ui Design</div>
                </div>
                <div className='left-create text-center'>
                    <div>Web Security</div>
                </div>
                <div className='right-create text-center'>
                    <div>Shopify Development</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Creating