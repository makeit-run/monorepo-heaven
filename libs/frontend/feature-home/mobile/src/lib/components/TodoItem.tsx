import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { UiButton } from '@frontend/shared/ui/UiButton/UiButton';
import { UiCard } from '@frontend/shared/ui/UiCard/UiCard';
import { UiCheckbox } from '@frontend/shared/ui/UiCheckbox/UiCheckbox';
import { Edit2, Trash2, Check, X } from 'lucide-react-native';

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
      Keyboard.dismiss();
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
    Keyboard.dismiss();
  };

  return (
    <UiCard
      className={`p-4 mb-3 bg-card/80 ${
        todo.completed ? 'opacity-60' : ''
      }`}
    >
      <View className="flex-row items-center gap-3">
        <UiCheckbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="data-[state=checked]:bg-success data-[state=checked]:border-success"
        />

        {isEditing ? (
          <View className="flex-1 flex-row items-center gap-2">
            <TextInput
              value={editText}
              onChangeText={setEditText}
              onSubmitEditing={handleSave}
              className="flex-1 border border-primary/20 rounded-lg px-3 py-2 text-base"
              autoFocus
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={handleSave}
              className="bg-success rounded-lg p-2"
            >
              <Check className="h-4 w-4" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancel}
              className="bg-destructive/10 rounded-lg p-2"
            >
              <X className="h-4 w-4" color="#ef4444" />
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-1 flex-row items-center justify-between">
            <Text
              className={`flex-1 text-base ${
                todo.completed ? 'line-through text-muted-foreground' : ''
              }`}
            >
              {todo.text}
            </Text>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={() => setIsEditing(true)}
                className="p-2"
              >
                <Edit2 className="h-4 w-4" color="#6366f1" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDelete(todo.id)}
                className="p-2"
              >
                <Trash2 className="h-4 w-4" color="#ef4444" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </UiCard>
  );
};