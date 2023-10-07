import { useState } from "react";
import UseEffectComponents from "./UseEffectComponents";


const UseEffectVisible = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <UseEffectComponents />}
    </div>
  )

}

export default UseEffectVisible;