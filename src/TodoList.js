import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends Component {

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de Tarefas</h2>
          <form>
            <input placeholder="Digite tarefa"></input>
            <button type="submit">Adicionar</button>
          </form>
        </div>
        </div>
    );
  }
}
var TodoList2 = React.createClass({
    getInitialState: function(){
        return {
            items: []
        };
    }
})
export default TodoList;