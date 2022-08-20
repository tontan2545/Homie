import { Box, Card, Center, FlatList, Select, VStack } from "native-base";
import React, { useState } from "react";

import { JOB_TYPE_ACTION } from "mocks/job_type_action";
import { JobType } from "@customTypes/JobTypes";
import { Text } from "react-native";
import { jobTypeList } from "src/constants/jobTypeList";

const SelectJobType = () => {
  const [selectedJobType, setSelectedJobType] = useState<JobType>();
  return (
    <Center>
      <VStack space={5} alignItems="center">
        <Text
          style={{
            fontFamily: "Kanit-Light",
            fontSize: 25,
          }}
        >
          เลือกชนิดงานของคุณ
        </Text>
        <Select
          placeholder="เลือกตามชนิกงานที่คุณต้องการ"
          size="16"
          minW={300}
          textAlign="center"
          selectedValue={selectedJobType}
          onValueChange={(value) => setSelectedJobType(value as JobType)}
        >
          {Object.keys(jobTypeList).map((type) => (
            <Select.Item
              key={type}
              label={type}
              value={jobTypeList[type]}
              textAlign="center"
            />
          ))}
        </Select>

        {selectedJobType &&
          JOB_TYPE_ACTION[selectedJobType].map((action) => (
            <Card width={300} backgroundColor={"#FCFCFC"}>
              {action.name}
            </Card>
          ))}
      </VStack>
    </Center>
  );
};

export default SelectJobType;
