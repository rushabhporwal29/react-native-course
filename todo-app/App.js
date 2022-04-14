import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Learn React', key: '2' },
    { text: 'Learn Redux', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(todos.filter(todo => todo.key != key));
    Alert.alert('Deleted Todo!', '1 Todo is deleted successfully', [
      { text: 'OK', onPress: () => console.log('alert closed') }
    ]);
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: todos.length+1+'' }, ...prevTodos];
      });
      Alert.alert('Added Todo!', 'New Todo added successfully', [
        { text: 'OK', onPress: () => console.log('alert closed') }
      ]);
    } else {
      Alert.alert('Oops!', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteItem={pressHandler}/>
              )}
            />
          </View>
        </View>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    // backgroundColor: 'pink',
    padding: 40,
  },
  list:{
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
});
