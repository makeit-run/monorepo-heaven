import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { Plus } from 'lucide-react-native';
import { TodoItem, Todo } from './TodoItem';
import { useToast } from '@frontend/shared/mobile-ui/Toast';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Create an amazing todo app', completed: true },
    { id: '2', text: 'Add beautiful animations', completed: false },
    { id: '3', text: 'Make it responsive', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const { showToast } = useToast();

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
      Keyboard.dismiss();
      showToast({
        title: 'Todo added!',
        description: 'Your new todo has been created successfully.',
      });
    }
  };

  const updateTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    showToast({
      title: 'Todo updated!',
      description: 'Your todo has been updated successfully.',
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    const todo = todos.find((t) => t.id === id);
    showToast({
      variant: 'success',
      title: todo?.completed ? 'Todo unmarked!' : 'Todo completed!',
      description: todo?.completed
        ? 'Todo marked as incomplete.'
        : 'Great job on completing that todo!',
    });
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    showToast({
      title: 'Todo deleted!',
      description: 'Your todo has been removed successfully.',
      variant: 'error',
    });
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full px-4">
          {/* Add Todo Card */}
          <View className="p-6 mb-6 bg-card/60">
            <View className="flex-row gap-3">
              <TextInput
                placeholder="What needs to be done?"
                value={newTodo}
                onChangeText={setNewTodo}
                onSubmitEditing={addTodo}
                className="flex-1 border border-primary/20 rounded-lg px-4 py-3 text-lg"
                returnKeyType="done"
              />
              <TouchableOpacity
                onPress={addTodo}
                className="bg-primary rounded-lg px-4 py-3 justify-center items-center"
              >
                <Plus className="h-5 w-5" color="white" />
              </TouchableOpacity>
            </View>

            {totalCount > 0 && (
              <View className="mt-4">
                <Text className="text-sm text-muted-foreground">
                  {completedCount} of {totalCount} tasks completed
                </Text>
              </View>
            )}
          </View>

          {/* Todo Items */}
          <View>
            {todos.length === 0 ? (
              <View className="p-8 bg-card/40">
                <Text className="text-muted-foreground text-lg text-center">
                  No todos yet. Add one above to get started! ✨
                </Text>
              </View>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdate={updateTodo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
