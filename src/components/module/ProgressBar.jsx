import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectInformation } from "../../features/information/informationSlice";
import { selectEdu } from "../../features/education/educationSlie";
import { selectJob } from "../../features/job-experience/jobSlice";
import { selectSkill } from "../../features/skills/skillSlice";
import { useEffect } from "react";
import { countEmptyValues } from "../../helper/functions";
const MyProgressBar = () => {

  const basicInfo = useSelector(selectInformation);
  const eduInfo = useSelector(selectEdu);
  const jobInfo = useSelector(selectJob);
  const skillInfo = useSelector(selectSkill);

  useEffect(() => {
    countEmptyValues({basicInfo,eduInfo,jobInfo,skillInfo});
  },[basicInfo,eduInfo,jobInfo,skillInfo]);

  return (
    <>
      <span className = "text-muted fs-14 p-2">درصد تکمیل 15</span>
      <ProgressBar className = "mt-2" variant = "danger" now = {15} />
    </>
  )
}

export default MyProgressBar;