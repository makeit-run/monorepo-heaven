import { UiCard } from '@frontend/shared/ui/UiCard/UiCard';
import { UiCheckbox } from '@frontend/shared/ui/UiCheckbox/UiCheckbox';
import { cn } from '@shared/utils/cn';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <UiCard
      className={cn(
        'p-4 transition-all duration-300 hover:shadow-lg border-0 bg-card/80 backdrop-blur-sm box-border',
        'hover:-translate-y-1 hover:shadow-primary/20 hover:bg-green-100 hover:text-white',
        todo.completed && 'opacity-60'
      )}
    >
      <div className="flex items-center gap-3 box-border">
        <UiCheckbox
          checked={todo.completed}
          disabled
          className="data-[state=checked]:bg-success data-[state=checked]:border-success cursor-default transition-all duration-150 ease-in-out"
        />
        <span
          className={cn(
            'flex-1 transition-all duration-200 font-normal tracking-normal',
            todo.completed && 'line-through text-muted-foreground'
          )}
        >
          {todo.text}
        </span>
      </div>
    </UiCard>
  );
};
