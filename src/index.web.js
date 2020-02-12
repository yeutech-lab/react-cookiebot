import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enable cookie bot on the website
 * @param {string} cookieBotDomainGroupId - Cookie bot domain group id
 * @returns {*|null}
 * @constructor
 */
function CookieBot({
  cookieBotDomainGroupId,
}) {
  if (!cookieBotDomainGroupId) {
    return null;
  }
  if (cookieBotDomainGroupId.length !== 36) {
    console.warn(`The cookie bot domain group id is ${cookieBotDomainGroupId.length} characters, instead it should be 36 characters!`); // eslint-disable-line no-console
  }
  const script = document.createElement('script');
  script.setAttribute('id', 'CookieBot');
  script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
  script.setAttribute('data-cbid', cookieBotDomainGroupId);
  script.setAttribute('data-blockingmog', 'auto');
  script.setAttribute('type', 'text/javascript');
  const head = document.querySelector('html > head');
  head.insertBefore(script, head.firstChild);
  return (
    <script
      id="CookieDeclaration"
      src={`https://consent.cookiebot.com/${cookieBotDomainGroupId}/cd.js`}
      type="text/javascript"
      async
    />
  );
}

CookieBot.propTypes = {
  /** Cookie bot domain group id */
  cookieBotDomainGroupId: PropTypes.string.isRequired,
};

export default CookieBot;
