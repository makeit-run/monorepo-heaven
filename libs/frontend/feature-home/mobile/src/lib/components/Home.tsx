import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import { Greeting } from '@frontend/feature-home/shared/greeting';

export const Home = ({
  user,
  onChangeUser,
}: {
  user: any;
  onChangeUser: () => void;
}) => {
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 p-4">
          <View className=w"bg-white rounded-lg p-6 mb-4">
            <Text className="text-2xl font-bold text-gray-900 mb-2">
              Hello there, {user.name}
            </Text>
            <Text className="text-lg text-gray-600 mb-4">{Greeting}</Text>
            <TouchableOpacity
              className="bg-primary rounded p-3 mb-4"
              onPress={onChangeUser}
            >
              <Text className="text-white text-center font-medium">
                Change User
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-gray-50 rounded-lg p-6 mb-4">
            <Text className="text-xl font-bold text-gray-900 mb-2">
              ✅ You're up and running
            </Text>
            <Text className="text-blue-600 font-medium">What's next?</Text>
          </View>

          <View className="bg-white rounded-lg shadow-sm p-6 mb-4">
            <Text className="text-xl font-bold text-gray-900 mb-4">
              Learning materials
            </Text>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 border-b border-gray-200"
              onPress={() =>
                openURL(
                  'https://nx.dev/getting-started/intro?utm_source=nx-project'
                )
              }
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-2xl mr-3">📚</Text>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    Documentation
                  </Text>
                  <Text className="text-sm text-gray-500">
                    Everything is in there
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 border-b border-gray-200"
              onPress={() =>
                openURL('https://nx.dev/blog/?utm_source=nx-project')
              }
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-2xl mr-3">📝</Text>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">Blog</Text>
                  <Text className="text-sm text-gray-500">
                    Changelog, features & events
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 border-b border-gray-200"
              onPress={() =>
                openURL(
                  'https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project&sub_confirmation=1'
                )
              }
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-2xl mr-3">📺</Text>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    YouTube channel
                  </Text>
                  <Text className="text-sm text-gray-500">
                    Nx Show, talks & tutorials
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 border-b border-gray-200"
              onPress={() =>
                openURL(
                  'https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project'
                )
              }
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-2xl mr-3">🎯</Text>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    Interactive tutorials
                  </Text>
                  <Text className="text-sm text-gray-500">
                    Create an app, step-by-step
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4"
              onPress={() =>
                openURL('https://nxplaybook.com/?utm_source=nx-project')
              }
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-2xl mr-3">🎓</Text>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    Video courses
                  </Text>
                  <Text className="text-sm text-gray-500">
                    Nx custom courses
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-blue-50 rounded-lg p-6 mb-4">
            <Text className="text-xl font-bold text-gray-900 mb-2">
              ☁️ Nx Cloud
            </Text>
            <Text className="text-base text-gray-700 mb-2">
              Enable faster CI & better DX
            </Text>
            <Text className="text-sm text-gray-600 mb-3">
              You can activate distributed tasks executions and caching by
              running:
            </Text>
            <View className="bg-gray-800 rounded p-3 mb-3">
              <Text className="text-green-400 font-mono">nx connect</Text>
            </View>
            <TouchableOpacity
              onPress={() => openURL('https://nx.app/?utm_source=nx-project')}
            >
              <Text className="text-blue-600 font-medium">
                What is Nx Cloud?
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-lg shadow-sm p-6 mb-4">
            <Text className="text-xl font-bold text-gray-900 mb-4">
              Next steps
            </Text>
            <Text className="text-gray-600 mb-4">
              Here are some things you can do with Nx:
            </Text>

            <View className="mb-4">
              <Text className="font-medium text-gray-900 mb-2">
                🔧 Add UI library
              </Text>
              <View className="bg-gray-100 rounded p-3">
                <Text className="text-xs font-mono text-gray-700">
                  # Generate UI lib
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  nx g @nx/next:library ui
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  # Add a component
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  nx g @nx/next:component ui/src/lib/button
                </Text>
              </View>
            </View>

            <View className="mb-4">
              <Text className="font-medium text-gray-900 mb-2">
                📊 View project details
              </Text>
              <View className="bg-gray-100 rounded p-3">
                <Text className="text-xs font-mono text-gray-700">
                  nx show project web --web
                </Text>
              </View>
            </View>

            <View className="mb-4">
              <Text className="font-medium text-gray-900 mb-2">
                🔍 View interactive project graph
              </Text>
              <View className="bg-gray-100 rounded p-3">
                <Text className="text-xs font-mono text-gray-700">
                  nx graph
                </Text>
              </View>
            </View>

            <View className="mb-4">
              <Text className="font-medium text-gray-900 mb-2">
                ⚡ Run affected commands
              </Text>
              <View className="bg-gray-100 rounded p-3">
                <Text className="text-xs font-mono text-gray-700">
                  # see what's been affected by changes
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  nx affected:graph
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  # run tests for current changes
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  nx affected:test
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  # run e2e tests for current changes
                </Text>
                <Text className="text-xs font-mono text-gray-700">
                  nx affected:e2e
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            className="bg-gray-900 rounded-lg p-4 mb-4"
            onPress={() =>
              openURL('https://github.com/nrwl/nx?utm_source=nx-project')
            }
          >
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">⭐</Text>
              <View className="flex-1">
                <Text className="font-medium text-white">
                  Nx is open source
                </Text>
                <Text className="text-sm text-gray-300">
                  Love Nx? Give us a star!
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View className="items-center py-8">
            <Text className="text-gray-600">Carefully crafted with ❤️</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
