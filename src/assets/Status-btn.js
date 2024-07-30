import React from 'react'

function StatusBtn({ bool }) {
    console.log(bool)
    return (
        <div>
            {bool ? <button className='text-orange-300 text-xxs px-2 rounded-lg   bg-queued-btn '>QUEUED</button>
                :
                <button className='text-green-500 text-xxs px-2 rounded-lg  bg-green-900  '>DONE</button>
            }

        </div>
    )
}

export default StatusBtn