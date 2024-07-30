import React, { useState } from 'react';
import logo from "../assets/logo.png";
import collapsedLogo from "../assets/collapsed-logo.png"; // Add a smaller or different logo for the collapsed state
import { LuHome } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbReceipt } from "react-icons/tb";
import { LiaStampSolid } from "react-icons/lia";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";
import { PiBookBookmark } from "react-icons/pi";
import Newbtn from '../assets/new-btn';
import { TiPlus } from "react-icons/ti";


function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleMouseEnter = () => {
        setIsCollapsed(false);
    };

    const handleMouseLeave = () => {
        setIsCollapsed(true);
    };

    return (
        <aside
            className={` text-white transition-all duration-300 fixed top-0 left-0 h-full overflow-hidden ${isCollapsed ? 'w-16 z-10 bg-header-bg' : 'w-64 z-50 bg-custom-bg'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='p-3 max-w-32 max-h-10'>
                {isCollapsed ? <img src={collapsedLogo} className="max-w-10 max-h-10 object-contain" /> : <img src={logo} className="w-full h-full truncate object-contain" />}
            </div>
            <ul className="space-y-6 border-warning-bg border-b-[3px] py-6">
                <SidebarItem icon={<LuHome className='text-sm' />} text="Home" isCollapsed={isCollapsed} />
                <SidebarItem icon={<MdArrowOutward className='text-sm' />} text="Payouts" isCollapsed={isCollapsed} isNew={true}
                    additionalContent={
                        !isCollapsed && (
                            <div className="flex items-center">
                                <button className='bg-btn p-1'><TiPlus /></button>
                            </div>
                        )
                    } />
                <SidebarItem icon={<FaRegFileLines className='text-sm' />} text="Account Statement" isCollapsed={isCollapsed} />
                <SidebarItem icon={<MdOutlinePersonOutline className='text-sm' />} text="Contacts" isCollapsed={isCollapsed} />
            </ul>
            <ul className="space-y-6 mt-4 py-3">
                <SidebarItem icon={<TbReceipt className='text-sm' />} text="Vendor Payments" isCollapsed={isCollapsed} />
                <SidebarItem icon={<LiaStampSolid className='text-sm' />} text="Tax Payments" isCollapsed={isCollapsed} />
                <SidebarItem icon={<IoPaperPlaneOutline className='text-sm' />} text="Payout Links" isCollapsed={isCollapsed} />
                <SidebarItem icon={<BsEnvelopePaper className='text-sm' />} text="Payroll" isCollapsed={isCollapsed} />
                <SidebarItem icon={<PiBookBookmark className='text-sm' />} text="Reports" isCollapsed={isCollapsed} />
            </ul>
        </aside>
    );
}

function SidebarItem({ icon, text, isCollapsed, isNew, additionalContent }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li className={`flex relative items-center p-2 w-full hover:bg-hover-sidebar transition-all duration-500 ${isCollapsed ? 'justify-center' : 'justify-between'}`}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
        >
            <div className={`bg-orange-500 h-3 my-auto mx-0 w-0.5 left-0 top-0 bottom-0 ${isHovered ? 'absolute' : 'hidden'}`}></div>


            <div className="flex items-center gap-3 ">
                {icon}
                {!isCollapsed && <span className=" text-sm truncate ">{text}</span>}
                {!isCollapsed && isNew && <Newbtn />}
            </div>
            {additionalContent}
        </li>
    );
}

export default Sidebar;
