import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let initialState = {
    eventId: null,
    paymentId: null,
    filters: { year: null, type: null },
  };

  let reducer = (state, action) => {
    if (action.type === 'SET_EVENT') {
      return { ...state, eventId: action.value, paymentId: null };
    } else if (action.type === 'SET_FILTERS') {
      return { ...state, filters: action.value };
    } else if (action.type === 'SET_PAYMENT') {
      return { ...state, paymentId: action.value };
    } else if (action.type === 'RESET') {
      return { ...initialState };
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
