import React,{ useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";


export default function BookingScreen() {
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log('data', data);
      };
      const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
    <Text style={styles.label}>Pick date</Text>
    <TextInput
      style={styles.input}
      {...{ onChangeText: register('date').onChange }}
    />
    <Text style={styles.label}>Choose staff</Text>
    <TextInput
      style={styles.input}
      {...{ onChangeText: register('staff').onChange }}
    />

{/* <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}
   

  

    <View style={styles.button}>
      <Button
        style={styles.buttonInner}
        color
        title="Save Booking"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    label: {
      color: 'black',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      width: 150,
      backgroundColor: 'blue',
      borderRadius: 40,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      padding: 8,
      backgroundColor: 'white',
    },
    input: {
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });