import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

//===============================================================================================//

const images = [];

class ImageLightbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
        this.showImages = this.showImages.bind(this);
    }


    showImages() {
        if (this.props.contentPost) {

            this.props.contentPost.map((image) => {
                return images.push(image[0]);
            });

            return (
                <div>
                    {this.props.contentPost.map((image) => {
                        return (
                            <img src={image[0]} alt="postImage"
                                 onClick={() => this.setState({isOpen: true})}
                                 key={this.props.privateMessage.postID + '-' + image[1]}
                            />
                        )
                    })}
                </div>
            )
        }
    }



    render() {
        return (
            <div>

                {this.showImages()}

                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={images[this.state.photoIndex]}
                        nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                        prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (this.state.photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}

export default ImageLightbox;

