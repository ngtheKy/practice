import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

const Login = () => {

    const [login, setlogin] = useState(() => [{ email: '', password: '' }])
    const [value, setValue] = useState()

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>
                    E-Commerce
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>
                    Username
                </Text>
                <TextInput
                    style={styles.txtInput}
                    keyboardType='email-address'
                    value={login}
                    onChangeText={text => setlogin({ ...login, email: text })}
                />
                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    value={login}
                    onChangeText={text => setlogin({ ...login, password: text })}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#59c8ff'
    },
    header: {
        flex: 3,
        justifyContent: 'center'
    },
    txtHeader: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        flex: 7,
    },
    label: {
        marginLeft: '15%',
        fontSize: 16,
    },
    txtInput: {
        backgroundColor: '#fff',
        marginLeft: '15%',
        marginRight: '15%',
        height: 45,
        borderRadius: 5,
        fontSize: 17
    },
    button: {
        marginLeft: '15%',
        marginRight: '15%',
        height: 45,
        borderRadius: 5,
        backgroundColor: '#8ce8ff',
        justifyContent: 'center',
        marginTop: 10
    },
    txtButton: {
        fontSize: 16,
        textAlign: 'center',
    }
})

export default Login