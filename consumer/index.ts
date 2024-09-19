import store, { setUDAGlobalConfig,getUDAGlobalConfig } from 'udan-redux-state';
import { CustomConfigPropTypes } from 'udan-redux-state/dist/config/CustomConfig';

// Example configuration object
const newConfig: CustomConfigPropTypes = {
    // Add your configuration properties here
    environment:'DEV'
};

// Dispatch an action to update the state
store.dispatch(setUDAGlobalConfig(newConfig));

// Get the current state
const currentConfig = getUDAGlobalConfig();
console.log(currentConfig);


const handleStateUpdate = () => {
    const state = store.getState();
    console.log('State updated:', state);
};

store.subscribe(handleStateUpdate)