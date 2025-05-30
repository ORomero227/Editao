import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "blue",
    color: "#fff",
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen!</Text>
      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
    </View>
  );
}
