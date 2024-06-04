import React, { useMemo, useState } from 'react'
import UserCard from './UserCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const UseMemo = () => {
  const userList = [
    { id: 1, name: 'Tamil' },
    { id: 2, name: 'Kiran' },
    { id: 3, name: 'George' },
    { id: 4, name: 'Sabari' },
    { id: 5, name: 'Muthu' }
  ]
  const [users, setUsers] = useState(userList)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const displayList = useMemo(() => users.map(user => {
    console.log('preparing card.....');
    return <UserCard key={user.id} data={user} />
  }), [users])

  const handleUserDetail = (value) => {
    setUsers([
      ...users, {
        id: users.length + 1,
        name: value
      }
    ])
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">UseMemoHook</h1>
      <div className="mb-4">
        <span className="text-xl">{count}</span>
        <Button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick()} >
          Increment
        </Button>
      </div>
      <Input className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter user name" onBlur={(e) => handleUserDetail(e.target.value)} />
      <ul className="bg-white p-4 rounded shadow">
        {displayList}
      </ul>
    </div>
  )
}

export default UseMemo
