import create from "zustand";

type NewJobState = {
  step: number;
  visitedStep: number;
  title?: string;
  totalPrice?: number;
  jobType?: string;
  workerIds?: string[];
  startDate?: Date;
  endDate?: Date;
  costBreakdown?: Record<string, number>;
  setStep: (step: number) => void;
  setTitle: (title: string) => void;
  setTotalPrice: (totalPrice: number) => void;
  setJobType: (jobType: string) => void;
  setWorkerIds: (workerIds: string[]) => void;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  setCostBreakdown: (costBreakdown: Record<string, number>) => void;
  setVisitedStep: (visitedStep: number) => void;
};

export const useNewJobStore = create<NewJobState>((set) => ({
  step: 0,
  visitedStep: 0,
  setStep: (step) => {
    set((state) => ({ ...state, step }));
  },
  setVisitedStep: (visitedStep) => {
    set(({ step, ...state }) => ({
      ...state,
      visitedStep: Math.max(visitedStep, step),
    }));
  },
  setTitle: (title) => set((state) => ({ ...state, title })),
  setTotalPrice: (totalPrice) => set((state) => ({ ...state, totalPrice })),
  setJobType: (jobType) => set((state) => ({ ...state, jobType })),
  setWorkerIds: (workerIds) => set((state) => ({ ...state, workerIds })),
  setStartDate: (startDate) => set((state) => ({ ...state, startDate })),
  setEndDate: (endDate) => set((state) => ({ ...state, endDate })),
  setCostBreakdown: (costBreakdown) =>
    set((state) => ({ ...state, costBreakdown })),
}));
