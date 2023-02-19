import { useRouter } from 'next/router'
import React from 'react'

function Document() {

    const router=useRouter();
    
    const params=router.query.params || [];
    if( params.length ==2){
        return <h2>{params[0]} and {params[1]}</h2>
    }
    return (
        <div>
            
        </div>
    )
}

export default Document
