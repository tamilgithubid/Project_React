
// useImparitiveHandle(ref,createHandle,[dependencies])
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

const UseImperativeHandle = () => {
    const inputRef = useRef(null)

    return (
        <div>
            <Child ref={inputRef} />
            <Button onClick={() => inputRef.current.focus()}>Focus Input</Button>
        </div>
    )
}

const Child = forwardRef((props, ref) => {
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => ({
        focus: () => console.log('Input Ref Foucus...')  //inputRef.current.focus()
    }))

    return (
        <div>
            <Input type="text" ref={inputRef} {...props} placeholder="Typing..." />
        </div>
    )
})

export default UseImperativeHandle

