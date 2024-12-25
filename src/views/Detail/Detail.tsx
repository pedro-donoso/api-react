import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";

const Detail = () => {
  const {} = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)'
  }
})

export default Detail;