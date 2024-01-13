export const validateBasicInfo = (obj) => {
    var result = [];
    if(obj.firstName.length == 0 || obj.firstName.length > 30){
        result.push("firstName");
    }
    var regexResumeName = /^[a-zA-Z]+$/;
    if(obj.resumeName.length > 20 || !regexResumeName.test(obj.resumeName)){
        result.push("resumeName");
    }


        
    return result;
}

