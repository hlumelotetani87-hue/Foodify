import { StyleSheet, Text, View } from "react-native";

export default function PlannerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planner</Text>
      <Text style={styles.description}>
        Your meal planning tools will show up here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#16351f",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4f6b57",
  },
});
