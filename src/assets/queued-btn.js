import React from 'react'

function QueuedBtn(bool) {

    return (
        <div>
            <button className='text-orange-300 text-xxs px-2 rounded-lg disabled:{bool}  bg-queued-btn '>QUEUED</button>
        </div>
    )
}

export default QueuedBtn