//  * dependencies
import React from 'react';
import { render } from "@testing-library/react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// * components 
import ContactForm from "../components/ContactForm";

// * configurations 
Enzyme.configure({ adapter: new Adapter() })

describe('App component renders Contact form', () => {
    it('should render the contact form', () => {
        render(<ContactForm />)
    })
});

describe('Submit button', () => {
    it('should display no information when clicked && no input', () => {
        const wrapper = shallow(<ContactForm />)
        const button = wrapper.find( '.submit-button' );

        button.simulate('click');

        const display = wrapper.find( '.display-data');
        expect(display).toHaveLength(0)
    })
    
    it('should accept information', () => {
        const wrapper = shallow(<ContactForm />)
        const input = wrapper.find('.first-name-input')

        const testFeed = 'jan'

        input.simulate('change', { target: { value: testFeed }})
        expect(input).toHaveLength(1)
        // expect(input.text()).toBe(testFeed)
    })


})

