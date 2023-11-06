import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from './components/home/Home';
import Resume from './components/resume/Resume';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout />} >
        <Route index element = {<Home />} />
        <Route path = '/resume' element = {<Resume />} />
        
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
