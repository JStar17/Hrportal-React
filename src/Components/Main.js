import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddCelebrations } from './AddCelebrations'
import { AddLeave } from './AddLeave'
import { AddRole } from './AddRole'
import { AddUser } from './AddUser'
import { CelebrationDetail } from './CelebrationDetail'

import { DeleteEmp } from './DeleteEmp'
import { EmpSalary } from './EmpSalary'
import { Footer } from './Footer'
import { ForgetPassButton } from './ForgetPassButton'
import { ForgetPassword } from './ForgetPassword'
import { GenerateSalary } from './GenerateSalary'
import { LeaveDetails } from './LeaveDetails'
import { LeftSideBar } from './LeftSideBar'
import { Login } from './Login'
import { Logout } from './Logout'

import { MainPanel } from './MainPanel'
import { MyAccount } from './MyAccount'
import { Setting } from './Setting'
import { Sidebar } from './Sidebar'
import { SignUp } from './SignUp'
import { UpdateCele } from './UpdateCele'
import { UpdateEmp } from './UpdateEmp'
import { UserDetail } from './UserDetail'


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








  






 <Routes>
   
     <Route path='/' element={<MainPanel/>}/>
     <Route path='/adduser' element={<AddUser/>}/>
     <Route path='/users' element={<UserDetail/>}/>
     <Route path='/celebrationdetail' element={<CelebrationDetail/>}/>
     <Route path='/addcelebration' element={<AddCelebrations/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/logout' element={<Logout/>}/>
     <Route path='/update/:userId' element={<UpdateEmp/>}/>
     <Route path='/delete/:userId' element={<DeleteEmp/>}/>
     <Route path='/up/:celebrationId' element={<UpdateCele/>}/>
     <Route path='/myaccount' element={<MyAccount/>}/>
     <Route path='/forgotPassword' element={<ForgetPassButton/>}></Route>
     <Route path='/reset/:token' element={<ForgetPassword/>}></Route>
     <Route path='/addleave' element={<AddLeave/>}/>
     <Route path='/leavedetails' element={<LeaveDetails/>}/>
     <Route path='/addrole' element={<AddRole/>}/>
     <Route path='/empsalary' element={<EmpSalary/>}/>
     <Route path='/generateSalary/:userId' element={<GenerateSalary/>}/>


     
     </Routes>
     
</div>

</>

  )
}
