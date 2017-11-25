import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { allTasksGET } from '../actions/index';

// https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
// future expansion: referrals and reviews

class ContentCreatorsList extends Component {
    constructor() {
        super();
        this.state = {
            loadingComponent: true
        };
        this.propagateTasks = this.propagateTasks.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(allTasksGET());
        setTimeout(() => {
            //run action to query database and return all tasks
            return this.setState({ loadingComponent: false });
        }, 1500);
    }

    componentDidMount() {
        // hide loading screen/image and show results

        setTimeout(() => {
            for (let i = 0; i < this.props.allAvailableTasks.length; i++) {
                console.log(this.props.allAvailableTasks[i]['summary'])
            }

            return this.propagateTasks();

            /*
            return (
                <div className='contentCreatorSection'>
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.allAvailableTasks[0]['summary']}</li>
                            <li>{this.props.allAvailableTasks[0]['category']}</li>
                            <li>{this.props.allAvailableTasks[0]['description']}</li>
                            <li>{this.props.allAvailableTasks[0]['date']}</li>
                        </ul>

                    </div>
                    <div className='contentCreatorContainer'>
                        <li>{this.props.allAvailableTasks[1]['summary']}</li>
                        <li>{this.props.allAvailableTasks[1]['category']}</li>
                        <li>{this.props.allAvailableTasks[1]['description']}</li>
                        <li>{this.props.allAvailableTasks[1]['date']}</li>
                    </div>
                </div>
            )
            */
        }, 1500);
    }

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
        if (this.state.loadingComponent) {
            return <div className='loader'>Loading...</div>;
        }

        return (
            <div>
                Have an impressive profile you would like to share?
                <Button bsStyle="success">
                    <Link to="newTask">
                        Create new listing
                    </Link>
                </Button>
                <br />
                <Button bsStyle="warning">
                    <Link to="/producerProfile">
                        Click to see a sample profile
                    </Link>
                </Button>

                <div className='contentCreatorSection'>
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.allAvailableTasks[0]['summary']}</li>
                            <li>{this.props.allAvailableTasks[0]['category']}</li>
                            <li>{this.props.allAvailableTasks[0]['description']}</li>
                            <li>{this.props.allAvailableTasks[0]['date']}</li>
                        </ul>
                    </div>
                    <div className='contentCreatorContainer'>
                        <li>{this.props.allAvailableTasks[1]['summary']}</li>
                        <li>{this.props.allAvailableTasks[1]['category']}</li>
                        <li>{this.props.allAvailableTasks[1]['description']}</li>
                        <li>{this.props.allAvailableTasks[1]['date']}</li>
                    </div>
                    <div className='contentCreatorContainer'>
                        <li>{this.props.allAvailableTasks[2]['summary']}</li>
                        <li>{this.props.allAvailableTasks[2]['category']}</li>
                        <li>{this.props.allAvailableTasks[2]['description']}</li>
                        <li>{this.props.allAvailableTasks[2]['date']}</li>
                    </div>
                    <div className='contentCreatorContainer'>
                        <li>{this.props.allAvailableTasks[3]['summary']}</li>
                        <li>{this.props.allAvailableTasks[3]['category']}</li>
                        <li>{this.props.allAvailableTasks[3]['description']}</li>
                        <li>{this.props.allAvailableTasks[3]['date']}</li>
                    </div>

                </div>

                <h1>test:</h1>
                {this.propagateTasks()}
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

export default connect(mapStateToProps)(ContentCreatorsList);




/*
            console.log(this.props.allAvailableTasks[0]);
            console.log(this.props.allAvailableTasks[0]['category']);
            console.log(this.props.allAvailableTasks[0]['summary']);
            console.log(this.props.allAvailableTasks[0]['value']);
            console.log(this.props.allAvailableTasks[0]['description']);
            console.log(this.props.allAvailableTasks[0]['hour']);
            console.log(this.props.allAvailableTasks[0]['date']);
 */