import { Job } from "@customTypes/Job";

export const MOCK_JOBS: Job[] = [
  {
    phase: "ONGOING",
    title: "ซ่อมกระเบื้อง",
    totalPrice: 19000,
    percentage: 50,
  },
  {
    phase: "ONGOING",
    title: "ซ่อมห้องน้ำ",
    totalPrice: 10000,
    percentage: 10,
  },
  {
    phase: "DRAFT",
  },
  {
    phase: "COMPLETED",
    title: "รื้อกระเบื้อง",
    totalPrice: 1500,
    percentage: 1,
  },
];
