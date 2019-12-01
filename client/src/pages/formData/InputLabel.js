import React from 'react'

let InputLabel = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor} >{ props.label } </label>
            <input 
                type={props.type}
                className="form-control"
                placeholder={`Enter your ${props.placeholder}`}
                name={props.name}
                id ={props.id}
                value = {props.value}
                onChange = {props.changeHandler}
            />
       </div> 
    )
}


export default InputLabel