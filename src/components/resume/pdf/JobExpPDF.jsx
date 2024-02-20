import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectJob } from "../../../features/job-experience/jobSlice";
import { Fragment } from "react";

const JobExpPDF = () => {
    const job = useSelector(selectJob);
  return (
    <>
        <h6 className = "mt-5 pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75 w-75">
            <Icon.PersonWorkspace className = "text-success me-2" /> سوابق شغلی
        </h6>
        {
            job.experience.map((item,index) => {
                return(
                    <>
                        <figure key = {index}>
                            <blockquote className="blockquote">
                            <p className = "text-muted ms-3 fs-14 mt-3">{ index + 1} - {item.jobGroup} - {item.jobTitle}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">از {item.start} تا { item.end }</cite>
                            </figcaption>
                        </figure>
                        <p key = {index} className = "text-muted ms-3">{ item.company }</p>
                    </>
                )
            })
        }
       
    </>
  )
}

export default JobExpPDF;