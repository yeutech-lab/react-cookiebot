/**
 * Testing react-cookiebot
 */
import { shallow } from 'enzyme';
import React from 'react';
import CookieBot from '../CookieBot.native';
import CookieBotWeb from '../CookieBot';

const renderComponentNative = ({ domainGroupId, ...rest } = {}) => shallow(
  <CookieBot domainGroupId={domainGroupId} {...rest} />
);

const renderComponentWeb = ({ domainGroupId, ...rest } = {}) => shallow(
  <CookieBotWeb domainGroupId={domainGroupId} {...rest} />
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
    domainGroupId: '7d6b1a1e-8030-4f45-877e-21bb51e9233b',
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
    expect(cookieDeclaration.prop('src')).toBe(`https://consent.cookiebot.com/${props.domainGroupId}/cd.js`);
    expect(console.warn).not.toHaveBeenCalled();
    expect(document.querySelector('html > head > #CookieBot').dataset.cbid).toBe(props.domainGroupId);
  });
  it('should render a null <CookieBotWeb /> on web when no domainGroupId is passed', () => {
    const renderedComponent = renderComponentWeb();
    const cookieDeclaration = renderedComponent.find('#CookieDeclaration');
    expect(renderedComponent.length).toBe(1);
    expect(cookieDeclaration.length).toBe(0);
  });
  it('should produce a warning', () => {
    console.warn = jest.fn();
    const domainGroupId = '7d6b1a1e-8077e-21bb51e9233b';
    const renderedComponent = renderComponentWeb({
      domainGroupId,
    });
    expect(renderedComponent.length).toBe(1);
    expect(console.warn).toHaveBeenCalledWith(`The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`);
  });
  // it('should return null when document is not defined', () => {
  //   const oldDocument = global.document;
  //   global.document = {};
  //   const domainGroupId = '7d6b1a1e-8077e-21bb51e9233b';
  //   const renderedComponent = renderComponentWeb({
  //     domainGroupId,
  //   });
  //   const cookieDeclaration = renderedComponent.find('#CookieDeclaration');
  //   expect(renderedComponent.length).toBe(1);
  //   expect(cookieDeclaration.length).toBe(0);
  //   global.document = oldDocument;
  // });
});
