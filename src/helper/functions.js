import store from "../app/store";
import { setProgress } from "../features/progressBar/progressSlice";
import { validateBasicInfo } from "./validate";
import { toast } from 'react-toastify';

function countEmptyValues(obj) {

  let emptyCount = 0;
  delete obj.studying;
  let total = Object.keys(obj).length;
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          emptyCount++;
        }
      }
  }
  let full = total - emptyCount;
  let progress = (full *100)/ total;
  store.dispatch(setProgress(Math.round(progress)));
}

function getPathTitle(path) {

  var pathTitle = "";
  switch(path){

    case "/resume":
       return pathTitle = "ساخت رزومه - وضعیت شغلی";
    case "/resume/select-step":
      return pathTitle = "ساخت رزومه - انتخاب مراحل";
    case "/resume/basic-info":
      return pathTitle = "ساخت رزومه -  اطلاعات اولیه";
    case "/resume/education":
      return pathTitle = "ساخت رزومه - وضعیت تحصیلی";
    case "/resume/job-experience":
      return pathTitle = "ساخت رزومه - سابقه شغلی";
    case "/resume/skills":
      return pathTitle = "ساخت رزومه -  مهارت ها";
    case "/resume/additional-information":
      return pathTitle = "ساخت رزومه -  اطلاعات تکمیلی";
    default:
      return pathTitle = "";
  }
}


const notifyError = (message = " ") => toast.error( message, 
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    progress: undefined,
  }
  );

export { countEmptyValues, getPathTitle, notifyError };