This is how it should be used:

```js
import { View, Text } from 'react-native';
const domainGroupId = 'ecff8d69-d1cb-416f-a86f-ba55b3f38707';

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
