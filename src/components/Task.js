import React, { Component } from 'react';

export default class Task extends Component {
    render() {
        return (
        <p key={this.props.task.id}>
            {this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}

            <input type="checkbox"/>
            <button>
                x
            </button>
        </p>
        )        
    }
}