import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {
      
        email : '',
        password : '',
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
                        <h1 className="text-center display-4">Login Here</h1>
                        <form onSubmit = {this.submitHandler}>
                           

                            <div className="form-group">
                                <label htmlFor="email">Email : </label>
                                <input 
                                    type="eamil"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    id = "email"
                                    value = {email}
                                    onChange = {this.changeHandler}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    name="password"
                                    id = "password"
                                    value = {password}
                                    onChange = {this.changeHandler}
                                />
                            </div>


                            <Link to = '/register'>Do not have account register here..</Link>
                            <button className="btn btn-primary d-block my-4"> Register </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login