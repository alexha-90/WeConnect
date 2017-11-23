import React, {Component} from 'react';
import { connect } from 'react-redux';

import { allTasksGET } from '../actions/index';


class AvailableTasks extends Component {

    componentWillMount() {
        //run action to query database and return all tasks
        return this.props.dispatch(allTasksGET());
    }

    /*
            // iterate through console.log(results['rows'].length);
        //console.log(results['rows'][0]) 1,2,3, x etc to retrieve all results;
     */



    /*
    propagateTasks() {
        let testArray = [0,1,2,3,4];
        //map array. return array with new entries
        return (
            <div>
                <ul>
                    <li>hello</li>
                </ul>
            </div>
        );
    }
    */



    render() {
        return (
            <div>
                <h1>all tasks placeholder</h1>
                <h1>{this.props.newTask.taskValue}</h1>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        newTask: state.newTaskReducer.newTask
    };
}

export default connect(mapStateToProps)(AvailableTasks);


/*
                <button onClick={this.propagateTasks}>
                    test
                </button>

                {this.propagateTasks()}

 */