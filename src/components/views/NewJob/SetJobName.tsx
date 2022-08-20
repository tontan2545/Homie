import { Box, Button, Center, Input, VStack } from "native-base";

import React from "react";
import { Text } from "@components/common";
import { useNewJobStore } from "@hooks/useNewJobStore";
import { useNewStep } from "@hooks/useNewStep";

const SetJobName = () => {
  const handleValueChange = (text: string) => setTitle(text);
  const { title, setTitle } = useNewJobStore();
  const newStep = useNewStep();

  const handleButtonChange = () => {
    newStep();
  };
  return (
    <Center>
      <VStack
        space={7}
        width="100%"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          style={{
            fontFamily: "Kanit-Light",
            fontSize: 25,
          }}
        >
          ตั้งชื่องานของคุณ
        </Text>
        <Input
          marginX={20}
          size="xl"
          placeholder="ชื่องาน"
          textAlign="center"
          value={title}
          onChangeText={handleValueChange}
          _focus={{
            backgroundColor: "transparent",
            borderColor: "#F87BB6",
            placeholderTextColor: "#ffa5cf",
          }}
        />
        {title && title.length > 0 && (
          <Button
            variant="solid"
            _text={{
              color: "white",
              fontFamily: "Kanit-Medium",
              paddingX: 5,
            }}
            borderRadius={7}
            backgroundColor="#ff70b3"
            onPress={handleButtonChange}
          >
            ต่อไป
          </Button>
        )}
      </VStack>
    </Center>
  );
};

export default SetJobName;
