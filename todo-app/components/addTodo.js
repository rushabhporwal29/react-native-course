import React, {useState} from 'react'
import { StyleSheet, todo, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [todo, setTodo] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo ...'
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button
        title='Add Todo'
        onPress={() => {submitHandler(todo); setTodo('')}}
        color='coral'
      />
    </View>
  )
}

const styles= StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

  }
})

