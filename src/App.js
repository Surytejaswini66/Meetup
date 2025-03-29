import {Component} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register'
import Home from './components/Home'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RegisterContext.Provider>
    )
  }
}

export default App
