import {FLASH_MESSAGE} from '../action/index';

const initialState = {
  message: null,
  className: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case FLASH_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};