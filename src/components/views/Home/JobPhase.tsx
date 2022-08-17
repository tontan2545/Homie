import { Text } from "@components/common";
import React from "react";
import { Card, HStack, Icon, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { Bar } from "react-native-progress";
import Phase from "@customTypes/Phase";
import PhaseTitle from "./PhaseTitle";

type Props = {
  phase: Phase;
};

const JobPhase = ({ phase }: Props) => {
  return (
    <VStack space={1}>
      <PhaseTitle phase={phase} />
      <Card
        backgroundColor={"#FCFCFC"}
        borderColor={"#CFCFCF"}
        borderStyle="solid"
        borderWidth={1}
        borderRadius={10}
      >
        <HStack justifyContent={"space-between"} alignItems="center">
          <Text style={{ fontSize: 20, fontFamily: "Kanit-Light" }}>
            งานไม่มีชื่อ
          </Text>
          <Icon as={Entypo} name="circle" color="black" />
        </HStack>
        {phase === "ONGOING" && (
          <HStack alignItems={"center"} space={2}>
            <Bar color="black" progress={0.2} />
            <Text>20%</Text>
          </HStack>
        )}

        <Text style={{ fontSize: 30, fontFamily: "Kanit-Medium" }}>
          ฿ 19,000
        </Text>
      </Card>
    </VStack>
  );
};

export default JobPhase;
