import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectInformation } from "../../../features/information/informationSlice";

const AboutPDF = () => {

  const info = useSelector(selectInformation);
    return(
      <>
          <h6 className = "pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75">
              <Icon.PersonCircle className = "text-success me-2" />درباره من
          </h6>
          <p className = "text-muted lh-base justify-text">{info.additionalInformation}</p>
      </>
    )
  
}

export default AboutPDF;