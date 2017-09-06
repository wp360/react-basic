import React,{PropTypes} from 'react';

const Button = (props) => {
    return (
        <button type="button" className="btn btn-default" onClick={props.clicked}>{props.name}</button>
    );
}

Button.PropTypes = {
    name: PropTypes.string,
    clicked: PropTypes.func
}

export default Button;