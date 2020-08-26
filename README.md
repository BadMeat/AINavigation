## 1. Stack Navigation

Jadi ini dalam 1 screen (form) bisa manggil screen lainnya seperti lookup tetapi fullscreen jadi numpuk gitu
>**Install**
>
```js
npm install @react-navigation/stack
```

>**Rapih Code**
```
Pindahkan App.js ke folder src(buat baru) biar lebih rapih. Jangan lupa update path import App.js di file index.js
karena file App.js dipindahkan ke folder src jadi import yg tadinya
import App from './App'; 
menjadi
import App from './src/App';
```

>**Buat file Router.js**
>
```
Buat file Router.js di folder src. Ini untuk menampung list semua screen, jadi semua screen di daftarkan disini
```
**Router.js**
```js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screen/HomeScreen';
import ViewScreen from './Screen/ViewScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="View" component={ViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
```
```
Semua Screen dibungkus oleh <Stack.Navigator> dan dibungkus lagi dengan <NavigationContainer>
Screen ditaro di <Stack.Screen> name itu unik jadi tidak boleh sama, dan component adalah nama file Screennya
dan jangan lupa import React from 'react'
```

>**Buat Screen Baru**
>
```js
Buat folder baru di dalam src dengan nama Screen atau Component atau yang relate jadi src/screen
kemudian didalam folder screen buat HomeScreen.js dan ViewScreen.js
```

***HomeScreen.js***
```js
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
```

***ViewScreen.js***
```js
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ViewScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
```

>**Pindah Screen**
>
```
Buat Button di HomeScreen untuk pindah ke ViewScreen, tanda + adalah code tambahan dari code yang sebelumnya, 
hilangkan tanda + dicodenya itu hanya untuk tanda saja
```
**HomeScreen**
```js
import React, { Component } from 'react'
+ import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {

+    pindahScreen = () => {
+        this.props.navigation.navigate('View')
+    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
+                <Button title="Pindah ke View" onPress={() => this.pindahScreen()} />
            </View>
        )
    }
}
```
```
this.props.navigation itu untuk pindah screen, 'View' itu name di file Router.js bagian <Stack.Screen>
```

>**Run di Device**
>
```
npx react-native run-android
```
---

## 2. Tab Navigation

>**Install**
>
```js
npm install @react-navigation/bottom-tabs
```

>**Rapih Code**
```
Pindahkan App.js ke folder src(buat baru) biar lebih rapih. Jangan lupa update path import App.js di file index.js
karena file App.js dipindahkan ke folder src jadi import yg tadinya
import App from './App'; 
menjadi
import App from './src/App';
```

>**Buat file Router.js**
>
```
Buat file Router.js di folder src. Ini untuk menampung list semua screen, jadi semua screen di daftarkan disini
```
**Router.js**
```js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import ViewScreen from './screen/ViewScreen';
import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();

// Ini Icon di Tab Navigationnya
const IconTab = (props, image) => {
    const imageFocus = { tintColor: 'grey' }
    const { focused } = props
    let styleImage = focused ? {} : imageFocus
    return (
        <View>
            <Image source={image} style={styleImage} />
        </View>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'black',
                style: { height: 70, paddingBottom: 10 } // Ketinggian Tab dan style lainnya
            }}>
                <Tab.Screen
                    name="Home" // ID Tab
                    component={HomeScreen} // Nama File Screen
                    options={{
                        tabBarLabel: "Beranda", // Nama Tab,
                        tabBarIcon: (props) => (
                            IconTab(props, require('../src/assets/image/ic_home.png')) // Icon Tab Diatas
                        )
                    }}
                />
                <Tab.Screen
                    name="View" // ID Tab
                    component={ViewScreen} // Nama File Screen
                    options={{
                        tabBarLabel: "View", // Nama Tab,
                        tabBarIcon: (props) => (
                            IconTab(props, require('../src/assets/image/ic_view.png')) // Icon Tab Diatas
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router
```
```
Semua Screen dibungkus oleh <Stack.Navigator> dan dibungkus lagi dengan <NavigationContainer>
Screen ditaro di <Tab.Screen> name itu unik jadi tidak boleh sama, dan component adalah nama file Screennya
dan jangan lupa import React from 'react'
```

>**Buat Screen Baru**
>
```js
Buat folder baru di dalam src dengan nama Screen atau Component atau yang relate jadi src/screen
kemudian didalam folder screen buat HomeScreen.js dan ViewScreen.js
```

***HomeScreen.js***
```js
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
```

***ViewScreen.js***
```js
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ViewScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
```

>**Run di Device**
>
```
npx react-native run-android
```