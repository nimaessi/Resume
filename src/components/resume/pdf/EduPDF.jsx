import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectEdu} from "../../../features/education/educationSlie";
import { getGradeName } from "../../../helper/functions";

const EduPDF = () => {
  const edu = useSelector(selectEdu);
  return (
    <>
        <h6 className = "mt-5 pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75 w-75">
            <Icon.BookHalf className = "text-success me-2" /> سوابق تحصیلی
        </h6>
        <p className = "text-muted ms-2 mt-3">{edu.field}{}</p>
        <p className = "text-muted ms-2 mt-3 fs-14">{edu.university}
          { edu.academicOrientation && ` - گرایش ${edu.academicOrientation}`}
        </p>
        <p className = "text-muted ms-2 mt-3 fs-14 opacity-75">مقطع : {getGradeName()} </p>
        <p className = "text-muted ms-2 fs-14 opacity-75"> {edu.start} - {edu.end}</p>
    </>
  )
}

export default EduPDF;