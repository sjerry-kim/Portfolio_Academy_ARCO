const initialState = {
  happy : 0,
  sad: 0,
  angry :0
}

export const increaseHappy = () => ({type:"happyIncre"});
export const increaseSad = () => ({type:"sadIncre"});
export const increaseAngry = () => ({type:"angryIncre"});

// 리듀서 작성
function emotionBox(state=initialState, action) {
  switch(action.type) {
    case "happyIncre" :
      return {...state, happy : state.happy + 1}
    case "sadIncre" :
      return {...state, sad : state.sad + 1}
    case "angryIncre" :
      return {...state, angry : state.angry + 1}
    default:
      return state;
  }
}

export default emotionBox;