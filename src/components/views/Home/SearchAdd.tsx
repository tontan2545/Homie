import React from "react";
import { HStack, Icon } from "native-base";
import { IconButton, LinearGradient } from "@components/common";
import { AntDesign } from "@expo/vector-icons";

const SearchAdd = () => {
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
        />
      </LinearGradient>
      <IconButton
        icon={<Icon as={AntDesign} name={"search1"} color="black" size="xl" />}
      />
    </HStack>
  );
};

export default SearchAdd;
