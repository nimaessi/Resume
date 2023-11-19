export const formValidate = (field, value) => {

    if(field === "firstName"){
        if(value.length > 0 && value.length < 40){
            return true;
        }
        return false;
    }
    return true;
}
