import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import YoutubeForm from '../subcomponents/newContentPost/YoutubeForm'
import InstagramForm from '../subcomponents/newContentPost/InstagramForm'
import TwitterForm from '../subcomponents/newContentPost/TwitterForm'
import SnapchatForm from '../subcomponents/newContentPost/SnapchatForm'
//===============================================================================================//

export function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

export function openCategoryIndicator(categoryListOpen) {
    if (categoryListOpen) {
        return '(-)';
    }
    return '(+)';
}

export function youtubeForm(showYoutubeForm) {
    if (!showYoutubeForm) {
        return;
    }
    return <YoutubeForm />
}

export function instagramForm(showInstagramForm) {
    if (!showInstagramForm) {
        return;
    }
    return <InstagramForm />
}

export function twitterForm(showTwitterForm) {
    if (!showTwitterForm) {
        return;
    }
    return <TwitterForm />
}

export function snapchatForm(showSnapchatForm) {
    if (!showSnapchatForm) {
        return;
    }
    return <SnapchatForm />
}