import React from 'react';
import { shallow } from 'enzyme';
import SignInUpPage from './sign-in-up.component';

it('should render SignInUpPage component', () => {
    expect(shallow(<SignInUpPage />)).toMatchSnapshot();
});