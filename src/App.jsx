import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from './components/home/Home';
import Experience from './components/resume/Experience';
import BasicInfo from './components/resume/basic-info/BasicInfo';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout />} >
        <Route index element = {<Home />} />
        <Route path = "/resume/*" element = {<Experience />}/>
        <Route path = "/resume/basic-info" element = {<BasicInfo />} />
      </Route>
    </Routes>
   </BrowserRouter>
  ) 
}

export default App;
