import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectJob } from "../../../features/job-experience/jobSlice";

const JobExpPDF = () => {
    const job = useSelector(selectJob);
  return (
    <>
        <h6 className = "mt-5 pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75 w-75">
            <Icon.PersonWorkspace className = "text-success me-2" /> سوابق شغلی
        </h6>
        <figure>
            <blockquote className="blockquote">
            <p className = "text-muted ms-3 fs-6 mt-3">1- برنامه نویسی </p>
            </blockquote>
            <figcaption className="blockquote-footer">
                <cite title="Source Title">از خرداد 1400 تا مرداد 1402</cite>
            </figcaption>
        </figure>
        <p className = "text-muted ms-3">نام شرکت یا مجموعه</p>

        <figure>
            <blockquote className="blockquote">
            <p className = "text-muted ms-3 fs-6 mt-3">1- برنامه نویسی </p>
            </blockquote>
            <figcaption className="blockquote-footer">
                <cite title="Source Title">از خرداد 1400 تا مرداد 1402</cite>
            </figcaption>
        </figure>
        <p className = "text-muted ms-3">نام شرکت یا مجموعه</p>

        <figure>
            <blockquote className="blockquote">
            <p className = "text-muted ms-3 fs-6 mt-3">1- برنامه نویسی </p>
            </blockquote>
            <figcaption className = "blockquote-footer">
                <cite title="Source Title">از خرداد 1400 تا مرداد 1402</cite>
            </figcaption>
        </figure>
        <p className = "text-muted ms-3">نام شرکت یا مجموعه</p>
    </>
  )
}

export default JobExpPDF;