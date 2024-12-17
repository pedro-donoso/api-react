import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Explore</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('../../assets/nasa.png')} style={styles.image}/>
        </View>
        
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Header;