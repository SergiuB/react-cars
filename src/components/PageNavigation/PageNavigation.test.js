import React from 'react';
import { shallow } from 'enzyme';

import PageNavigation from './PageNavigation';

describe('PageNavigation', function () {
  it('renders correctly with default props', function () {
    const wrapper = shallow(
      <PageNavigation />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with buttons disabled', function () {
    const wrapper = shallow(
      <PageNavigation nextEnabled={false} prevEnabled={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('fires onNext when next btn is clicked', function () {
    const onNext = jest.fn();
    const wrapper = shallow(
      <PageNavigation onNext={onNext} />
    );
    wrapper.find('[name="next"]').simulate('click');
    expect(onNext).toHaveBeenCalled();
  });

  it('fires onPrev when prev btn is clicked', function () {
    const onPrev = jest.fn();
    const wrapper = shallow(
      <PageNavigation onPrev={onPrev} />
    );
    wrapper.find('[name="prev"]').simulate('click');
    expect(onPrev).toHaveBeenCalled();
  });
});
