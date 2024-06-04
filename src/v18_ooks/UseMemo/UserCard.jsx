import React from 'react'

const UserCard = ({ data }) => {
    return (
        <li className="p-2 border-b border-gray-400">{data?.name}</li>
    )
}

export default UserCard
