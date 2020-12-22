# react-cookiebot

[![Build Status](https://travis-ci.org/yeutech-lab/react-cookiebot.svg?branch=master)](https://travis-ci.org/yeutech-lab/react-cookiebot)
[![npm Version](https://img.shields.io/npm/v/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![License](https://img.shields.io/npm/l/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![NPM monthly downloads](https://img.shields.io/npm/dm/react-cookiebot.svg?style=flat)](https://npmjs.org/package/react-cookiebot)
[![NPM total downloads](https://img.shields.io/npm/dt/react-cookiebot.svg?style=flat)](https://npmjs.org/package/react-cookiebot)
[![npm Version](https://img.shields.io/node/v/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![Module formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=com.github.yeutech-lab.react-cookiebot&metric=coverage)](https://sonarcloud.io/dashboard?id=com.github.yeutech-lab.react-cookiebot) [![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=com.github.yeutech-lab.react-cookiebot&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.github.yeutech-lab.react-cookiebot)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fyeutech-lab%2Freact-cookiebot.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fyeutech-lab%2Freact-cookiebot?ref=badge_shield)

A simple react cookie bot component that configure Cookiebot in your [`react`](https://reactjs.org/) or [`react-native-web`](https://github.com/necolas/react-native-web/) application.

> That will definitely work. It's also a good way to dynamically add/modify attributes.
> It's important that the script is the first to load though, to make sure nothing else loads first and can cause issues.
> Richard, Cookiebot Support

## Table of Contents

  - [What is cookie bot ?](#what-is-cookie-bot)
  - [Demo](#demo)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Create a cookie bot account](#create-a-cookie-bot-account)
  - [Configuration](#configuration)
     - [Consent banner/dialog language](#consent-banner-dialog-language)
  - [Contributing](#contributing)
  - [License MIT](#license-mit)

---


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fyeutech-lab%2Freact-cookiebot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fyeutech-lab%2Freact-cookiebot?ref=badge_large)

## What is cookie bot ?

COOKIEBOT HELPS MAKE YOUR USE OF COOKIES AND ONLINE TRACKING COMPLIANT.

The General Data Protection Regulation (GDPR) applies to all websites with users from the EU. Check if your website’s use of cookies and online tracking is compliant with GDPR and the ePrivacy Directive (ePR). 

See what data your website collects and shares with 3rd parties – also useful for CCPA compliance (California Consumer Privacy Act).

Visit Cookiebot [website](https://www.cookiebot.com)

## Demo

View the [Demo](https://yeutech-lab.github.io/react-cookiebot/#cookiebot)

## Usage

Just import `<CookieBot domainGroupId={domainGroupId} />`, this example show how to use it and how to test if it is correctly injected in the page:

```js
 
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
const domainGroupId = 'ecff8d69-d1cb-416f-a86f-ba55b3f38707';

function App() {
  const [hasCookieBot, setHasCookieBot] = useState(undefined);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <CookieBot domainGroupId={domainGroupId} />
      <Text>Click to test Cookiebot</Text>
      <Button title="TEST" onPress={() => setHasCookieBot(!!document.querySelector('#CookieBot'))} />
      <Text style={{ color: 'red', marginVertical: 10 }}>
        {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}
      </Text>
    </View>
  );
}

<App />
```

> React CookieBot work with react-native-web, configure your resolve extensions to resolve `.web.js` and `.js`.


## Documentation

Read [react-cookiebot documentation](https://yeutech-lab.github.io/react-cookiebot).


## Create a cookie bot account

You need to [create an account on cookiebot](https://manage.cookiebot.com/en/signup) and get a `domainGroupId` for your web site:

![image](https://user-images.githubusercontent.com/1866564/74326665-5fd25900-4dbd-11ea-9696-a2abba52303e.png)

Create the account

![image](https://user-images.githubusercontent.com/1866564/74326086-61e7e800-4dbc-11ea-9be3-76a202eba653.png)

Create the domain cookie bot will handle

![image](https://user-images.githubusercontent.com/1866564/74326127-74fab800-4dbc-11ea-90ef-70999a53871b.png)

Configure the cookie bot layout

![image](https://user-images.githubusercontent.com/1866564/74326185-8cd23c00-4dbc-11ea-9078-1261350298b3.png)

Configure the cookie bot language

![image](https://user-images.githubusercontent.com/1866564/74326219-99569480-4dbc-11ea-9d32-43a226f15e3f.png)

Get your domain group id

**Don't forget to save**

![image](https://user-images.githubusercontent.com/1866564/74326590-403b3080-4dbd-11ea-962d-4db803a80c69.png)

You will have this cookie consent displayed on your website:

![image](https://user-images.githubusercontent.com/1866564/74326715-77114680-4dbd-11ea-8f4e-2ae2a4cd894e.png)

## Configuration

Configure webpack to load extensions `['.web.js', '.js']`:

```diff
{
  "resolve": {
    "extensions": [".web.js", ".js"]
  }
}
```

### Consent banner/dialog language

If you want to force the language of consent (for i18n):

```js
  <CookieBot domainGroupId={domainGroupId} language="ES" />
```

If consent with that language is no defined, the default language are loaded (or auto-detect).

### Use it once

You must render this component at the root of your application, otherwise make sure your parent component does not re-rerender.

The following will appear in your console if you break `react-cookiebot`: `WARNING: Cookiebot script is included twice - please remove one instance to avoid unexpected results.`

## Contributing

If you want to contribute to react-cookiebot please see our [contributing and community guidelines](https://github.com/yeutech-lab/react-cookiebot/blob/master/.github/CONTRIBUTING.md), they\'ll help you get set up locally and explain the whole process.

Please also note that all repositories under the yeutech-lab organization follow our [Code of Conduct](https://github.com/yeutech-lab/react-cookiebot/blob/master/CODE_OF_CONDUCT.md), make sure to review and follow it.

## License MIT

Copyright 2020 Yeutech Company Limited

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.