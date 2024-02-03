import store from "../app/store";
import { setProgress } from "../features/progressBar/progressSlice";
import { ADDITIONALINFO, BASICINFO, EDUCATION, JOBEXPERIENCE, RESUME, SELECTSTEP, SKILLS } from "../routes/routeAddress";
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

    case RESUME:
       return pathTitle = "ساخت رزومه - وضعیت شغلی";
    case SELECTSTEP:
      return pathTitle = "ساخت رزومه - انتخاب مراحل";
    case BASICINFO:
      return pathTitle = "ساخت رزومه -  اطلاعات اولیه";
    case EDUCATION:
      return pathTitle = "ساخت رزومه - وضعیت تحصیلی";
    case JOBEXPERIENCE:
      return pathTitle = "ساخت رزومه - سابقه شغلی";
    case SKILLS:
      return pathTitle = "ساخت رزومه -  مهارت ها";
    case ADDITIONALINFO:
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