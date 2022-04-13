import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState([
    { name: 'Mario', id: '1' },
    { name: 'Luigi', id: '2' },
    { name: 'Rushabh', id: '3' },
    { name: 'Sujal', id: '4' },
    { name: 'Peach', id: '5' },
    { name: 'Toad', id: '6' },
    { name: 'Bowser', id: '7' },
  ]);
  const [age, setAge] = useState('');

  const clickHandler = () => {
    setName('Rushabh'==name?'Sujal':'Rushabh');
    setPerson(person.name=='Mario'?{ name: 'Luigi', age: '18' }:{ name: 'Mario', age: '23' });
  }

  const pressHandler= (id) =>{
    console.log(id);
    setPerson(person.filter(person => person.id != id));
  }

  return (
    
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={person}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>

    
    // <View style={styles.container}>
    //   <ScrollView>
    //     { person.map(item=>(
    //         <View key={item.key}>
    //           <Text style={styles.item}>{item.name}</Text>
    //         </View>
    //     ))}
    //   </ScrollView>
    // </View>


    // <View style={styles.container}>
    //   <Text>Enter Name:</Text>
    //   <TextInput 
    //     multiline
    //     style={styles.input}
    //     placeholder="Enter Name"
    //     value={name} 
    //     onChangeText={(text) => setName(text)} 
    //   />
    //   <Text>Enter Age:</Text>
    //   <TextInput 
    //     style={styles.input}
    //     keyboardType="numeric"
    //     placeholder="Enter Age"
    //     value={age} 
    //     onChangeText={(text) => setAge(text)} 
    //   />
      
    //   <Text>name: {name||'NaN'}, age: {age||'NaN'}</Text>
    //   <View style={styles.header}>
    //     <Text style={styles.boldText}>Hello, {name}</Text>
    //     <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <Button title="Click Me" onPress={clickHandler}/>
    //   </View>
    //   <View style={styles.body}>
    //     <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
    //     <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
    //     <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderColor: '#777',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }

});
