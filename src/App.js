import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import Animals from './components/animals/Animals'
import ToDoApp from './todoComponents/ToDoApp'
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <>
      <NavBar />

     <div id='routes_container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/todoList' element={<ToDoApp />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
     </div>
    </>
  );
}

export default App;
