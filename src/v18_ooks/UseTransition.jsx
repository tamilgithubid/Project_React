
import { Input } from "@/components/ui/input"
import { useState, useTransition } from "react"

//useTransition

const UseTransition = () => {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    console.log('useTransition', list);



    const handleChange = (e) => {
        console.log('handleChange', e?.target?.value);
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            console.log('list_dada', l);
            for (let i = 0; i < 20000; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })

    }


    return (
        <>
            <div className=" flex gap-2 py-6   items-center" >
                <label >Search:</label>
                <Input type="text" value={input} onChange={handleChange} placeholder="type somthing..." />

            </div>
            <div>{

                isPending ? <h1 className=" flex justify-center items-center">🌀 Loading...</h1> : list.map((data, index) => {
                    return <div className=" flex justify-center items-center" key={index} >{data}</div>
                })
            }</div>
        </>
    )

}
export default UseTransition