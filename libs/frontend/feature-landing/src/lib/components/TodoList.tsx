import { UiCard } from '@frontend/shared/ui/UiCard/UiCard';
import { TodoItem, Todo } from './TodoItem';

export const TodoList = () => {
  // Static sample todos for display only
  const todos: Todo[] = [
    { id: '1', text: 'Create an amazing todo app', completed: true },
    { id: '2', text: 'Add beautiful animations', completed: false },
    { id: '3', text: 'Make it responsive', completed: false },
    { id: '4', text: 'Deploy to production', completed: false },
  ];

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Stats Card */}
      <UiCard className="p-6 border-0 bg-card/60 backdrop-blur-sm shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Sample Todo List</h3>
        <div className="text-sm text-muted-foreground">
          {completedCount} of {totalCount} tasks completed
        </div>
      </UiCard>

      {/* Todo Items - Display Only */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
