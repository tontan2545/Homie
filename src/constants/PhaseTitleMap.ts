import Phase from "@customTypes/Phase";

const PhaseTitleMap: Record<
  Phase,
  {
    title: string;
    emoji: string;
  }
> = {
  ONGOING: {
    title: "ดำเนินการ",
    emoji: "🔧",
  },
  DRAFT: {
    title: "ร่าง",
    emoji: "📝",
  },
  COMPLETED: {
    title: "เสร็จสิ้น",
    emoji: "🎉",
  },
};

export default PhaseTitleMap;
