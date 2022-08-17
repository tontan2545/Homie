import React from "react";
import Phase from "@customTypes/Phase";
import { HStack } from "native-base";
import { Text } from "@components/common";
import PhaseTitleMap from "src/constants/PhaseTitleMap";

type Props = {
  phase: Phase;
};

const PhaseTitle = ({ phase }: Props) => {
  return (
    <HStack space={2.5} alignItems="center">
      <Text style={{ fontSize: 24 }}>{PhaseTitleMap[phase].emoji}</Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Kanit-Light",
          fontWeight: "400",
        }}
      >
        {PhaseTitleMap[phase].title}
      </Text>
    </HStack>
  );
};

export default PhaseTitle;
