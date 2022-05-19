import React from 'react'
import './contact.css'
import Office from '../../assets/office.png'

function Contact() {
  return (
    <div className='container py-12 '>
        <h1 className='text-3xl font-bold text-center'>Our Contact</h1>
        <p className='text-base text-center w-98 py-2'>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='grid grid-cols-2 pt-10'>
            <div>
                <div>
                    <form class="w-full max-w-lg pl-10">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-4/4 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="w-full md:w-4/4 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                </div>
                            </div>
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3">
                                <button class="shadow  hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                                </div>
                                <div class="md:w-2/3"></div>
                            </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col  items-end'>
                <div className='address pl-5 pt-2 mt-3 '>
                    <div className='flex p-2'>
                        <img src={Office} alt='Office'/>
                        <p className='pl-2'>Office Address</p>
                    </div>
                    <p className='text-sm'>3rd Floor, 69/1 West Dhanmondi (Shankar), Dhaka-1209</p>
                </div>

                <div className='call pl-7 pt-2 mt-3'>
                    <div className='flex p-2'>
                        <img src={Office} alt='Office'/>
                        <p className='pl-5'>Office Address</p>
                    </div>
                    <p className='text-sm'>3rd Floor, 69/1 West Dhanmondi (Shankar), Dhaka-1209</p>
                </div>

                <div className='address pl-5 pt-2 mt-3'>
                    <div className='flex p-2'>
                        <img src={Office} alt='Office'/>
                        <p className='pl-2'>Office Address</p>
                    </div>
                    <p className='text-sm'>3rd Floor, 69/1 West Dhanmondi (Shankar), Dhaka-1209</p>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Contact