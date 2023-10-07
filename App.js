import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchForm from "./src/components/SerchForm";
import { LinearGradient } from "expo-linear-gradient";
import dummydata from "./data.json";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { useState } from "react";



export default function App() {
  const [items,setItems] = useState([])


  const onSearch = (data) =>{
console.log(data)

setItems(dummydata)
  }

  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm  onSearch={onSearch}/>
        {/*  <FlightOptionItem flight={option1}/> */}
        <FlatList
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          data={items}
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
