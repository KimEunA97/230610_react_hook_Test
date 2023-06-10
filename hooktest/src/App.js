import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ value }) {
  // 복잡한 계산 로직을 가정합니다
  const expensiveValue = useMemo(() => {
    // 계산 비용이 많이 드는 작업
    console.log('계산이 수행되었습니다.');
    return value * 2;
  }, [value]);

  return (
    <div>
      <p>입력값: {value}</p>
      <p>계산 결과: {expensiveValue}</p>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <ExpensiveComponent value={count} />
    </div>
  );
}
