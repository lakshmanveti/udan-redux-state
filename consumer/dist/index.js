"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var udan_redux_state_1 = __importStar(require("udan-redux-state"));
// Example configuration object
var newConfig = {
    // Add your configuration properties here
    environment: 'DEV'
};
// Dispatch an action to update the state
udan_redux_state_1.default.dispatch((0, udan_redux_state_1.setUDAGlobalConfig)(newConfig));
// Get the current state
var currentConfig = (0, udan_redux_state_1.getUDAGlobalConfig)();
console.log(currentConfig);
var handleStateUpdate = function () {
    var state = udan_redux_state_1.default.getState();
    console.log('State updated:', state);
};
udan_redux_state_1.default.subscribe(handleStateUpdate);
