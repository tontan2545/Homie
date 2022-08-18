import { JobDetails } from "./JobDetails";
import Phase from "./Phase";

export type Job = JobDetails & {
  phase: Phase;
};
