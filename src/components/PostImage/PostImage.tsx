import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { PostImage as PostImageTypes } from "../../types";

const PostImage: FC<PostImageTypes> = ({ title, date}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
    <View style={styles.buttonContainer}>
      <Button title="View"/>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12
  },
  date: {
    color: '#fff'
  },
  buttonContainer: {
    alignItems: 'flex-end'
  }
});

export default PostImage;