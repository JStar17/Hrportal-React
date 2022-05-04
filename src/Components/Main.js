import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddCelebrations } from './AddCelebrations'
import { AddLeave } from './AddLeave'
import { AddRole } from './AddRole'
import { AddUser } from './AddUser'
import { CelebrationDetail } from './CelebrationDetail'

import { DeleteEmp } from './DeleteEmp'
import { EmpDetails } from './EmpDetails'
import { EmploDetails } from './EmploDetails'
import { EmpSalary } from './EmpSalary'

import { Footer } from './Footer'
import { GenerateSalary } from './GenerateSalary'
import { LeaveDetails } from './LeaveDetails'
import { LeaveStatus } from './LeaveStatus'
import { LeftSideBar } from './LeftSideBar'

import { Login1 } from './Login'
import { Logout } from './Logout'

import { MainPanel } from './MainPanel'
import { MyAccount } from './MyAccount'

import { Setting } from './Setting'
import { Sidebar } from './Sidebar'
import { SignUp } from './SignUp'
import { UpdateCele } from './UpdateCele'
import { UpdateEmp } from './UpdateEmp'



export const Main = () => {
  return (
    <>
<div className="container-fluid page-body-wrapper">
  {/* partial:partials/_settings-panel.html */}
  <Setting/>
  
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
  {/* <Logout/> */}
  {/* <UpdateEmp/> */}
  {/* <DeleteEmp/> */}
{/* <MyAccount/> */}
{/* <ForgetPassword/> */}
{/* <ForgetPassButton/> */}
{/* <AddLeave/> */}
{/* <LeaveDetails/> */}
{/* <EmpSalary/> */}
{/* <GenerateSalary/> */}
{/* <LeaveStatus/> */}
{/* <EmpDetails/> */}
{/* <Login1/> */}
{/* <PasswordReset/> */}
{/* <EmploDetails/> */}














  






 <Routes>
   
     <Route path='/' element={<MainPanel/>}/>
     <Route path='/adduser' element={<AddUser/>}/>
     <Route path='/empdetails/:userId' element={<EmpDetails/>}/>
     <Route path='/users' element={<EmploDetails/>}/>
     <Route path='/celebrationdetail' element={<CelebrationDetail/>}/>
     <Route path='/addcelebration' element={<AddCelebrations/>}/>
     
     <Route path='/login' element={<Login1/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/logout' element={<Logout/>}/>
     <Route path='/update/:userId' element={<UpdateEmp/>}/>
     <Route path='/delete/:userId' element={<DeleteEmp/>}/>
     <Route path='/up/:celebrationId' element={<UpdateCele/>}/>
     <Route path='/myaccount' element={<MyAccount/>}/>
     <Route path='/addleave' element={<AddLeave/>}/>
     <Route path='/leavedetails' element={<LeaveDetails/>}/>
     <Route path='/addrole' element={<AddRole/>}/>
     <Route path='/empsalary' element={<EmpSalary/>}/>
     <Route path='/generateSalary/:userId' element={<GenerateSalary/>}/>
     <Route path='/leavestatus' element={<LeaveStatus/>}/>
  
     
     </Routes>
     
</div>

</>

  )
}
