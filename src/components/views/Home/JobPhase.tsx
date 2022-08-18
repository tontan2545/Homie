import React from "react";
import { Box, FlatList, VStack } from "native-base";
import Phase from "@customTypes/Phase";
import PhaseTitle from "./PhaseTitle";
import JobCard from "./JobCard";
import { MOCK_JOBS } from "mocks/jobs";

type Props = {
  phase: Phase;
};

const JobPhase = ({ phase }: Props) => {
  const phaseJobs = MOCK_JOBS.filter((job) => job.phase === phase);
  return (
    <VStack space={1}>
      <PhaseTitle phase={phase} />
      <VStack space={3}>
        <FlatList
          data={phaseJobs}
          renderItem={(job) => <JobCard {...job.item} />}
          ItemSeparatorComponent={() => <Box style={{ height: 15 }} />}
        />
      </VStack>
    </VStack>
  );
};

export default JobPhase;
