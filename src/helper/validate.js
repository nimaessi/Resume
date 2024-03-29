import store from "../app/store";
import { BASICINFO, EDUCATION, JOBEXPERIENCE, PATH, SKILLS } from "../routes/routeAddress";

export const validateBasicInfo = () => {
    var result = [];
    const obj = store.getState().information;
    if(obj.firstName.length == 0 || obj.firstName.length > 30){
        result.push("firstName");
    }
    if(obj.resumeName.length > 0){
        var regexResumeName = /^[^@$^&*!]+$/;
        if(!regexResumeName.test(obj.resumeName) || obj.resumeName.length > 30){
            result.push("resumeName");  
        } 
    }
    if(obj.lastName.length == 0 || obj.lastName.length > 80){
        result.push("lastName");
    }
    if(obj.mobile || obj.mobile.length == 0){
        let reg = /^09[0|1|2|3][0-9]{8}$/;
        if(!reg.test(obj.mobile)){
            result.push("mobile");
        }
    }
    if(obj.gender === "none" || obj.gender == ""){
        result.push("gender");
    }
    if(obj.address.length > 120){
        result.push("address");
    }
    return result;
}

export const validateEducation = () => {

    var result = [];
    const obj = store.getState().education;

    if(obj.grade == 0 || obj.grade == "none"){
        result.push("grade");
    }
    if(obj.field.length > 45 || obj.field.length === 0){
        result.push("field");
    }
    if(obj.university.length > 45){
        result.push("university");
    }
    if(obj.academicOrientation.length > 35){
        result.push("academicOrientation");
    }
    if(obj.average > 20 || obj.average < 0){
        result.push("average");
    }
    return result;
}
export const validateExperience = () => {
    var result = [];
    const obj = store.getState().job.experience;
    obj.map((item) => {
        if(item.jobGroup.length > 30){
            result.push("jobGroup");
        }
        if(item.jobTitle.length > 30 || item.jobTitle.length == 0){
            result.push("jobTitle");
        }
        if(item.company.length > 30){
            result.push("company");
        }
    })
    return result;
}
export const validateSkills  = () => {
    var result = [];
    const obj = store.getState().skills;
    if(obj.skill.length === 0){
        result.push("skill");
    }
    return result;
}
export const validateLogin = (value) => {
    var result = [];
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!value.password){
        result.push("password");
    }
    if(!emailRegex.test(value.email)){
        result.push("email");
    }
    return result;
}
export const validateSignup = (value) => {
    var result = [];
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(value.email)){
        result.push("email");
    }
    if(value.password.trim().length == 0 || value.passwordRepeat.trim().length == 0 ){
        result.push("password");
    }
    if(value.password != value.passwordRepeat){
        result.push("passwordRepeat");
    }
    return result;
}

export const runValidation = (routeName) => {
    var result;
    switch(routeName){
      case BASICINFO:
        result = validateBasicInfo();
      break;
      case EDUCATION:
        result = validateEducation();
      break;
      case JOBEXPERIENCE:
        result = validateExperience();
      break;
      case SKILLS:
        result = validateSkills();
      break;
      default:
        return [];
    }
    return result;
}
