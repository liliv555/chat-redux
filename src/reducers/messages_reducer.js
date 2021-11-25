import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0); // put the new message in the view
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return []; // channel is changed so we have to clear
    }
    default: {
      return state;
    }
  }
}

