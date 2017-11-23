import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { allTasksGET } from '../actions/index';

// expand description upon clicking
// show a loading page first
//===============================================================================================//




class AvailableTasks extends Component {
    constructor() {
        super();
        this.propagateTasks = this.propagateTasks.bind(this);
    }

    componentWillMount() {
        //run action to query database and return all tasks
        return this.props.dispatch(allTasksGET());
    }

    //    componentWillReceiveProps() {

    componentDidMount() {
        setTimeout(() => {
            /*
            console.log(this.props.allAvailableTasks[0]);
            console.log(this.props.allAvailableTasks[0]['category']);
            console.log(this.props.allAvailableTasks[0]['summary']);
            console.log(this.props.allAvailableTasks[0]['value']);
            console.log(this.props.allAvailableTasks[0]['description']);
            console.log(this.props.allAvailableTasks[0]['hour']);
            console.log(this.props.allAvailableTasks[0]['date']);
            */

            for (let i = 0; i < this.props.allAvailableTasks.length; i++) {
                console.log(this.props.allAvailableTasks[i]['summary'])
            }
            this.propagateTasks();
            }, 600);
    }


    //kept inside because of bound constructor, need props
    propagateTasks() {
        let testArray = [0,1,2,3,4];
        let keyCount = 0;
        return (
            <div>

                <ul>
                    {testArray.map((listItem) => {
                        keyCount +=1;
                        return <li key={keyCount}>{listItem}</li>
                    })}

                </ul>
            </div>
        )
    }


    render() {
        return (
            <div>
                <h1>all tasks placeholder</h1>
                {this.propagateTasks()}

                <Table striped responsive bordered>
                    <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Needed By Date</th>
                        <th>Needed By Hour</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>





            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        allAvailableTasks: state.allTasksReducer.availableTasks,
        allClaimedTasks: state.allTasksReducer.claimedTasks
    };
}

export default connect(mapStateToProps)(AvailableTasks);


/*
                <Table striped responsive bordered>
                    <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Needed By Date</th>
                        <th>Needed By Hour</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.allAvailableTasks[0]['summary']}</td>
                        <td>{this.props.allAvailableTasks[0]['value']}</td>
                        <td>{this.props.allAvailableTasks[0]['category']}</td>
                        <td>{this.props.allAvailableTasks[0]['date']}</td>
                        <td>{this.props.allAvailableTasks[0]['hour']}</td>
                        <td>{this.props.allAvailableTasks[0]['description']}</td>
                    </tr>
                    <tr>
                        <td>{this.props.allAvailableTasks[1]['summary']}</td>
                        <td>{this.props.allAvailableTasks[1]['value']}</td>
                        <td>{this.props.allAvailableTasks[1]['category']}</td>
                        <td>{this.props.allAvailableTasks[1]['date']}</td>
                        <td>{this.props.allAvailableTasks[1]['hour']}</td>
                        <td>{this.props.allAvailableTasks[1]['description']}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>






 */