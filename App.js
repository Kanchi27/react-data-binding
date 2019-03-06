import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    name:'techsith'
  }

  /*changeName= () =>{
    this.setState({
        name:'Awesome Techsith'
    })
  }*/
  changeName= (newName) =>{
    this.setState({
        name:newName
    })
  }
  changeNameFromInput=(event) =>{
    this.setState({
      name:event.target.value
    })
  }

  render() {
    return (
    <div className="App">
      <br/> <br/>
      {/*<button onClick={this.changeName}>Change state</button>*/}
     <button onClick={()=>this.changeName('Awesomeeeeee Techsith')}>Change state inline anon function</button>
      <button onClick={this.changeName.bind(this,'Awesomeeeeee Techhhhhhhsith')}>Change state using bind function</button>
      

      <br/> <br/>
      <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      <br/> <br/>
      <div>{this.state.name}</div>
    </div>
    );
  }
}

export default App;
