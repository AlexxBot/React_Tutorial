import React , { Component } from 'react';

export default class TaskForm extends Component {
    render(){
        return (
            <form>
                <input type='text' placeholder = 'write a Task'/>
            </form>
        )
    }
}