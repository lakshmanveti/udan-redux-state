"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const udan_redux_state_1 = require("udan-redux-state");
// Example configuration object
const newConfig = {
// Add your configuration properties here
};
// Dispatch an action to update the state
// store.dispatch(setUDAGlobalConfig(newConfig));
// Get the current state
const currentConfig = (0, udan_redux_state_1.getUDAGlobalConfig)();
console.log(currentConfig);
