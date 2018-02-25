import { createStore, combineReducers } from 'redux';

function requireAll(requireContext) {
  const helpers = {};
  const keys = requireContext.keys();
  for (let index = 0; index < keys.length; index++) {
    const filename = keys[index];
    const name = filename.replace(/^\.\//, '').replace(/\.js$/, '').replace('.reducer', '');
    helpers[name] = requireContext(filename).default;
  }
  return helpers;
}

function getCombinedReducers() {
  const requireContext = require.context('./', true, /reducer\.js$/);
  const reducers = requireAll(requireContext);
  const combinedReducers = combineReducers(reducers);
  return combinedReducers;
}

const combinedReducers = getCombinedReducers();
export default createStore(combinedReducers);
