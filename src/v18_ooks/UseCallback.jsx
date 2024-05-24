//useCallback

import { Button } from '@/components/ui/button'
import React, { useCallback, useState, useEffect } from 'react'

const uniqueValues = new Set();

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);

    // useCallback to memoize the functions
    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementCount = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const doIncrement = useCallback(() => {
        setIncrement(increment + 1);
    }, [increment]);


    uniqueValues.add(incrementCount);
    uniqueValues.add(decrementCount);
    uniqueValues.add(doIncrement);

    console.log('UniqueValue size:', uniqueValues.size);

    return (
        <div className='gap-48'>
            <div>Count: {count}</div>
            <div>De-count: {increment}</div>
            <Button variant="destructive" onClick={incrementCount}>+</Button>
            <Button variant="outline" onClick={decrementCount}>-</Button>
            <Button onClick={doIncrement}>x</Button>
        </div>
    );
}

export default UseCallback;
