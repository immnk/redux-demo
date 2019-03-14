import {
  redux
} from "./redux";
import {
  NumberReducer
} from "./number-reducer";

const numberStore = redux(NumberReducer);
const render = () => {
  const state = numberStore.getState();
  document.getElementById("example-1__value").innerText = state;
};

numberStore.subscribe(render);
render();

export function buttonClick(field) {
  numberStore.dispatch({
    type: field
  });
}
