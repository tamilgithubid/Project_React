import React from 'react'
import { Separator } from '@radix-ui/react-separator'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold text-white">404!</h1>
          <h3 className="text-3xl font-medium text-white mt-4">Page not found</h3>
          <p className="text-white mt-2">The page you were looking for could not be found.</p>
          <Link to="/">
            <button className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-lg hover:from-blue-600 hover:to-green-600">
              <span className="mr-2">Back To Home</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <Separator className="border-t border-gray-300" />
      </div>
    </div>
  )
}
