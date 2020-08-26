import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class UIBasicScreen extends Component {

    // Untuk pindah screen ke FormScreen
    pindahScreen = () => {
        this.props.navigation.navigate('Form')
    }

    render() {
        return (
            <View style={{ margin: 10 }}>
                <Text> UIBasic </Text>

                {/* fungsi pindahScreeen di tempatkan di tombol */}
                <View style={{ marginTop: 10 }}>
                    <Button title="Pindah ke Form UI" onPress={() => this.pindahScreen()} />
                </View>
            </View>
        )
    }
}
