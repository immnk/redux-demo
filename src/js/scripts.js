(function() {
  import { redux } from './redux';
  const numberReducer = (state =0, action) => {
    switch(action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }

  const numberStore = redux(numberReducer);

  numberStore.subscribe(()=> {
    const state = numberStore.getState();
    document.getElementById("numberId").innerText = state;
  });

  const buttonClick = (field) => {
    numberStore.dispatch({type: field});
  }
})();
