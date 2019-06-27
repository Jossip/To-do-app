import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const TodoItem = (props) => {
        return(
            <div className='todo-item'>

                <input type='checkbox' onChange={() => props.handleChange(props.item.id)} />
                <p>{props.item.text}</p>
                <br/>
                <br /><hr />

            </div>
        )
    }

export default TodoItem