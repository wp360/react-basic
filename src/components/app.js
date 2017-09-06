import React,{Component} from 'react';
import Button from './button';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      value: ''
    };
  }

  textEntered = (event) => {
    console.log('text：', event.target.value);
    this.setState({ value: event.target.value });
  }

  render(){
    return(
      <div>
        <p>
          <span className="btn btn-default">{this.state.counter}</span>
          <Button name={'加1'} clicked={()=> this.setState({counter: this.state.counter + 1})} />
        </p>
        <div>
          <input type="text" value={this.state.value} onChange={this.textEntered} />
          <p>{this.state.value}</p>
        </div>
      </div>
    );
  }
}
