import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
        <Box style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </Box>
    </GluestackUIProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
