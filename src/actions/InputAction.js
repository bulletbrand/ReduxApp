export const ACTION_CHANGE_INPUT_VALUE = 'ACTION_CHANGE_INPUT_VALUE';


//это екшен криетор он возвращает наш екшен, а диспатчится он в mapDispatch to props
// просто чтобы после действия не писать store.dispatch(setRequest(data)) мы это делаем в mapdispatchtoprops
//
export const setInputValue = (newInputValue) =>({

      type:ACTION_CHANGE_INPUT_VALUE,
      payload: newInputValue,
    
})



/*

export function setInputValue(newInputValue) {
  return {
      type:ACTION_CHANGE_INPUT_VALUE,
      payload: newInputValue,
    
  }
}
*/