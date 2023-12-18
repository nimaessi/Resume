import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from './components/home/Home';
import Experience from './components/resume/Experience';
import BasicInfo from './components/resume/basic-info/BasicInfo';
import Steps from './components/resume/steps/Steps';
import Education from './components/resume/education/Education';
import JobExperience from './components/resume/job-experience/JobExperience';
import Skills from './components/resume/skills/Skills';
import FurtherInformation from './components/resume/further-information/FurtherInformation';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout />} >
        <Route index element = {<Home />} />
        <Route path = "/resume/*" element = {<Experience />}/>
        <Route path = "/resume/basic-info" element = {<BasicInfo />} />
        <Route path = "/resume/select-step" element = {<Steps />} />
        <Route path = "/resume/education" element = {<Education />} />
        <Route path = "/resume/job-experience" element = {<JobExperience />} />
        <Route path = "/resume/skills" element = {<Skills />} />
        <Route path = "/resume/additional-information" element = {<FurtherInformation />} />
      </Route>
    </Routes>
   </BrowserRouter>
  ) 
}

export default App;
