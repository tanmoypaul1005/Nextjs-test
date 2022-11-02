import { useRouter } from 'next/router';
import React from 'react'

function Man() {

    const router=useRouter();

    return (
        <div>
            This is Man Page
            <button onClick={()=>{router.push("Per")}}>Man</button>
        </div>
    )
}

export default Man