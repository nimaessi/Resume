import store from "../app/store";
import { setProgress } from "../features/progressBar/progressSlice";
import { ADDITIONALINFO, BASICINFO, EDUCATION, JOBEXPERIENCE, RESUME, SELECTSTEP, SKILLS } from "../routes/routeAddress";
import { toast } from 'react-toastify';
import iranCities from "../utils/cities";

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

const getCityName =  () => {
  const cityId = store.getState().information.city; 
  const city = iranCities.filter((city) => city.id == parseInt(cityId));
  return city[0].name;
}

const getMilitaryName = () => {
  const militaryStatus = store.getState().information.militaryStatus; 
  switch(militaryStatus) {
    case "none":
      return " ";
    case "educationPardon":
      return "معافیت تحصیلی";
    case "exemption":
      return "معافیت دائم";
    case "included":
      return "مشمول";
    case "end":
      return "پایان خدمت";
    default:
      return " ";
  }
}
const getMaritalName = () => {
  const marital = store.getState().information.maritalStatus;
  switch(marital) {
    case "none":
      return " ";
    case "single":
      return "مجرد";
    case "married":
      return "متاهل";
    default:
      return " ";
  }
}
const getGradeName = () => {
  const grade = store.getState().education.grade;
  switch(grade){
    case "1":
      return "دیپلم";
    case "2":
      return "کاردانی";
    case "3":
      return "کارشناسی";
    case "4":
      return "کارشناسی ارشد";
    case "5":
      return "دکترا";
    default:
      return "";
  }
}
 
export { 
  countEmptyValues, 
  getPathTitle, 
  notifyError, 
  getCityName, 
  getMilitaryName, 
  getMaritalName,
  getGradeName
 };