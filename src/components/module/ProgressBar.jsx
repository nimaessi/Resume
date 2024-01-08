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
    countEmptyValues({...basicInfo,...eduInfo,...jobInfo,...skillInfo});
  },[basicInfo,eduInfo,jobInfo,skillInfo]);

  return (
    <>
      <span className = "text-muted fs-14 p-2">{prg.progress} درصد تکمیل </span>
      <ProgressBar className = "mt-2" variant = {+prg.progress > 50 ? "success" : "danger"} now = {+prg.progress} />
    </>
  )
}

export default MyProgressBar;