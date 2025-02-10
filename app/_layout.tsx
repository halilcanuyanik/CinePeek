import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" options={{ title: "Search Movies" }} />
      <Stack.Screen name="MovieDetails" options={{ title: "Movie Details" }} />
    </Stack>
  );
};

export default Layout;