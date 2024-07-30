import React, { useEffect, useState } from 'react'
import PayoutData from "../PayoutData.json";
import QueuedBtn from '../assets/queued-btn';
import { FaRegQuestionCircle } from "react-icons/fa";

function PayoutTable({ rowNum }) {
    const [data, setData] = useState([]);
    console.log(rowNum)
    useEffect(() => {
        setData(PayoutData.PayoutData);
    }, [])
    return (
        <div className='text-white text-xs text-center mx-6 px-6 my-3 border-warning-bg border-b-[1px] pb-3'>
            <table className='w-full'>
                <thead>
                    <tr >
                        <th className='text-left py-3'>CREATED AT</th>
                        <th className='py-3'>AMOUNT</th>
                        <th className='text-center py-3'>STATUS</th>
                        <th className='py-3 '>CONTACT</th>
                        <th className='py-3'>CREATED BY</th>
                        <th><span className='flex items-center justify-center py-3'>UTR <a> <FaRegQuestionCircle className='text-xxs bg-slate-500 text-black rounded-full' /></a></span></th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, rowNum).map((e, index) => {
                        return (
                            <tr className='text-center' key={index}>
                                <td className='text-left py-3'><span>{e.createdAt.date} {e.createdAt.time}</span></td>
                                <td className='py-3'>{e.amount}</td>
                                <td className='py-3'><QueuedBtn bool={e.queued} /></td>
                                <td className='py-3'>{e.contact}</td>
                                <td className='py-3'>{e.createdBy}</td>
                                <td className='py-3'>{e.utr}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PayoutTable;