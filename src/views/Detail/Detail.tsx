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
    <Text style={styles.explanation}>{explanation}</Text>
   </ScrollView>
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
  backgroundColor: "#2c449d",
  borderRadius: 32,
  marginVertical: 24,
  padding: 16,
  flex: 1
 },
 imageContainer: {
  position: "relative",
  width: "100%",
  height: "100%", // Ajusta la altura según sea necesario
  borderRadius: 32,
  overflow: "hidden", // Asegúrate de que el contenido que sobresale se oculte
  marginBottom: 16,
 },
 image: {
  width: "100%",
  height: "100%", // Asegúrate de que la imagen ocupe todo el contenedor
  position: "absolute", // Asegúrate de que la imagen esté posicionada correctamente
  top: 0,
  left: 0,
 },
 title: {
  color: "#FFF",
  fontSize: 22,
  fontWeight: "bold",
  marginBottom: 4, // Espacio entre el título y la fecha
 },
 date: {
  color: "#FFF",
  fontSize: 16,
  marginBottom: 24, // Aumentar el margen inferior para más espacio
 },
 explanationContainer: {
  marginVertical: 16,
 },
 explanation: {
  color: "#FFF",
  fontSize: 16,
  marginTop: 120, // Aumentar el margen superior para más espacio
  textAlign: "justify", // Justificar el texto
 },
});

export default Detail;
