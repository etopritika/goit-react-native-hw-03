import React, { useCallback } from "react";
import { Pressable, Linking, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const FormLink = ({ children, screenName  }) => {
  const navigation = useNavigation();
  // const handlePress = () => {
  //   navigation.navigate(screenName);
  // };
  return (
    <Pressable style={styles.auth__link} onPress={() => navigation.navigate(screenName)}>
      <Text style={styles.auth__text}>{children}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  auth__link: {
    paddingTop: 16,
  },
  auth__text: {
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
