import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './collection-overview.component';

it('should render CollectionOverview component', () => {
    expect(shallow(<CollectionOverview collections={[]} />)).toMatchSnapshot;
});