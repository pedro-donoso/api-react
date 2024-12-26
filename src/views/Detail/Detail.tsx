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
    <Text style={styles.titleExplanation}>Explanation: </Text>
    <ScrollView style={styles.explanationContainer}>
     <Text style={styles.explanation}>{explanation}</Text>
    </ScrollView>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  paddingHorizontal: 16,
  backgroundColor: "#2c449d",
  height: "100%",
 },
 content: {
  backgroundColor: "rgba(7,26,93,255)",
  height: "85%",
  marginVertical: 12,
  padding: 8,
  borderRadius: 24
 },
 imageContainer: {
  position: "relative",
  width: "100%",
  height: 190,
  overflow: "hidden",
  marginBottom: 8,
  borderWidth: 2,
  borderColor: "#FFF",
  borderRadius: 24
 },
 image: {
  width: "100%",
  height: 190,
  resizeMode: "cover",
 },
 title: {
  color: "#FFF",
  fontSize: 20, // Ajustado para ser un poco más pequeño
  fontWeight: "bold",
  marginVertical: 4, // Añadido para espaciado
 },
 date: {
  color: "#FFF",
  fontSize: 14, // Ajustado para ser un poco más pequeño
  marginBottom: 8, // Añadido para espaciado
 },
 titleExplanation: {
  color: "#FFF",
  fontWeight: "bold",
  paddingBottom: 8
 },
 explanationContainer: {
  marginVertical: 2, // Reducido
 },
 explanation: {
  color: "#FFF",
  fontSize: 14, // Ajustado para ser un poco más pequeño
  marginVertical: 2, // Reducido
  textAlign: "justify",
  paddingHorizontal: 8, // Reducido
  marginBottom: 32
 },
});

export default Detail;
