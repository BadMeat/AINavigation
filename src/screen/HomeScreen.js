import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {

    pindahScreen = () => {
        this.props.navigation.navigate('View')
    }

    render() {
        return (
            <View>
                <Text> Beranda </Text>
                <Button title="Pindah ke View" onPress={() => this.pindahScreen()} />
            </View>
        )
    }
}
