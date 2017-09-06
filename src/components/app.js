import React from 'react';
import Button from './button';


const App = () => (
  <div>
    <Button name={'点击'} clicked={()=>console.log('按钮已经点击')} />
    <Button name={'搜索'} />
  </div>
);

export default App;
