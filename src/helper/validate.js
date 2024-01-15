import store from "../app/store";

export const validateBasicInfo = () => {
    var result = [];
    const obj = store.getState().information;
    if(obj.firstName.length == 0 || obj.firstName.length > 30){
        result.push("firstName");
    }
    if(obj.resumeName.length > 0){
        var regexResumeName = /^[^@$^&*!]+$/;
        if(!regexResumeName.test(obj.resumeName)) result.push("resumeName");
    }
    if(obj.lastName.length == 0 || obj.lastName.length > 80){
        result.push("lastName");
    }
    if(obj.mobile){
        let reg = /^09[0|1|2|3][0-9]{8}$/;
        if(!reg.test(obj.mobile)){
            result.push("mobile");
        }
    }
    if(obj.gender === "none"){
        result.push("gender");
    }
    return result;
}

export const runValidation = (routeName) => {
    var result;
    switch(routeName){
      case "/resume/basic-info":
      result = validateBasicInfo();
      break;
    }
    return result;
}
