import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Newbtn from '../assets/new-btn';
import { IoSearchOutline } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";





function Header() {
    return (
        <div className='bg-header-bg text-white flex w-full justify-between px-6 pt-6 pb-2 text-xs'>
            <div className='flex items-center '>
                <div className='flex items-center '>
                    <MdArrowOutward style={{ backgroundColor: '#141833', padding: 3, fontSize: 25, borderRadius: 3, marginRight: 2 }} /> Payouts
                </div>
                <p>/</p>

                <ul className='flex gap-4 ml-4'>
                    <li className='hover:bg-header-btn-bg hover:text-header-btn-font p-2 rounded-md'>Single</li>
                    <li className='hover:bg-header-btn-bg hover:text-header-btn-font p-2 rounded-md mr flex items-center gap-2'>Bulk<Newbtn /></li>
                    <li className='hover:bg-header-btn-bg hover:text-header-btn-font p-2 rounded-md'>Tally</li>
                    <li className='hover:bg-header-btn-bg hover:text-header-btn-font p-2 rounded-md'>Payout Links</li>

                </ul>
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center gap-4 ml-4'>
                    <li>
                        <button className="flex items-center border border-blue-400 text-blue-400 py-2 px-3 ">
                            <span className="flex items-center">
                                <span className="text-sm font-bold mr-2">+</span>
                                <span className="text-sm">PAYOUT</span>
                            </span>
                            <span className="ml-4 border-l border-blue-500 h-5"></span>
                            <RiArrowDropDownLine className='text-2xl' />
                        </button>
                    </li>
                    <li className='text-blue-400 text-sm'><IoSearchOutline /></li>
                    <li className='text-orange-400 text-sm'><GrAnnounce /></li>
                    <li className='flex items-center text-blue-400 text-sm'><MdOutlinePersonOutline />
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header