import { useNewJobStore } from "./useNewJobStore";

export const useNewStep = () => {
  const { step, setVisitedStep, setStep } = useNewJobStore();
  return () => {
    setStep(step + 1);
    setVisitedStep(step + 1);
  };
};
