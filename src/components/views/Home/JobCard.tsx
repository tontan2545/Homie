import { Text } from "@components/common";
import { Card, HStack, Icon } from "native-base";
import React from "react";
import { Bar } from "react-native-progress";
import { Entypo } from "@expo/vector-icons";
import formatNumberString from "@utils/formatNumberString";
import { JobDetails } from "@customTypes/JobDetails";

const JobCard = ({ phase, totalPrice, percentage, title }: JobDetails) => {
  return (
    <Card
      backgroundColor={"#FCFCFC"}
      borderColor={"#CFCFCF"}
      borderStyle="solid"
      borderWidth={1}
      borderRadius={10}
    >
      <HStack justifyContent={"space-between"} alignItems="center">
        <Text style={{ fontSize: 20, fontFamily: "Kanit-Light" }}>
          {title ?? "งานไม่มีชื่อ"}
        </Text>
        <Icon as={Entypo} name="circle" color="black" />
      </HStack>
      {phase === "ONGOING" && percentage && (
        <HStack alignItems={"center"} space={2}>
          <Bar color="black" progress={percentage / 100} />
          <Text>{Math.round(percentage)}%</Text>
        </HStack>
      )}

      <Text style={{ fontSize: 30, fontFamily: "Kanit-Medium" }}>
        ฿ {totalPrice ? formatNumberString(totalPrice) : "-"}
      </Text>
    </Card>
  );
};

export default JobCard;
