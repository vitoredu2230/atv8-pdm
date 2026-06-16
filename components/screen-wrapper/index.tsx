import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { PropsWithChildren } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "../cards";
import Filter from "../filter";
import Footer from "../footer";
import Header from "../header";

export default function ScreenWrapper({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Filter />

      <Cards />
      <ScrollView>
        <View style={styles.children}>{children}</View>
      </ScrollView>

      <Footer />

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "space-between",
  },
  children: {
    padding: spacing.md,
    gap: spacing.xl,
  },
});
