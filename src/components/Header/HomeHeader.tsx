import { HStack, Icon } from "native-base";
import { IconButton } from "@components/common";
import React from "react";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={3}
      paddingY={1}
    >
      <IconButton
        icon={<Icon as={Ionicons} name="filter" color="black" size="xl" />}
      />

      <HStack>
        <IconButton
          icon={
            <Icon as={AntDesign} name="shoppingcart" color="black" size="xl" />
          }
        />
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="chatbubble-outline"
              color="black"
              size="xl"
            />
          }
        />
        <IconButton
          icon={
            <Icon as={FontAwesome} name="user-circle" color="black" size="xl" />
          }
        />
      </HStack>
    </HStack>
  );
};

export default HomeHeader;
