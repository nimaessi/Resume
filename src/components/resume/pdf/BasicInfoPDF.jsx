import * as Icon from "react-bootstrap-icons";

const BasicInfoPDF = () => {
  return (
    <>
        <h6 className = "pb-2 text-muted ms-3 border-3 border-bottom border-success border-opacity-75">
            <Icon.InfoCircle className = "text-success me-2" /> اطلاعات پایه
        </h6>
        <p className = "text-muted ms-2 mt-3 fs-14">تهران - شریعتی </p>
        <p className = "text-muted ms-2 mt-3 fs-14"> 09102117951</p>
        <p className = "text-muted ms-2 mt-3 fs-14"> nimaesfahani92@gmail.com</p>
        <p className = "text-muted ms-2 mt-3 fs-14">نظام وظیفه :  پایان خدمت</p>
        <p className = "text-muted ms-2 mt-3 fs-14">وضعیت تاهل: مجرد</p>
        <p className = "text-muted ms-2 mt-3 fs-14">نظام وظیفه :  پایان خدمت</p>
        <p className = "text-muted ms-2 mt-3 fs-14"> متولد : 1372/5/5</p>
    </>
  )
}

export default BasicInfoPDF;