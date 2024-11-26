import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from "react-native-paper"
import Fallback from '../components/Fallback';

const TodoScreen = () => {

    // Init local states
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    // Handle add todo
    const handleAddTodo = () => {
        if(todo === ""){
          return; 
        }

        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo("");
    };

    // Handle delete
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)
        setTodoList(updatedTodoList) 
    };

    // Handle edit
    const handleEditTodo = (todo) => {
        setEditedTodo(todo)
        setTodo(todo.title)
    }

    // Handle update
    const handleUpdateTodo = () => {
      const updateTodos = todoList.map((item) => {
        if(item.id === editedTodo.id){
          return {...item, title: todo}
        }

        return item
      });
        setTodoList(updateTodos)
        setEditedTodo(null)
        setTodo("") 
  };

    // Render todo
    const renderTodos = ({item, index}) => {
        return(
            <View style={styles.note}>
                <Text style={styles.txtNote}>{item.title}</Text>
                <IconButton
                    icon="pencil"
                    iconColor='#fff'
                    onPress={() => handleEditTodo(item)}
                />
                <IconButton
                    icon="trash-can"
                    iconColor='#fff'
                    onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        )
    }
    return (
      <View style={{ marginHorizontal: 16, marginTop: 40}}>
        <TextInput style={styles.boxInsertNote}
          placeholder='Escreva algo'
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
      />

      {
        editedTodo ? ( <TouchableOpacity style={styles.btnSaveSub}
          onPress={() => handleUpdateTodo()}
          >
  
          <Text style={styles.btnSave}>
            Guardar
          </Text>
  
        </TouchableOpacity> ) : ( <TouchableOpacity style={styles.btnAddNote}
        onPress={() => handleAddTodo()}
        >

        <Text style={styles.textAddNote}>
          Adicionar nota
        </Text>

      </TouchableOpacity> )

      }

        {/* Render todo list */}

        <FlatList 
            data={todoList} 
            renderItem={renderTodos} 
        />

        {
          todoList.length<=0 && <Fallback/>
        }
      </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    padding: 20,
    color: '#ff0000',
    backgroundColor: '#fff',
  },
  image:{
    width: 350,
    height: 350,
    borderRadius:10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  spaces:{
    paddingVertical: 10,
  },
  textAddNote:{ 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 20
  },
  btnAddNote: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    marginVertical: 34,
    alignItems: "center",
  },
  btnSave: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 20
  },
  btnSaveSub: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    marginVertical: 34,
    alignItems: "center",
  },
  boxInsertNote: { 
    borderWidth: 2,
    borderColor:'#1e90ff',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  txtNote: {
    color: "#fff", 
    fontSize: 20, 
    fontWeight: '800',
    flex:1
  },
  note: {
    backgroundColor: "#1e90ff", 
    borderRadius: 6, 
    paddingHorizontal: 16, 
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }
});