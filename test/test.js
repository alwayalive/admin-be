function createThunkMiddleware(extraArgument) {
    return function({ dispatch, getState }) {
        return function(next) {
            return function(action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }

                return next(action);
            }
        }
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;


export default function applyMiddleware(...middlewares) {

    return (next) => (reducer, initialState) => {
            var store = next(reducer, initialState);
            var dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
                getState: store.getState,
                dispatch: (action) => dispatch(action)
            };
            chain = middlewares.map(middleware =>
                middleware(middlewareAPI));
            dispatch = compose(...chain, store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}


export default function compose(...funcs) {
     return funcs.reduceRight((composed, f) => f(composed));
}