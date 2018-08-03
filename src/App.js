import TodoListTemplate from './components/TodoListTemplate.js'
import React, {Component} from 'react';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
class App extends Component{
  render(){
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    )
  }
}

export default App;
