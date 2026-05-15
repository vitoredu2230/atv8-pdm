import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning</Text>
      <View style={styles.icons}>
        <AntDesign name="bell" size={24} color="white" />
        <AntDesign name="field-time" size={24} color="white" />
        <Feather name="settings" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "center",
  },
  title: {
    color: colors.foreground,
    fontSize: 24,
  },
});
