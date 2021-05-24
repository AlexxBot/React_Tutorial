import React, { Component } from 'react';
import './Task.css'

import PropTypes from 'prop-types';

export default class Task extends Component {

    styleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray': 'black',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }

    render() {
        const {task} = this.props;
        const redColor = { background: 'red'};
        return (
        <p className = "" style = { this.styleCompleted() }>
            {task.title} - {task.description} - {task.done} - {this.props.task.id}

            <input type="checkbox"/>
            <button style = { btnDelete }>
                x
            </button>
        </p>
        )        
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize : '30px',
    background : '#ea2027',
    color: 'fff',
    border : 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    //float: 'right'

}