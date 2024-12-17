import React from "react";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View>
        <View>
          <Text>Explore</Text>
        </View>
        <View>
          <Image source={require('../../assets/nasa.png')}/>
        </View>
        
    </View>
  )
};

export default Header;