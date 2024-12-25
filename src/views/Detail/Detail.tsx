import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
 const {
  params: { title, url, explanation, date },
 } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

 return (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
   <Text>Detail</Text>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingHorizontal: 16,
  backgroundColor: "rgba(7,26,93,255)",
 },
 content: {

 },
 image: {

 },
 title: {

 },
 date: {
  
 }
});

export default Detail;
