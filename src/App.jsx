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

import ProfileCard from './Profile/ProfileCard'
import DashBoard from './CURD/DashBoard'
import Comments from './CURD/Comments'
import ViewTabs from './CURD/ViewTabs'
import Mountain from './Parallax/Mountain'
import SideEffect from './3D Card/SideEffect'
import CardGrid from './3D Card/CardGrid'
import UseRducer from './v18_ooks/UseReducer/UseRducer'
import Home from './FB-RealTime DB/Home'
import UseMemo from './v18_ooks/UseMemo/UseMemo'


export default function App() {
  return (
    <div className=" mx-auto items-center justify-center p-2 text-center py-3  ">

      {/**  <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
      <Link to="/non-existent-page" className="mt-4 inline-block text-blue-500 underline">
        Go to a non-existent page
      </Link> */}
      <div>
        {/**  <UpdateName />      
        <Table />
        <Home />
        <CardGrid />
        <UseDeferredValue />
        
        <ViewTabs />
        <Comments />
        <UseSyncExternalStore />
        <ProfileCard />
        <UseImparitiveHandle />
        <ViewPage />
        <DashBoard />
        <SideEffect />
        <Mountain />
        <UseTransition />
        <UseCallback />
        <UseLayoutEffect />
        <UseId />
         <LogIn />
*/}

        <UseMemo />
        <UseRducer />

















      </div>


    </div>


  )
}
