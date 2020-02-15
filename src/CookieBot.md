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
