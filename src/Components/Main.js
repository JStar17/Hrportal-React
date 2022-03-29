import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddCelebrations } from './AddCelebrations'
import { AddUser } from './AddUser'
import { CelebrationDetail } from './CelebrationDetail'
import { LeftSideBar } from './LeftSideBar'
import { Login } from './Login'
import { Logout } from './Logout'

import { MainPanel } from './MainPanel'
import { Setting } from './Setting'
import { Sidebar } from './Sidebar'
import { SignUp } from './SignUp'
import { UserDetail } from './UserDetail'


export const Main = () => {
  return (
<div className="container-fluid page-body-wrapper">
  {/* partial:partials/_settings-panel.html */}
  <Setting/>
  <Sidebar/>
  <LeftSideBar/>
  {/* partial */}
  {/* partial:partials/_sidebar.html */}
  
  {/* partial */}
 {/* <MainPanel/> */}

  {/* main-panel ends */}
  {/* <UserDetail/> */}
  {/* <CelebrationDetail/> */}
  {/* <AddCelebrations/> */}
  {/* <Login/> */}
  {/* <SignUp/> */}
  <Logout/>


 <Routes>
   
     <Route path='/' element={<MainPanel/>}/>
     <Route path='/adduser' element={<AddUser/>}/>
     <Route path='/users' element={<UserDetail/>}/>
     <Route path='/celebrationdetail' element={<CelebrationDetail/>}/>
     <Route path='/addcelebration' element={<AddCelebrations/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/logout' element={<Logout/>}/>
     </Routes>
</div>

  )
}
