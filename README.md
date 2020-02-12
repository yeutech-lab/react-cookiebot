# react-cookiebot

[![Build Status](https://travis-ci.org/yeutech-lab/react-cookiebot.svg?branch=master)](https://travis-ci.org/yeutech-lab/react-cookiebot)
[![npm Version](https://img.shields.io/npm/v/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![License](https://img.shields.io/npm/l/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![NPM monthly downloads](https://img.shields.io/npm/dm/react-cookiebot.svg?style=flat)](https://npmjs.org/package/react-cookiebot)
[![NPM total downloads](https://img.shields.io/npm/dt/react-cookiebot.svg?style=flat)](https://npmjs.org/package/react-cookiebot)
[![npm Version](https://img.shields.io/node/v/react-cookiebot.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![Module formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat)](https://www.npmjs.com/package/react-cookiebot)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=com.github.yeutech-lab.react-cookiebot&metric=coverage)](https://sonarcloud.io/dashboard?id=com.github.yeutech-lab.react-cookiebot) [![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=com.github.yeutech-lab.react-cookiebot&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.github.yeutech-lab.react-cookiebot)


Cookiebot component for react and react native application


## Table of Contents

  - [What is cookie bot ?](#what-is-cookie-bot)
  - [Create a cookie bot account](#create-a-cookie-bot-account)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Contributing](#contributing)
  - [License MIT](#license-mit)

---

## What is cookie bot ?

COOKIEBOT HELPS MAKE YOUR USE OF COOKIES AND ONLINE TRACKING COMPLIANT.

Is my website compliant?
The General Data Protection Regulation (GDPR) applies to all websites with users from the EU. Check if your website’s use of cookies and online tracking is compliant with GDPR and the ePrivacy Directive (ePR). 

See what data your website collects and shares with 3rd parties – also useful for CCPA compliance (California Consumer Privacy Act).

Visit their [website](https://www.cookiebot.com)

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

## Usage

This is how it should be used:

```js
import { View, Text } from 'react-native';
const domainGroupId = '7d6b1a1e-8030-4f45-877e-21bb51e9233b';

function App() {
  return (
    <View>
      <CookieBot domainGroupId={domainGroupId} />
      <Text>
        Has CookieBot: {JSON.stringify(!!document.querySelector('#CookieBot'))}
      </Text>
      <Text>
        Has CookieDeclaration: {JSON.stringify(!!document.querySelector('#CookieDeclaration'))}
      </Text>
      <Text>Cookie bot is injected in the page if CookieBot and CookieDeclaration are both true!</Text>
    </View>
  );
}

<App />
```

> React CookieBot work with react-native-web. With react-native it will render `null`

## Documentation

Read [react-cookiebot documentation](https://yeutech-lab.github.io/react-cookiebot).

## Contributing

If you want to contribute to react-cookiebot please see our [contributing and community guidelines](https://github.com/yeutech-lab/react-cookiebot/blob/master/.github/CONTRIBUTING.md), they\'ll help you get set up locally and explain the whole process.

Please also note that all repositories under the yeutech-lab organization follow our [Code of Conduct](https://github.com/yeutech-lab/react-cookiebot/blob/master/CODE_OF_CONDUCT.md), make sure to review and follow it.

## License MIT

Copyright 2020 Yeutech Company Limited

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

