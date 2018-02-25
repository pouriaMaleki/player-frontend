import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  playing: false,
  playingInfo: null
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'play':
      state = state.set('playing', true);
      break;

    case 'toggle':
      if (state.set('playingInfo', action.data)) {
        state = state.set('playing', !state.get('playing'));
      }
      break;

    case 'selectSong':
      state = state.set('playing', true);
      state = state.set('playingInfo', action.data);
      break;

    default:
      break;
  }
  return state;
}

export default reducer;
