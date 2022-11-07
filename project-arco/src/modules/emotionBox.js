const initialState = {
  number : 0,
}

export const increase = () => ({type:"increment"})

// 리듀서 작성
function emotionBox(state=initialState, action) {
  switch(action.type) {
    case "increment" :
      return {...state, number : state.number + 1}
      default:
      return state;
  }
}

export default emotionBox;