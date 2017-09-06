import React,{Component} from 'react';
import Button from './button';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      value: ''
    };
  }

  textEntered = (event) => {
    this.setState({ value: event.target.value });
  }

  changeText = () => {
    this.setState({ textValue: this.state.value });
  }

  render(){
    return(
      <div>
          <p>
            <input type="text" value={this.state.value} onChange={this.textEntered} />
            <span>输入文字： {this.state.textValue}</span>
          </p>
          <Button name={'点击'} clicked={this.changeText} />
      </div>
    );
  }
}
