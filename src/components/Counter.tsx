import { useState } from 'react';
import { Button } from './ui/button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6 py-8">
      <Button className='px-5' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <div className="my-2 p-1 radius-10 bg-warning text-warning-foreground">Hello</div>
    </div>
  );
}

export default Counter;
