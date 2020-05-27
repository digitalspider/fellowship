import React from 'react';
import { shallow } from 'enzyme';
import BibleVerse from '../../../components/utils/BibleVerse';

it('renders link with reference and text', () => {
  const wrapper = shallow(<BibleVerse reference="MAT.1.1" text="Matthew 1:1"/>);
  expect(wrapper).toHaveText('Matthew 1:1');
  expect(wrapper).toHaveProp('href','https://www.bible.com/en-GB/bible/59/MAT.1.1.ESV')
});