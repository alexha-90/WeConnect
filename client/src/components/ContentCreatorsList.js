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
        }, 1000);
    }

    componentDidMount() {

        setTimeout(() => {
            //more to come
            return this.propagateTasks();
        }, 500);
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
                    <Link to="newContentPost">
                        Create new listing
                    </Link>
                </Button>
                <br />
                <div className='contentCreatorSection'>
                    {/*
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.newContentPost[0]['summary']}</li>
                            <li>{this.props.newContentPost[0]['category']}</li>
                            <li>{this.props.newContentPost[0]['description']}</li>
                            <li>{this.props.newContentPost[0]['date']}</li>
                        </ul>
                        <Button bsStyle="success">
                            <Link to="/producerProfile">
                                See more
                            </Link>
                        </Button>
                    </div>
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.newContentPost[1]['summary']}</li>
                            <li>{this.props.newContentPost[1]['category']}</li>
                            <li>{this.props.newContentPost[1]['description']}</li>
                            <li>{this.props.newContentPost[1]['date']}</li>
                        </ul>
                        <Button bsStyle="success">
                            <Link to="/producerProfile">
                                See more
                            </Link>
                        </Button>
                    </div>
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.newContentPost[2]['summary']}</li>
                            <li>{this.props.newContentPost[2]['category']}</li>
                            <li>{this.props.newContentPost[2]['description']}</li>
                            <li>{this.props.newContentPost[2]['date']}</li>
                        </ul>
                        <Button bsStyle="success">
                            <Link to="/producerProfile">
                                See more
                            </Link>
                        </Button>
                    </div>
                    <div className='contentCreatorContainer'>
                        <ul>
                            <li>{this.props.newContentPost[3]['summary']}</li>
                            <li>{this.props.newContentPost[3]['category']}</li>
                            <li>{this.props.newContentPost[3]['description']}</li>
                            <li>{this.props.newContentPost[3]['date']}</li>
                        </ul>
                        <Button bsStyle="success">
                            <Link to="/producerProfile">
                                See more
                            </Link>
                        </Button>
                    </div>
                    */}

                </div>

                <h1>test:</h1>
                <div className='contentCreatorSection'>
                    {this.propagateTasks()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        newContentPost: state.newContentPost.newContentPost
    };
}

export default connect(mapStateToProps)(ContentCreatorsList);




/*

            let first = [];
            let second = [];
            let third = [];

            //first.push(this.props.allAvailableTasks[1]['summary'], this.props.allAvailableTasks[1]['category'], this.props.allAvailableTasks[1]['description'], this.props.allAvailableTasks[1]['date']);
            //console.log(first);

            // iterate through entire object
            // return summary, category, description, date for each nested object
            // for (let i = 0; i < this.props.allAvailableTasks.length; i++) {
            //     console.log(this.props.allAvailableTasks[i]['summary']);
            //     console.log(this.props.allAvailableTasks[i]['category']);
            //     console.log(this.props.allAvailableTasks[i]['description']);
            //     console.log(this.props.allAvailableTasks[i]['date']);
            //     console.log('********');
            // }

            /*
            for (let key in this.props.allAvailableTasks) {
                if (Object.prototype.hasOwnProperty.call(this.props.allAvailableTasks, key)) {
                    let first = this.props.allAvailableTasks[key];
                    console.log(first);

                    console.log('$$$$$$$');
                }
            }

        for (let i = 0; i < this.props.allAvailableTasks.length; i++) {
        first.push(this.props.allAvailableTasks[1]['summary'], this.props.allAvailableTasks[1]['category'], this.props.allAvailableTasks[1]['description'], this.props.allAvailableTasks[1]['date']);
        }


        for (let key in this.props.allAvailableTasks) {
            if (this.props.allAvailableTasks.hasOwnProperty(key)) {
                console.log(this.props.allAvailableTasks[key]);
                console.log('$$$$$$$');
            }
        }


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

        return (
            <div className='contentCreatorContainer'>
                <ul>
                    <li>{this.props.allAvailableTasks[3]['summary']}</li>
                    <li>{this.props.allAvailableTasks[3]['category']}</li>
                    <li>{this.props.allAvailableTasks[3]['description']}</li>
                    <li>{this.props.allAvailableTasks[3]['date']}</li>
                </ul>
            </div>

        )



            console.log(this.props.allAvailableTasks[0]);
            console.log(this.props.allAvailableTasks[0]['category']);
            console.log(this.props.allAvailableTasks[0]['summary']);
            console.log(this.props.allAvailableTasks[0]['value']);
            console.log(this.props.allAvailableTasks[0]['description']);
            console.log(this.props.allAvailableTasks[0]['hour']);
            console.log(this.props.allAvailableTasks[0]['date']);
 */