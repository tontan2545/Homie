import { JobType } from "@customTypes/JobTypes";

export const JOB_TYPE_ACTION: Record<
  JobType,
  {
    imageUrl?: string;
    name: string;
  }[]
> = {
  CEILING: [
    {
      name: "เสียจากน้ำ",
    },
  ],
  FLOOR: [
    {
      name: "ปูใหม่",
    },
    {
      name: "รื้อ",
    },
  ],
  PAINT: [
    {
      name: "ทาสี",
    },
  ],
  ROOF: [
    {
      name: "หลังคารั่ว",
    },
    {
      name: "เปลี่ยนหลังคาใหม่",
    },
    {
      name: "ปูฉนวน",
    },
  ],
  WALL: [
    {
      name: "สกัด + รอยแตก",
    },
  ],
  WATER: [
    {
      name: "ท่อตัน",
    },
    {
      name: "ท่อแตก",
    },
  ],
};
