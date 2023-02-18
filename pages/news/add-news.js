import { useState } from 'react'

function MyComponent() {
    const [data, setData] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const res = await fetch('http://localhost:3000/api/add-news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })

        console.log("res",res)
        if (res.status === 200) {
            console.log('Data received')
        } else {
            console.log('Error sending data')
        }
    }

    return (
        <div className='m-[20px] '>
            <form onSubmit={handleSubmit}>
                <input
                    className='ring-1 ring-orange-600'
                    type="text"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MyComponent