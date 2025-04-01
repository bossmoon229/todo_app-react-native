import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: 'orange',
    },
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: 'white'
    }
  }}
  >
    <Stack.Screen name="index" options={{title: 'Home'}}/>
    <Stack.Screen name="notes" options={{headerTitle: 'Notes'}}/>

  </Stack>
  ;
}

export default RootLayout;