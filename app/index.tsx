import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PostImage from "@/assets/images/favicon.png";
import { router, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const HomeScreen = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!loading && user){
      router.replace('/notes')
    }
  }, [user, loading]);

  if(loading){
    return(
      <View style={styles.centeredContainer}>
        <ActivityIndicator size='large' color='red'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={PostImage} style={styles.image} />
      <Text style={styles.title}>Welcome to notes app</Text>
      <Text style={styles.subtitle}>Write your notes anytime</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  button: {
    backgroundColor: "lightblue",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
