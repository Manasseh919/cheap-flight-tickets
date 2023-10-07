import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchForm from "./src/components/SerchForm";
import { LinearGradient } from "expo-linear-gradient";
import data from "./data.json";
import FlightOptionItem from "./src/components/FlightOptionItem";

const option1 = data[3];

export default function App() {
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm />
        {/*  <FlightOptionItem flight={option1}/> */}
        <FlatList
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          data={data}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
