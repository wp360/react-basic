import React from 'react';

function alertText(){
    alert('按钮已经点击');
}

const Button = () => (
    <button type="button" className="btn btn-default" onClick={alertText}>点击</button>
);

export default Button;