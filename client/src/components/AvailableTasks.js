import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import { allTasksGET } from '../actions/index';

//NOTE 11/25/17: THIS COMPONENT WILL NO LONGER BE USED. JUST HERE FOR REFERENCE

// expand description upon clicking
// show a loading page first
// carousel show providers with circle avatar. assign default image
//===============================================================================================//




class AvailableTasks extends Component {
    constructor() {
        super();
        this.propagateContentPosts = this.propagateContentPosts.bind(this);
    }

    componentWillMount() {
        // show loading screen/image

        setTimeout(() => this.setState({ loading: false }), 1500); // simulates loading of data

        //run action to query database and return all tasks
        //return this.props.dispatch(allTasksGET());
    }

    //    componentWillReceiveProps() {

    componentDidMount() {
        // hide loading screen/image and show results


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
            this.propagateContentPosts();
            }, 2000);
    }


    //kept inside because of bound constructor, need props
    propagateContentPosts() {
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
                <h1>Featured professionals:</h1>
                <ul>
                    <li><Link to='producerProfile'>Robert Smith: Plumber</Link></li>
                    <li><Link to='producerProfile'>Marge Simpson: Cook</Link></li>
                    <li><Link to='producerProfile'>Mohammad Ibe: Electrician</Link></li>
                </ul>
                <hr />
                <h1>Available tasks:</h1>
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
                        <td><Link to='/viewTask'>I need help cleaning my kitchen</Link></td>
                        <td>$50</td>
                        <td>Cleaning</td>
                        <td>Tomorrow</td>
                        <td>5:00pm PST</td>
                        <td>My kitchen is disgusting and I need someone to clean it for me asap. I am against doing dishes</td>
                    </tr>
                    <tr>
                        <td>Outlet broken in master room</td>
                        <td>$75</td>
                        <td>Electrical</td>
                        <td>Tuesday</td>
                        <td>2:00pm PST</td>
                        <td>One of my outlets stopped working in the master bedroom after my science experiment!!</td>
                    </tr>
                    </tbody>
                </Table>
                <hr />
                <h1>Claimed tasks:</h1>
                {this.propagateContentPosts()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}

export default connect(mapStateToProps)(AvailableTasks);