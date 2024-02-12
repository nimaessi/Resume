import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectInformation } from "../../../features/information/informationSlice";
import { getCityName } from "../../../helper/functions";
import { useEffect, useState } from "react";

const BasicInfoPDF = () => {

  const info = useSelector(selectInformation);
  const [city, setCity] = useState("")
  useEffect(() => {
    setCity(() => getCityName(+info.city));
  },[info]);

  return (
    <>
        <h6 className = "pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75">
            <Icon.InfoCircle className = "text-success me-2" /> اطلاعات پایه
        </h6>
        <p className = "text-muted ms-2 mt-3 fs-14"> {city} - {info.address} </p>
        <p className = "text-muted ms-2 mt-3 fs-14"> {info.mobile}</p>
        <p className = "text-muted ms-2 mt-3 fs-14"> nimaesfahani92@gmail.com</p>
        <p className = "text-muted ms-2 mt-3 fs-14">نظام وظیفه :  پایان خدمت</p>
        <p className = "text-muted ms-2 mt-3 fs-14">وضعیت تاهل: مجرد</p>
        <p className = "text-muted ms-2 mt-3 fs-14">نظام وظیفه :  پایان خدمت</p>
        <p className = "text-muted ms-2 mt-3 fs-14"> متولد : { info.birthday }</p>
    </>
  )
}

export default BasicInfoPDF;