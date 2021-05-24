import React, { Component} from 'react';

import Task from './Task'; 
import PropTypes from 'prop-types';


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
        <Task task={item} key={item.id}/>
        
        
        )
    }
}

Tasks.propTypes = {
    tasks : PropTypes.array.isRequired
}

export default Tasks;