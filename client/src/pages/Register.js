import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import InputLabel from './formData/InputLabel'
class Register extends Component {
    state = {
        name : '',
        email : '',
        password : '',
        confirmPassword : '',
        error : {}
    }

    changeHandler = event => {
        this.setState ({
            [event.target.name] : [event.target.value]
        })
    }


    submitHandler = event => {
        event.preventDefault()
    }

    render(){
        let {name , email , password, confirmPassword} = this.state

        return(
          
            <div className = "container">
                <div className="row">
                    <div className="conl-md-6">
                        <h1 className="text-center display-4">Register Here</h1>
                        <form onSubmit = {this.submitHandler}>
                            <InputLabel label="Name : " htmlFor="name" type="text" placeholder="name" name="name" id="name" value={name} changeHandler = {this.changeHandler} />
                            <InputLabel label="Email : " htmlFor="email" type="email" placeholder="E-mail" name="email" id="email" value={email} changeHandler = {this.changeHandler} />
                            <InputLabel label="Password : " htmlFor="password" type="password" placeholder="Password" name="password" id="password" value={password} changeHandler = {this.changeHandler} />
                            <InputLabel label="Confirm Password : " htmlFor="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" value={confirmPassword} changeHandler = {this.changeHandler} />

                            <Link to = '/login'>you have already account..</Link>
                            <button className="btn btn-primary d-block my-4"> Register </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register