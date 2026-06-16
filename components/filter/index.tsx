import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Filter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Music</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonExtra}>
        <Text style={styles.text}>Podcasts & Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Audiobook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.background,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.button,
  },
  buttonExtra: {
    borderWidth: 1,
    borderColor: colors.background,
    width: 150,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.button,
  },
  text: {
    color: colors.foreground,
  },
});
