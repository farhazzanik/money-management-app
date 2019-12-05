import React,{Component} from 'react';
import {connect}  from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../store/actions/authAction'

class Home  extends Component {
    render(){
        return(
            <div className="container">
                <h1>I am Home..</h1>
                {
                    this.props.auth.isAuthenticate ? 
                        <button className="btn btn-danger btn-sm" onClick = { () => this.props.logout(this.props.history)}> LogOut </button> :
                        <Link to='/login'> <button className="btn btn-success btn-sm">LogIn</button></Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth
})
export default connect(mapStateToProps , {logout})(Home)