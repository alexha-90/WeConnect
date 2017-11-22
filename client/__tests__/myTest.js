import React from 'react';
import { shallow, mount } from 'enzyme';
//import NewTask from '../src/components/NewTask';
import { submitNewTask } from "../src/components/stateFunctions";


const sampleNewTaskData = {
    taskSummary: 'sample summary',
    taskValue: 50,
    taskCategory: 'electrical',
    taskNeededDate: 'today',
    taskNeededHour: '12:00am',
    taskDescription: 'sample description'
};

const completedForm = submitNewTask(sampleNewTaskData);

describe('submitNewTask', () => {
    it('retrieves newly created task data specified by user', () => {
        expect(completedForm).toEqual(sampleNewTaskData);
    });
});





/*
helpful links, maybe
http://www.cloudypoint.com/Tutorials/discussion/javascript-solved-test-suite-failed-to-run-invariant-violation-_registercomponent-target-container-is-not-a-dom-element/
https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest

 */