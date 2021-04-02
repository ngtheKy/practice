import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Todo = () => {

    const [todo, settodo] = useState(() => [])
    const [value, setvalue] = useState(() => '')
    const Addtodo = (text) => {
        if (value.length > 0) {
            settodo({ ...todo, text: value, key: Date.now(), checked: false })
            setvalue('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    Todo List
                </Text>
            </View>
            <View style={styles.content}>
                <Text>

                </Text>
            </View>
            <View style={styles.Input}>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Do something'
                    value={value}
                    onChangeText={(value) => setvalue(value)}
                    multiline={true}
                />
                <TouchableOpacity

                >
                    Add
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: 'gray'
    },
    Input: {

    },
    header: {
        backgroundColor: 'green'
    }
})

export default Todo