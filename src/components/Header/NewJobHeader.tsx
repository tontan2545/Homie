import { View, Text } from "react-native";
import React from "react";
import { HStack, Icon } from "native-base";
import { IconButton } from "@components/common";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewJobHeader = () => {
  const navigation = useNavigation();
  return (
    <HStack paddingX={3} paddingY={1}>
      <IconButton
        icon={<Icon as={AntDesign} name="left" color="black" size="xl" />}
        onPress={() => navigation.goBack()}
      />
    </HStack>
  );
};

export default NewJobHeader;
