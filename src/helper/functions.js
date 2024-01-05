import store from "../app/store";
import { setProgress } from "../features/progressBar/progressSlice";

function countEmptyValues(obj,total) {
  let emptyCount = 0;
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
  return Math.round(progress);

}

export { countEmptyValues };