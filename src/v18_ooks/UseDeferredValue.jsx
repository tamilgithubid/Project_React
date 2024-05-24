import { Button } from '@/components/ui/button'
import React, { useDeferredValue, useEffect, useState } from 'react'

const UseDeferredValue = () => {
    const [count, setCount] = useState(0)
    const defferCount = useDeferredValue(count)

    useEffect(() => {
        console.log("BasicValue ", count);
        console.log("DefferCount ", defferCount);
    })

    return (
        <div>
            <div>Current Counr:{count}</div>
            <div>Deffer Count:{defferCount}</div>
            <Button onClick={() => setCount(count + 1)} >Increment</Button></div>
    )
}

export default UseDeferredValue