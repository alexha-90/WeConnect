import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

//===============================================================================================//




const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];


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
            return (
                <img src={this.props.contentPost[0][0]} alt="temp"
                     onClick={() => this.setState({ isOpen: true })}
                />
            )
        }
    }



    render() {
        console.log(this.props);
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

