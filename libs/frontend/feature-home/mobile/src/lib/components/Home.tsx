import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TodoList } from './TodoList';
import { ArrowLeft } from 'lucide-react-native';

export const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-background via-primary/5 to-primary-light/10">
      <View className="flex-1 px-6 py-8">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <TouchableOpacity
            onPress={() => console.log('back')}
            className="flex-row items-center gap-2 p-2"
          >
            <ArrowLeft className="h-4 w-4" color="#6366f1" />
            <Text className="text-primary">Back to Home</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-primary">My Todo App</Text>
          <View />
        </View>

        {/* Todo App */}
        <View className="flex-1">
          <View className="items-center mb-8">
            <Text className="text-3xl font-bold text-foreground mb-4">
              Manage Your Tasks
            </Text>
            <Text className="text-lg text-muted-foreground text-center">
              Create, edit, complete, and organize your todos with ease
            </Text>
          </View>

          <TodoList />
        </View>
      </View>
    </SafeAreaView>
  );
};
