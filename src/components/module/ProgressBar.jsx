import { ProgressBar } from "react-bootstrap";

const MyProgressBar = () => {
  return (
    <>
      <span className = "text-muted fs-14 p-2">درصد تکمیل 15</span>
      <ProgressBar className = "mt-2" variant = "danger" now = {15} />
    </>
  )
}

export default MyProgressBar;