import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import { UserDetail } from './Components/UserDetail';
import { Main } from './Components/Main';
import { Login } from './Components/Login';


const App=()=> {
  return (
    <div>
     <Navbar/>
     <Main/>
     
     

     <Routes>
     {/* <Route path='/users' element={<UserDetail/>}/> */}
     </Routes>

   </div>
  );
}

export default App;
