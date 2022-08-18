import React from "react";
import { VStack } from "native-base";
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
        {phaseJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </VStack>
    </VStack>
  );
};

export default JobPhase;
