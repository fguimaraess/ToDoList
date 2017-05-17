import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <TodoList/>
    );
  }
}

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  addItem: function(e){
    var itemArray = this.state.items;

    itemArray.push({
      text: this._inputElement.value,
      key: Date.now()
    });

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    e.preventDefault();
  },
  render: function() {
      return (
      <div className="todoListMain">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de Tarefas</h2>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Digite tarefa"></input>
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
        </div>
    );
    }
});

var TodoItems = React.createClass({
  render: function(){
    var todoEntries = this.props.entries;

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);

    return(
      <ul className="theList">
        {listItems}
        </ul>
    );
}});

export default App;
