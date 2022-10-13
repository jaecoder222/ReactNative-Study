import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onTolggle, onRemove}) {
  return (
    <FlatList
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={todos}
      renderItem={({item}) => (
        <View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onTolggle={onTolggle}
            onRemove={onRemove}
          />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
