import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const InputData = () => {

    const [value, setValue] = useState(() => [{ a: '', b: '', c: '', n: '' }])

    return (
        <View style={styles.container}>
            <View style={styles.ptb2}>
                <Text style={styles.txt}>
                    Giải PT Bậc 2{'\n'}
                    {value.a}x^2+{value.b}x+{value.c} = 0{'\n'}
                    a = {value.a}{'\n'}
                    b = {value.b}{'\n'}
                    c = {value.c}{'\n'}
                </Text>
                <TextInput
                    id='a'
                    style={styles.txtInput}
                    keyboardType='numeric'
                    value={value}
                    onChangeText={text => setValue({ ...value, a: text })}
                />

                <TextInput
                    id='b'
                    style={styles.txtInput}
                    keyboardType='numeric'
                    value={value}
                    onChangeText={text => setValue({ ...value, b: text })}
                />
                <TextInput
                    id='c'
                    style={styles.txtInput}
                    keyboardType='numeric'
                    value={value}
                    onChangeText={text => setValue({ ...value, c: text })}
                />

            </View>
            <View style={styles.sont}>
                <Text style={styles.txt}>
                    Tìm Số Nguyên tố Từ 1 - {value.n}
                </Text>
                <TextInput
                    id='n'
                    style={styles.txtInput}
                    keyboardType='numeric'
                    value={value}
                    onChangeText={text => setValue({ ...value, n: text })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center'
    },
    txtInput: {
        width: 50,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: '33%',
        color: '#fff',
        marginTop: 5,
    },
    show: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 40,
    },
    ptb2: {
        flexDirection: 'column'
    }
})

export default InputData