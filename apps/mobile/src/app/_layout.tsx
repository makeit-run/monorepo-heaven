import { Stack } from 'expo-router';
import { PortalHost } from 'libs/frontend/shared/mobile-ui/src/lib/@Primitives/components/Portal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ToastProvider } from '@frontend/shared/mobile-ui/Toast';
import '@todo/feature-themeing/global.css';

//Move providers to shared
// import { ReactQueryClientProvider } from "@frontend/app-shell/shared/providers/ReactQueryProvider"

export default function RootLayout() {
  return (
    // <ThemeProvider value={LIGHT_THEME}>
    // <ReactQueryClientProvider>
    <SafeAreaProvider>
      {/*It's for select scroll*/}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <PortalHost />
        </ToastProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
    // </ReactQueryClientProvider>
    // </ThemeProvider>
  );
}
