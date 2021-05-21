import React, { Component } from 'react';
import './App.css';

import tasks from './example/tasks.json';

import Tasks from './components/Tasks';

//console.log(tasks)

class App extends Component {

  state = {
    tasks: tasks
  }

  /* render(){
    return (<div>
      {
        this.state.tasks.map(item => 
          <p key={item.id}> {item.id} - {item.title} 
          <Task/>
          </p>
        )
      }
    </div>)
  } */

  render(){
    return <div>
      <Tasks tasks = {this.state.tasks}/>
    </div>
  }
}


function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">{props.mytext}
      <h3>{props.subtitle}</h3>

    </div>
  )
}

class HolaMundo extends Component {

  state = {
    show: true
  }

  toogleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
      <div id="hello">
        {this.props.mytext}
        <h3>{this.props.subtitle}</h3>

        {/* <button onClick = { () => this.setState({ show : false})}>Toogle show</button> */}

        <button onClick = {this.toogleShow } >Toggle Show </button>

      </div>
      )
    }
    else{
      return (
        <h1>No hay elementos <button onClick={ this.toogleShow }>Toogle show</button> </h1>
        
      )
    }

  }

}

//const App = () => <div> This is my component : <HelloWorld/></div>;

/* class MyApp extends Component{
  render() {
    return <div>This my my component from render : <HelloWorld/></div>;
  }
} */

/* function App() {
  return (
    <div>This is my component :
      <HelloWorld mytext="Hello fazt" subtitle="este es el subtitulo" />
      <HelloWorld mytext="Hello ALEX" subtitle="este es otro subtitulo" />
      <HolaMundo mytext="Hello ALEX desde hola mundo 2" subtitle="este es otro subtitulo" />
    </div>
  );
} */

export default App;
