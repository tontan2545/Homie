import { Text } from "react-native";
import React from "react";
import { VStack } from "native-base";

type Props = {};

const JobPhase = (props: Props) => {
  return (
    <VStack>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "400",
        }}
      >
        ✏️ ร่าง
      </Text>
    </VStack>
  );
};

export default JobPhase;
