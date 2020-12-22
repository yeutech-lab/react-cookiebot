import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enable cookie bot on the website
 * @param {string} domainGroupId - Cookie bot domain group id
 * @returns {*|null}
 * @constructor
 */
function CookieBot({
  domainGroupId,
  language,
}) {
  if (!domainGroupId || !document) {
    return null;
  }
  if (domainGroupId.length !== 36) {
    console.warn(`The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`); // eslint-disable-line no-console
  }
  const script = document.createElement('script');
  script.setAttribute('id', 'CookieBot');
  script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
  script.setAttribute('data-cbid', domainGroupId);
  script.setAttribute('data-blockingmode', 'auto');
  script.setAttribute('type', 'text/javascript');
  if (language) script.setAttribute('data-culture', language);
  const head = document.querySelector('html > head');
  head.insertBefore(script, head.firstChild);
  return (
    <script
      id="CookieDeclaration"
      src={`https://consent.cookiebot.com/${domainGroupId}/cd.js`}
      type="text/javascript"
      data-culture={language}
      async
    />
  );
}

CookieBot.defaultProps = {
  language: null,
};

CookieBot.propTypes = {
  /** Cookie bot domain group id */
  domainGroupId: PropTypes.string.isRequired,
  /** Cookie bot language */
  language: PropTypes.string,
};

export default CookieBot;
