/**
 * Testing react-cookiebot
 */
import { shallow } from 'enzyme';
import React from 'react';
import CookieBot from '../index';
import CookieBotWeb from '../index.web';

const renderComponentNative = ({ cookieBotDomainGroupId, ...rest } = {}) => shallow(
  <CookieBot cookieBotDomainGroupId={cookieBotDomainGroupId} {...rest} />
);

const renderComponentWeb = ({ cookieBotDomainGroupId, ...rest } = {}) => shallow(
  <CookieBotWeb cookieBotDomainGroupId={cookieBotDomainGroupId} {...rest} />
);

/* eslint-disable no-console */
describe('<CookieBot />', () => {
  let saved;
  beforeEach(() => {
    saved = console.warn;
    console.warn = jest.fn();
  });
  afterEach(() => {
    console.warn = saved;
  });

  const props = {
    cookieBotDomainGroupId: '7d6b1a1e-8030-4f45-877e-21bb51e9233b',
  };
  it('should render a null <CookieBot /> on native', () => {
    const renderedComponent = renderComponentNative(props);
    const cookieDeclaration = renderedComponent.find('#CookieDeclaration');
    expect(renderedComponent.length).toBe(1);
    expect(cookieDeclaration.length).toBe(0);
  });
  it('should render <CookieBotWeb /> on the web and inject #CookieBot script in the head', () => {
    const renderedComponent = renderComponentWeb(props);
    const cookieDeclaration = renderedComponent.find('#CookieDeclaration');
    expect(renderedComponent.length).toBe(1);
    expect(cookieDeclaration.length).toBe(1);
    expect(cookieDeclaration.prop('src')).toBe(`https://consent.cookiebot.com/${props.cookieBotDomainGroupId}/cd.js`);
    expect(console.warn).not.toHaveBeenCalled();
    expect(document.querySelector('html > head > #CookieBot').dataset.cbid).toBe(props.cookieBotDomainGroupId);
  });
  it('should render a null <CookieBotWeb /> on web when no cookieBotDomainGroupId is passed', () => {
    const renderedComponent = renderComponentWeb();
    const cookieDeclaration = renderedComponent.find('#CookieDeclaration');
    expect(renderedComponent.length).toBe(1);
    expect(cookieDeclaration.length).toBe(0);
  });
  it('should produce a warning', () => {
    console.warn = jest.fn();
    const cookieBotDomainGroupId = '7d6b1a1e-8077e-21bb51e9233b';
    const renderedComponent = renderComponentWeb({
      cookieBotDomainGroupId,
    });
    expect(renderedComponent.length).toBe(1);
    expect(console.warn).toHaveBeenCalledWith(`The cookie bot domain group id is ${cookieBotDomainGroupId.length} characters, instead it should be 36 characters!`);
  });
});
