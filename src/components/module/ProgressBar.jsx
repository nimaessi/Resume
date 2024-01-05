import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectInformation } from "../../features/information/informationSlice";
import { selectEdu } from "../../features/education/educationSlie";
import { selectJob } from "../../features/job-experience/jobSlice";
import { selectSkill } from "../../features/skills/skillSlice";
import { useEffect } from "react";
import { countEmptyValues } from "../../helper/functions";
import { selectPregress } from "../../features/progressBar/progressSlice";
const MyProgressBar = () => {

  const basicInfo = useSelector(selectInformation);
  const eduInfo = useSelector(selectEdu);
  const jobInfo = useSelector(selectJob);
  const skillInfo = useSelector(selectSkill);
  const prg = useSelector(selectPregress);

  useEffect(() => {
    const num = countEmptyValues({...basicInfo,...eduInfo,...jobInfo,...skillInfo}, 26);
    console.log("NUM" , num)
  },[basicInfo,eduInfo,jobInfo,skillInfo]);

  return (
    <>
      <span className = "text-muted fs-14 p-2">{prg.progress} درصد تکمیل </span>
      <ProgressBar className = "mt-2" variant = "danger" now = {+prg.progress} />
    </>
  )
}

export default MyProgressBar;