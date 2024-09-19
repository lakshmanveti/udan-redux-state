import { createStore, applyMiddleware, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { CustomConfig, CustomConfigPropTypes } from './config/CustomConfig';
import { ValidateConfig } from './config/ValidateConfig';

export interface State {
    UDAGlobalConfig: CustomConfigPropTypes;
}

const initialState: State = {
    UDAGlobalConfig: CustomConfig,
};

const SET_UDAGLOBALCONFIG = 'SET_UDAGLOBALCONFIG';
const SET_UDAGLOBALCONFIG_REQUEST = 'SET_UDAGLOBALCONFIG_REQUEST';

interface SetUDAGlobalConfigAction {
    type: typeof SET_UDAGLOBALCONFIG;
    payload: CustomConfigPropTypes;
}

interface SetUDAGlobalConfigRequestAction {
    type: typeof SET_UDAGLOBALCONFIG_REQUEST;
    payload: CustomConfigPropTypes;
}

type AppActions = SetUDAGlobalConfigAction | SetUDAGlobalConfigRequestAction;

const reducer = (state = initialState, action: AppActions): State => {
    switch (action.type) {
        case SET_UDAGLOBALCONFIG:
            return {
                ...state,
                UDAGlobalConfig: action.payload,
            };
        default:
            return state;
    }
};

function* setUDAGlobalConfigSaga(action: SetUDAGlobalConfigRequestAction) {
    try {
        const newConfig: CustomConfigPropTypes = yield call(ValidateConfig, action.payload);
        yield put({ type: SET_UDAGLOBALCONFIG, payload: newConfig });
    } catch (e) {
        console.error(e);
    }
}

function* watchSetUDAGlobalConfig() {
    yield takeEvery(SET_UDAGLOBALCONFIG_REQUEST, setUDAGlobalConfigSaga);
}

function* rootSaga() {
    yield all([
        watchSetUDAGlobalConfig(),
    ]);
}

export const setUDAGlobalConfig = (data: CustomConfigPropTypes): SetUDAGlobalConfigRequestAction => ({
    type: SET_UDAGLOBALCONFIG_REQUEST,
    payload: data,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const getUDAGlobalConfig = (): CustomConfigPropTypes => {
    return store.getState().UDAGlobalConfig;
};

export default store;
