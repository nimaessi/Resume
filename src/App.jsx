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
import { ADDITIONALINFO, BASICINFO, EDUCATION, GENERATEPDF, JOBEXPERIENCE, PATH, RESUME, SELECTSTEP, SKILLS } from './routes/routeAddress';
import GeneratePdf from './components/resume/pdf/GeneratePdf';
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path = {PATH} element = {<Layout />} >
        <Route index element = {<Home />} />
        <Route path = {`${RESUME}/*`} element = {<Experience />}/>
        <Route path = {BASICINFO} element = {<BasicInfo />} />
        <Route path = {SELECTSTEP} element = {<Steps />} />
        <Route path = {EDUCATION} element = {<Education />} />
        <Route path = {JOBEXPERIENCE} element = {<JobExperience />} />
        <Route path = {SKILLS} element = {<Skills />} />
        <Route path = {ADDITIONALINFO} element = {<FurtherInformation />} />
        <Route path = {GENERATEPDF} element = {<GeneratePdf />} />
      </Route>
    </Routes>
   </BrowserRouter>
  ) 
}

export default App;
