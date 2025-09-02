import { useState } from 'react';
import { UiButton } from '@frontend/shared/ui/UiButton/UiButton';
import { UiTextInput } from '@frontend/shared/ui/UiTextInput/UiTextInput';
import { UiCard } from '@frontend/shared/ui/UiCard/UiCard';
import { Plus } from 'lucide-react';
import { TodoItem, Todo } from './TodoItem';
import { useToast } from '@frontend/shared/ui/UiToaster/hooks/useToast';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Create an amazing todo app', completed: true },
    { id: '2', text: 'Add beautiful animations', completed: false },
    { id: '3', text: 'Make it responsive', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const { toast } = useToast();

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
      toast({
        title: 'Todo added!',
        description: 'Your new todo has been created successfully.',
      });
    }
  };

  const updateTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    toast({
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
    toast({
      title: todo?.completed ? 'Todo unmarked!' : 'Todo completed!',
      description: todo?.completed
        ? 'Todo marked as incomplete.'
        : 'Great job on completing that todo!',
    });
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast({
      title: 'Todo deleted!',
      description: 'Your todo has been removed successfully.',
      variant: 'destructive',
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Add Todo Card */}
      <UiCard className="p-6 border-0 bg-card/60 backdrop-blur-sm shadow-lg">
        <div className="flex gap-3">
          <UiTextInput
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e: any) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border-primary/20 focus:border-primary text-lg"
          />
          <UiButton
            onClick={addTodo}
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/30"
          >
            <Plus className="h-5 w-5" />
          </UiButton>
        </div>

        {totalCount > 0 && (
          <div className="mt-4 text-sm text-muted-foreground">
            {completedCount} of {totalCount} tasks completed
          </div>
        )}
      </UiCard>

      {/* Todo Items */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <UiCard className="p-8 text-center border-0 bg-card/40 backdrop-blur-sm">
            <p className="text-muted-foreground text-lg">
              No todos yet. Add one above to get started! ✨
            </p>
          </UiCard>
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
      </div>
    </div>
  );
};
