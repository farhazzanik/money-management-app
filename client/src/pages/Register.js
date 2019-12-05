import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import InputLabel from './formData/InputLabel'
import {connect} from 'react-redux'
import {register} from '../store/actions/authAction'
import { EROFS } from 'constants';


class Register extends Component {


    state = {
        name : '',
        email : '',
        password : '',
        confirmPassword : '',
        error : {}
    }

    static getDerivedStateFromProps(nextProps , preState){
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(preState.error)){
            return {
                error : nextProps.auth.error
            }
        }
        return null
    }

    changeHandler = event => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }


    submitHandler = event => {
        event.preventDefault()
        let {name , email , password , confirmPassword} = this.state
        this.props.register( {name , email , password , confirmPassword},this.props.history)
    }

    render(){
        let {name , email , password, confirmPassword , error} = this.state
        
        return(
          
            <div className = "container">
                <div className="row">
                    <div className="conl-md-6">
                        <h1 className="text-center display-4">Register Here</h1>
                        <form onSubmit = {this.submitHandler}>
                            <InputLabel 
                                label="Name : " 
                                htmlFor="name" type="text" 
                                placeholder="name" 
                                feedback = {error.name ? error.name : null}
                                className = { error.name ? 'form-control is-invalid' : 'form-control'}
                                name="name" 
                                id="name" 
                                value={name} 
                                changeHandler = {this.changeHandler} />
                                

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

                            <InputLabel 
                                label="Confirm Password : " 
                                htmlFor="confirmPassword" 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="confirmPassword"
                                feedback = {error.confirmPassword ? error.confirmPassword : null} 
                                className = { error.confirmPassword ? 'form-control is-invalid' : 'form-control'}
                                id="confirmPassword" 
                                value={confirmPassword} 
                                changeHandler = {this.changeHandler} />
                           
                            <Link to = '/login'>you have already account..</Link>
                            <button className="btn btn-primary d-block my-4"> Register </button>

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
export default connect(mapStateToProps , {register}) (Register)