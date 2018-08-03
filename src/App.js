import TodoListTemplate from './components/TodoListTemplate.js'
import React, {Component} from 'react';
import Form from './components/Form'

class App extends Component{
  render(){
    return (
      <TodoListTemplate form={<Form/>}>
        템플릿완성
      </TodoListTemplate>
    )
  }
}

export default App;
