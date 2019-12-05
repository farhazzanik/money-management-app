import React from 'react'

let InputLabel = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor} >{ props.label } </label>
            <input 
                type={props.type}
                className={props.className}
                placeholder={`Enter your ${props.placeholder}`}
                name={props.name}
                id ={props.id}
                value = {props.value}
                onChange = {props.changeHandler}
            />
            {props.feedback &&
             <div className="invalid-feedback"> 
                {props.feedback}
             </div>
            }
       </div> 
    )
}


export default InputLabel