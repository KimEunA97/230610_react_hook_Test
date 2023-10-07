import React, { useMemo, useState } from 'react';
import UseEffectComponents from './useEffect/UseEffectComponents';
import UseEffectVisible from './useEffect/UseEffectVisible';
import UseReducerCounter from './useReducer/UseReducerCounter';
import UseReducerInfo from './useReducer/UseReducerInfo';
import Average from './useMemo/Average';
import UseMemoComp from './useMemo/UseMemoComp';
import UseCallbackAverage from './useCallback/UseCallbackAverage';
import UseRefComp from './useRef/UseRefComp';
import RefSample from './useRef/UseRefExample2';
import MyComponent from './useRef/UseRefExample';
import CustomInfo from './customHooks/customInfo';


export default function App() {

  return (
    <div>
      <CustomInfo/>
    </div>
  )
}
