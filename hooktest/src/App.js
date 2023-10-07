import React, { useMemo, useState } from 'react';
import UseEffectComponents from './useEffect/UseEffectComponents';
import UseEffectVisible from './useEffect/UseEffectVisible';
import UseReducerCounter from './useReducer/UseReducerCounter';
import UseReducerInfo from './useReducer/UseReducerInfo';
import Average from './useMemo/Average';
import UseMemoComp from './useMemo/UseMemoComp';
import UseCallbackAverage from './useCallback/UseCallbackAverage';
import UseRefComp from './useRef/UseRefComp';


export default function App() {

  return (
    <div>
      <UseRefComp/>
    </div>
  )
}
