import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Text> Beranda </Text>
            </View>
        )
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: 'Ini Screen Baru',
            headerRight: () => (
                <Button
                    onPress={() => this.setAngka(this.state.angka + 10)}
                    title="Update Count"
                />
            ),
            headerStyle: {
                backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    }
}
