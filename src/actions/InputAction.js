export const ACTION_CHANGE_INPUT_VALUE = 'ACTION_CHANGE_INPUT_VALUE';

//вынести потом экшен на инпут который в отдельную фцию


export function setInputValue(newInputValue) {
  return {
      type:ACTION_CHANGE_INPUT_VALUE,
      payload: newInputValue,
    
  }
}