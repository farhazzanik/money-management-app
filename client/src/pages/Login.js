import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import InputLabel from './formData/InputLabel'
import {connect} from 'react-redux'
import {login} from '../store/actions/authAction'

class Login extends Component {
    state = {
        email : '',
        password : '',
        error : {}
     }

    changeHandler = event => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    static getDerivedStateFromProps(nextProps , preState){
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(preState.error)){
            return {
                error : nextProps.auth.error
            }
        }
        return null
    }

    submitHandler = event => {
        event.preventDefault()
        let {email , password} = this.state
        this.props.login({email,password} , this.props.history)
    }

    render(){
        let { email , password, error } = this.state
        
        return(
          
            <div className = "container">
                <div className="row">
                    <div className="conl-md-6">
                        <h1 className="text-center display-4">Login Here</h1>
                        <form onSubmit = {this.submitHandler}>
                           
                            
                            <InputLabel 
                                label="Email : " 
                                htmlFor="email" 
                                type="email" 
                                placeholder="E-mail" 
                                feedback = {error.email ? error.email : null}
                                className = { error.email ? 'form-control is-invalid' : 'form-control'}
                                name="email" 
                                id="email" 
                                value={email} 
                                changeHandler = {this.changeHandler} />
                                


                            <InputLabel 
                                label="Password : " 
                                htmlFor="password" 
                                type="password"
                                feedback = {error.password ? error.password : null}
                                placeholder="Password" 
                                className = { error.password ? 'form-control is-invalid' : 'form-control'}
                                name="password" 
                                id="password" 
                                value={password} 
                                changeHandler = {this.changeHandler} />


                            <Link to = '/register'>Do not have account register here..</Link>
                            <button className="btn btn-primary d-block my-4"> Login </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
        auth : state.auth
    })

export default connect(mapStateToProps , {login})(Login)