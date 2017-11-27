import React from 'react';
import { shallow, mount } from 'enzyme';
import { testNewTaskValidity } from "../src/components/stateFunctions";


const sampleNewTaskData = {
    contentMedium: 'YouTube',
    contentSummary: 'I make videos about cooking',
    contentDescription: 'I teach people how to cook tasty meals using very basic, everyday ingredients',
    contentIdealMatch: 'I discuss a single product at the very end of my video',
    yt_UploadFrequency: 'today',
    yt_VideoLength: 'Between 2 and 5 minutes',
    yt_SubCount: 'Between 20,000 and 30,00',
    yt_ViewCount: 'Between 90,000 and 100,00',
};

const completedForm = testNewTaskValidity(sampleNewTaskData);

describe('submitNewTask', () => {
    it('retrieves newly created task data specified by user', () => {
        expect(completedForm).toEqual(sampleNewTaskData);
    });

    it('should have six properties for newTask object', () => {
        expect(Object.keys(sampleNewTaskData).length).toBe(8);
    });
});




/*
helpful links, maybe
http://www.cloudypoint.com/Tutorials/discussion/javascript-solved-test-suite-failed-to-run-invariant-violation-_registercomponent-target-container-is-not-a-dom-element/
https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest

 */