import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'

export default class FormScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            alamat: ''
        }
    }

    simpanTouchableOpactity = () => {
        console.log('nama', this.state.nama)
        console.log('alamat', this.state.alamat)
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                {/* Gambar */}
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://i.picsum.photos/id/978/200/300.jpg?hmac=sP2_huC-v5a6cNxpdmxp1FPInoDET7j7O3GoftdaEJk' }} />
                </View>
                {/* Nama */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ flex: 1 }}>Nama</Text>
                    <TextInput
                        placeholder="Nama"
                        value={this.state.nama}
                        onChangeText={(nama) => this.setState({ nama })}
                        style={{ borderWidth: 1, marginStart: 10, flex: 5 }} />
                </View>

                {/* Alamat */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ flex: 1 }}>Alamat</Text>
                    <TextInput
                        placeholder="Alamat"
                        value={this.state.alamat}
                        onChangeText={(alamat) => this.setState({ alamat })}
                        style={{ borderWidth: 1, marginStart: 10, flex: 5 }} />
                </View>

                {/* Tombol */}
                <View style={{ marginTop: 10 }}>
                    <Button title="Simpan" onPress={() => this.simpanTouchableOpactity()} />
                </View>

                <TouchableOpacity style={{ backgroundColor: 'blue', marginTop: 10, padding: 10, alignItems: 'center' }} onPress={() => { this.simpanTouchableOpactity() }}>
                    <Text style={{ color: 'white' }}>Simpan</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
