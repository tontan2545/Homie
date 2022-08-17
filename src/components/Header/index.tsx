import { HStack, Icon, IconButton } from "native-base";
import React from "react";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const Header = () => {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"} paddingY={1}>
      <IconButton
        icon={<Icon as={MaterialIcons} name="menu" color="black" size="xl" />}
        borderRadius="full"
        _pressed={{
          bg: "gray.600:alpha.10",
        }}
      />

      <HStack>
        <IconButton
          icon={
            <Icon as={AntDesign} name="shoppingcart" color="black" size="xl" />
          }
          borderRadius="full"
          _pressed={{
            bg: "gray.600:alpha.10",
          }}
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
          borderRadius="full"
          _pressed={{
            bg: "gray.600:alpha.10",
          }}
        />
        <IconButton
          icon={
            <Icon as={FontAwesome} name="user-circle" color="black" size="xl" />
          }
          borderRadius="full"
          _pressed={{
            bg: "gray.600:alpha.10",
          }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
