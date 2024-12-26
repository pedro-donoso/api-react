import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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
    <View style={styles.imageContainer}>
     <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
   </View>
   <ScrollView style={styles.explanationContainer}>
    <Text style={styles.explanation}>Explanation: </Text>
    <Text style={styles.explanation}>{explanation}</Text>
   </ScrollView>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {

  paddingHorizontal: 16,
  backgroundColor: "#2c449d",
  height: "100%"
 },
 content: {
  backgroundColor: "rgba(7,26,93,255)",
  height: 300,
  marginVertical: 24,
  padding: 10
 },
 imageContainer: {
  position: "relative",
  width: "100%",
  height: 190,
  overflow: "hidden",
  marginBottom: 8,
  borderWidth: 2,
  borderColor: "#FFF"
 },
 image: {
  width: "100%",
  height: 190,
  resizeMode: "cover"
 },
 title: {
  color: "#FFF",
  fontSize: 22,
  fontWeight: "bold"
 },
 date: {
  color: "#FFF",
  fontSize: 16
 },
 explanationContainer: {
  marginVertical:8,
 },
 explanation: {
  color: "#FFF",
  fontSize: 16,
  marginVertical: 6,
  textAlign: "justify",
  paddingHorizontal: 16
 },
});

export default Detail;
