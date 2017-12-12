import React, { Component } from 'react';
import { Button, Checkbox, Collapse } from 'react-bootstrap';
//===============================================================================================//


class ContentPostFilterBar extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            mediumFilterOpen: false,
            CategoryFilterOpen: false,
        };
        this.openIndicatorMedium = this.openIndicatorMedium.bind(this);
        this.openIndicatorCategory = this.openIndicatorCategory.bind(this);
    }


    openIndicatorMedium() {
        if (this.state.mediumFilterOpen) {
            return '(-)'
        }
        if (!this.state.mediumFilterOpen) {
            return '(+)'
        }
    }

    openIndicatorCategory() {
        if (this.state.CategoryFilterOpen) {
            return '(-)'
        }
        if (!this.state.CategoryFilterOpen) {
            return '(+)'
        }
    }


    render () {
        return (
            <div className="searchBar">

                <form>
                    <h3>Filter</h3>

                    <div className="filterCategory">
                        <span onClick={() => this.setState({ mediumFilterOpen: !this.state.mediumFilterOpen })}>
                            {this.openIndicatorMedium()} Medium
                        </span>
                        <Collapse in={this.state.mediumFilterOpen}>
                            <div>
                                    <div className="filterResult">
                                        <Checkbox>
                                            YouTube
                                        </Checkbox>
                                        <Checkbox>
                                            Instagram
                                        </Checkbox>
                                        <Checkbox>
                                            Snapchat
                                        </Checkbox>
                                        <Checkbox>
                                            Twitter
                                        </Checkbox>
                                    </div>
                            </div>
                        </Collapse>

                        <br />

                        <span onClick={() => this.setState({ CategoryFilterOpen: !this.state.CategoryFilterOpen })}>
                            {this.openIndicatorCategory()} Target Audience
                        </span>
                        <Collapse in={this.state.CategoryFilterOpen}>
                            <div>
                                <div className="filterResult">
                                    <Checkbox>
                                        Cosmetics
                                    </Checkbox>
                                    <Checkbox>
                                        Automotive
                                    </Checkbox>
                                    <Checkbox>
                                        Gaming
                                    </Checkbox>
                                    <Checkbox>
                                        Sports
                                    </Checkbox>
                                </div>
                            </div>
                        </Collapse>

                    </div>

                    <Button type="submit">
                        Filter results
                    </Button>
                </form>

                <img id="adPlaceholder" alt="adPlaceholder" src="https://i.imgur.com/rdJwvir.png" />


            </div>
        )
    }
}

export default ContentPostFilterBar;