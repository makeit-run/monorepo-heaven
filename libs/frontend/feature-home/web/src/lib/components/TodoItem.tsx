import { useState } from 'react';
import { UiButton } from '@frontend/shared/ui/UiButton/UiButton';
import { UiTextInput } from '@frontend/shared/ui/UiTextInput/UiTextInput';
import { UiCard } from '@frontend/shared/ui/UiCard/UiCard';
import { UiCheckbox } from '@frontend/shared/ui/UiCheckbox/UiCheckbox';
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { cn } from '@shared/utils/cn';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, text: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({
  todo,
  onUpdate,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <UiCard
      className={cn(
        'p-4 transition-all duration-300 hover:shadow-lg border-0 bg-card/80 backdrop-blur-sm',
        'hover:-translate-y-1 hover:shadow-primary/20',
        todo.completed && 'opacity-60'
      )}
    >
      <div className="flex items-center gap-3">
        <UiCheckbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="data-[state=checked]:bg-success data-[state=checked]:border-success"
        />

        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <UiTextInput
              value={editText}
              onChange={(e: any) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 border-primary/20 focus:border-primary"
              autoFocus
            />
            <UiButton
              size="small"
              onClick={handleSave}
              className="bg-success hover:bg-success/90"
            >
              <Check className="h-4 w-4" />
            </UiButton>
            <UiButton
              size="small"
              variant="contained"
              onClick={handleCancel}
              className="border-destructive/20 text-destructive hover:bg-destructive/10"
            >
              <X className="h-4 w-4" />
            </UiButton>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-between">
            <span
              className={cn(
                'flex-1 transition-all duration-200',
                todo.completed && 'line-through text-muted-foreground'
              )}
            >
              {todo.text}
            </span>
            <div className="flex items-center gap-2">
              <UiButton
                size="small"
                variant="ghost"
                onClick={() => setIsEditing(true)}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Edit2 className="h-4 w-4" />
              </UiButton>
              <UiButton
                size="small"
                variant="ghost"
                onClick={() => onDelete(todo.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </UiButton>
            </div>
          </div>
        )}
      </div>
    </UiCard>
  );
};
