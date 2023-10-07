import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearchPressed = () => {
    console.log({from,to,departDate,returnDate});
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

      <View style={styles.datePicker}>
        <Feather name="calendar" size={26} color="gray" />
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={{fontSize:20,color:'gainsboro',marginLeft:10}}>|</Text>
        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
          minimumDate={departDate}
        />
      </View>

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
  datePicker: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems:'center'
  },
});
