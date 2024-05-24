import { Button } from '@/components/ui/button';
import React, { useEffect, useLayoutEffect, useState } from 'react'

//useLayoutEffect
const UseLayoutEffect = () => {
    const [name, setName] = useState('kiran')

    useEffect(() => {

        console.log('-----> useEffect');
    })

    useLayoutEffect(() => {
        console.log('-----> useLayoutEffect');
        if (name === 'kiran') {
            setName('George')
        } else if (name === '') {
            setName('muthu')
        }
    }, [])
    return (
        <div>

            <Button onClick={() => setName('Tamil')} >UpdateName</Button>
            <h1>{name}</h1>
        </div>
    )
}

export default UseLayoutEffect