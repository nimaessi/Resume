import store from "../app/store";

function countEmptyValues(obj) {
    let emptyCount = 0;
    console.log("=====>>>>>",obj)
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          emptyCount++;
        }
      }
    }
  
    return emptyCount;
}
export { countEmptyValues };