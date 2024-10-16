import {BrowserRouter, Route , Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import   Create from './Create'
import   Read from './Read'
import Update from './Update'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/update/:id' element ={<Update/>}/> 
    </Routes>
  )
}

export default App
