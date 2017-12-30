import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import YoutubeForm from '../new_content_post/YoutubeForm'
import InstagramForm from '../new_content_post/InstagramForm'
import TwitterForm from '../new_content_post/TwitterForm'
import SnapchatForm from '../new_content_post/SnapchatForm'
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