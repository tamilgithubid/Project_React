import React, { useId } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


const UseId = () => {
    return (
        <div>
            <Child />
            <Child />
            <Child />


        </div>
    )
}

const Child = () => {
    const id = useId()
    console.log('Child_id', id);
    return (
        <>
            <div>
                <Label htmlFor={`${id}-name`}>Your Checkbox Here </Label>
                <Checkbox id={`${id}-name`} /><br />
                <Label htmlFor={`${id}-age`}>Your Checkbox Here </Label>
                <Checkbox id={`${id}-age`} />

            </div>
        </>
    )
}

export default UseId