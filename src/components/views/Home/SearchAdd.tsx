import React from "react";
import { HStack, Icon } from "native-base";
import { IconButton, LinearGradient } from "@components/common";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@customTypes/RootStackParamList";

type NewJobScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const SearchAdd = () => {
  const navigation = useNavigation<NewJobScreenProps>();
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
      <LinearGradient
        style={{
          borderRadius: 10,
        }}
      >
        <IconButton
          icon={<Icon as={AntDesign} name={"plus"} color="white" size="lg" />}
          size="xs"
          borderRadius={"xl"}
          onPress={() => {
            navigation.navigate("NewJob");
          }}
        />
      </LinearGradient>
      <IconButton
        icon={<Icon as={AntDesign} name={"search1"} color="black" size="xl" />}
      />
    </HStack>
  );
};

export default SearchAdd;
