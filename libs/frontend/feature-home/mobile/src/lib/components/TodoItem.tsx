import { useState } from 'react';
import { View, Keyboard } from 'react-native';
import { Checkbox } from '@frontend/shared/mobile-ui/Checkbox/Checkbox';
import { Edit2, Trash2, Check, X } from 'lucide-react-native';
import { Text } from '@frontend/shared/mobile-ui/Text';
import { TextInput } from '@frontend/shared/mobile-ui/TextInput';
import { Button } from '@frontend/shared/mobile-ui/Button';
import { LucideIcon } from '@frontend/shared/mobile-ui/LucideIcon';

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
    <View
      className={`p-4 mb-3 bg-card/80 ${todo.completed ? 'opacity-60' : ''}`}
    >
      <View className="flex-row items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="data-[state=checked]:bg-success data-[state=checked]:border-success"
        />

        {isEditing ? (
          <View className="flex-1 flex-row items-center gap-2">
            <TextInput
              value={editText}
              onChangeText={setEditText}
              onSubmitEditing={handleSave}
              containerClassName={'flex-1'}
              className="border border-primary/20 rounded-lg px-3 py-2 text-base "
              autoFocus
              returnKeyType="done"
            />
            <Button onPress={handleSave} className="bg-success">
              <LucideIcon icon={Check} className={'text-white'} />
            </Button>
            <Button onPress={handleCancel} variant={'destructive'}>
              <LucideIcon icon={X} className={'text-white'} />
            </Button>
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
              <Button onPress={() => setIsEditing(true)} className="p-2">
                <LucideIcon icon={Edit2} className={'text-white'} />
              </Button>
              <Button onPress={() => onDelete(todo.id)} className="p-2">
                <LucideIcon icon={Trash2} className={'text-white'} />
              </Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
