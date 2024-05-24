import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import UseTransition from './v18_ooks/UseTransition'
import { UpdateName } from './v18_ooks/UseActionState'
import UseImparitiveHandle from './v18_ooks/UseImparitiveHandle'
import UseCallback from './v18_ooks/UseCallback'
import UseLayoutEffect from './v18_ooks/UseLayoutEffect'
import UseDeferredValue from './v18_ooks/UseDeferredValue'
import UseId from './v18_ooks/UseId'
import UseSyncExternalStore from './v18_ooks/UseSyncExternalStore'
import LogIn from './LoginPage/LogIn'
import Table from './CURD/Table'
import ViewPage from './SmartPage/ViewPage'
import BackGround from './SmartPage/BackGround'
import ProfileCard from './Profile/ProfileCard'
import DashBoard from './CURD/DashBoard'
import Comments from './CURD/Comments'
import ViewTabs from './CURD/ViewTabs'







export default function App() {
  return (
    <div className=" mx-auto items-center justify-center p-2 text-center py-3  ">

      {/**  <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
      <Link to="/non-existent-page" className="mt-4 inline-block text-blue-500 underline">
        Go to a non-existent page
      </Link> */}
      <div>
        {/**  <UpdateName />
        <UseTransition />
        <UseImparitiveHandle />
        <UseCallback />
        <UseLayoutEffect />
        <UseDeferredValue />
        <UseId />
        <UseSyncExternalStore />
        <BackGround />
        <LogIn /> 
      <ViewPage />*/}
        <ProfileCard />
        <Comments />
        <ViewTabs />
        <DashBoard />
        <LogIn />

        <Table />







      </div>


    </div>


  )
}
