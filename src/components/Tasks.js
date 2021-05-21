import React, { Component} from 'react';

import Task from './Task'; 


class Tasks extends Component {
    render(){
        return this.props.tasks.map(item => /* {<p key={item.id}>
            {item.title} - {item.description} - {item.done} - {item.id}

            <input type="checkbox"/>
            <button>
                x
            </button>
        </p>
    
    } */
        <Task task={item}/>
        
        
        )
    }
}

export default Tasks;