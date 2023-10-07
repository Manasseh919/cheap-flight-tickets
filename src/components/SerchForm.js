import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onSearchPressed = () => {
    console.log("searching for: ");
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Search the best prices for your trip</Text>
      <TextInput
        style={styles.input}
        placeholder="From"
        value={from}
        onChangeText={setFrom}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        value={to}
        onChangeText={setTo}
      />

      <Button title="Search" onPress={onSearchPressed} />
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,

    //shadows react native shadow genertor
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
