import React, { Component } from 'react'
import axios from 'axios'
import './signup.css'

class SignUp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         password: ''
      }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(resp => {
            console.log(resp);
        })
        .catch(error => {
            console.log(error);
        })

        console.log(this.state.name)

        alert('Congratulation ' + this.state.name + ' now you\'r one of our Memmbers')
    }
    render(){
        const {name, password} = this.state

    const nameInputFocus = function () {
        const nameLabel = document.getElementById('name_label')
        nameLabel.classList.add('active')
    }
    const nameInputBlur = function () {
        const input1 = document.getElementById('input_1')
        const nameLabel = document.getElementById('name_label')
        const value1 = document.getElementById('input_1').value;

        if (value1.length === 0) {
            input1.style.borderColor = 'red'
            nameLabel.classList.remove('active')
        } else if (value1.length > 0) {
            input1.style.borderColor = 'green'
        }
    }
    const passInputFocus = function () {
        const passLabel = document.getElementById('passLabel')
        passLabel.classList.add('active')
    }
    const passInputBlur = function () {
        const passLabel = document.getElementById('passLabel')
        const input2 = document.getElementById('input_2')
        const value2 = document.getElementById('input_2').value;
        passLabel.classList.remove('active')
        
        if (value2.length === 0) {
            input2.style.borderColor = 'red'
            passLabel.classList.remove('active')
        }else if (value2.length > 0){
            input2.style.borderColor = 'green'
            passLabel.classList.add('active')
        }
    }
    
    return (
      <div id='form_container'>
          <form onSubmit={this.submitHandler}>
             <div id='form_title'>
              <h4>Registration Form</h4><hr/>
             </div>
             <div id='name_div'>
               <label id='name_label'>Name</label>
               <input 
               type='text' 
               required 
               id='input_1'
               name='name'
               value={name}
               onFocus={nameInputFocus}
               onBlur={nameInputBlur}
               onChange = {this.changeHandler}
               />
             </div>
  
             <div id='password_div'>
               <label id='passLabel'>Password</label>
               <input 
               type='password' 
               required
               id='input_2'
               name='password'
               value={password}
               onFocus={passInputFocus}
               onBlur={passInputBlur}
               onChange = {this.changeHandler}
               minLength = '6'
               />
             </div>
  
             <div id='submit_div'>
               <button type='submit'>Submit</button>
             </div>
          </form>
      </div>
    )
}
}

export default SignUp