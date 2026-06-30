import React, { useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Vibration,
  View,
} from 'react-native';

type RouteName = 'Home' | 'Details' | 'Settings';

type Todo = {
  id: number;
  title: string;
};

const routeTitles: Record<RouteName, string> = {
  Home: 'Home',
  Details: 'Details',
  Settings: 'Settings',
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [route, setRoute] = useState<RouteName>('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Header route={route} onBack={() => setRoute('Home')} />

        <View style={styles.content}>
          {route === 'Home' && <HomeScreen onNavigate={setRoute} />}
          {route === 'Details' && <DetailsScreen onNavigate={setRoute} />}
          {route === 'Settings' && <SettingsScreen onNavigate={setRoute} />}
        </View>
      </View>
    </SafeAreaView>
  );
}

function Header({
  route,
  onBack,
}: {
  route: RouteName;
  onBack: () => void;
}) {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        disabled={route === 'Home'}
        onPress={onBack}
        style={({ pressed }) => [
          styles.backButton,
          route === 'Home' && styles.backButtonDisabled,
          pressed && route !== 'Home' && styles.buttonPressed,
        ]}
      >
        <Text
          style={[
            styles.backButtonText,
            route === 'Home' && styles.backButtonTextDisabled,
          ]}
        >
          Back
        </Text>
      </Pressable>
      <Text style={styles.headerTitle}>{routeTitles[route]}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
}

function HomeScreen({
  onNavigate,
}: {
  onNavigate: (route: RouteName) => void;
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>Basic navigation</Text>
      <Text style={styles.title}>Daniel</Text>
     

      <View style={styles.actions}>
        <NavButton label="Open Details" onPress={() => onNavigate('Details')} />
        <NavButton
          label="Test Navigation"
          variant="secondary"
          onPress={() => onNavigate('Settings')}
        />
      </View>
    </View>
  );
}



function DetailsScreen({
  onNavigate,
}: {
  onNavigate: (route: RouteName) => void;
}) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTodo() {
      try {
        const response = await fetch(
          'https://localhost:8000/todo' ,
        );
        const data = await response.json();

        setTodo({
          id: data.id,
          title: data.title,
        });
      } catch {
        setError('Could not load test data.');
      } finally {
        setIsLoading(false);
      }
    }

    loadTodo();
  }, []);




  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>API TEST SCREEN </Text>
      <Text style={styles.title}>A second screen</Text>
      <Text style={styles.body}>
        {isLoading && 'Loading test data...'}
        {!isLoading && error}
        {!isLoading && todo && `Todo #${todo.id}: ${todo.title}`}
      </Text>

      <View style={styles.actions}>
        <NavButton
          label="Go to Settings"
          onPress={() => onNavigate('Settings')}
        />
        <NavButton
          label="Back Home"
          variant="secondary"
          onPress={() => onNavigate('Home')}
        />
      </View>
    </View>
  );
}

function SettingsScreen({
  onNavigate,
}: {
  onNavigate: (route: RouteName) => void;
}) {
  async function requestCameraPermission() {
    if (Platform.OS !== 'android') {
      Alert.alert('Permission test', 'Runtime permission test is Android-only.');
      return;
    }

    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera permission',
        message: 'Allow this test app to access the camera.',
        buttonPositive: 'Allow',
        buttonNegative: 'Deny',
      },
    );

    Alert.alert('Permission result', result);
  }

  function testNativeFeature() {
    Vibration.vibrate(300);
    Alert.alert('Vibration and native alert worked.');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>Vibrate Phone</Text>
      <Text style={styles.title}>Device feature</Text>
      <Text style={styles.body}>
        Request a runtime permission, or trigger a short vibration and native
        alert.
      </Text>

      <View style={styles.actions}>
        <NavButton
          label="Request Permission"
          onPress={requestCameraPermission}
        />
        <NavButton
          label="Make phone vibrate"
          variant="secondary"
          onPress={testNativeFeature}
        />
        <NavButton
          label="Back Home"
          variant="secondary"
          onPress={() => onNavigate('Home')}
        />
      </View>
    </View>
  );
}

function NavButton({
  label,
  onPress,
  variant = 'primary',
}: {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.navButton,
        variant === 'secondary' && styles.navButtonSecondary,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text
        style={[
          styles.navButtonText,
          variant === 'secondary' && styles.navButtonTextSecondary,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f3eb',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f3eb',
  },
  header: {
    minHeight: 64,
    alignItems: 'center',
    borderBottomColor: '#ded6c8',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  backButton: {
    minWidth: 72,
    borderRadius: 8,
    paddingVertical: 10,
  },
  backButtonDisabled: {
    opacity: 0,
  },
  backButtonText: {
    color: '#195f5b',
    fontSize: 16,
    fontWeight: '700',
  },
  backButtonTextDisabled: {
    color: '#8f8578',
  },
  headerTitle: {
    color: '#181614',
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  headerSpacer: {
    minWidth: 72,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  eyebrow: {
    color: '#195f5b',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: '#181614',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 40,
    marginBottom: 16,
  },
  body: {
    color: '#4f4941',
    fontSize: 17,
    lineHeight: 25,
    maxWidth: 520,
  },
  actions: {
    gap: 12,
    marginTop: 32,
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: '#195f5b',
    borderRadius: 8,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  navButtonSecondary: {
    backgroundColor: '#ffffff',
    borderColor: '#cfc6b6',
    borderWidth: 1,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  navButtonTextSecondary: {
    color: '#195f5b',
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default App;
