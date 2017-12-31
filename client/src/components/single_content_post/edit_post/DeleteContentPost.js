import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { deleteContentPost} from '../../../actions';
//===============================================================================================//

class DeleteContentPost extends Component {
    constructor() {
        super();
        this.state = {
            deletePost: false,
            redirectToContentCreatorsList: false
        };
        this.onDeletePost = this.onDeletePost.bind(this);
    }

    onDeletePost () {
        (async () => {
            try {
                return this.props.dispatch(deleteContentPost(this.props.contentPost['content_post_id']))
                    .then((res) => {
                        console.log(res);
                        if (res === 'error') {
                            return alert('Unable to retrieve information from the database. Please try again or notify us if the issue persists.');
                        }
                        alert('Your post has been deleted.');
                        return this.setState({redirectToContentCreatorsList: true})
                    })
            } catch (err) {
                console.log(err);
                return alert('Error: Something went wrong. Please try again or notify us if the issue persists. ' + err);
            }
        })();
    }

    render () {
        if (this.state.redirectToContentCreatorsList) {
            return <Redirect push to="/contentCreatorsList"/>
        }

        return (
            <div>
                <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">
                            <h4>
                                Are you sure you want to delete your post?
                                <br />
                                (This cannot be undone)
                            </h4>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Button onClick={this.props.onHide}>Nope. Go back.</Button>
                            <Button onClick={this.onDeletePost} className="pull-right">Yep. Blast it.</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DeleteContentPost);

function mapStateToProps(state) {
    return {
        contentPost: state.contentPosts.contentPostDetails[0],
    };
}