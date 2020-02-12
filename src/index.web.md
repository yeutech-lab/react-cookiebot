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
