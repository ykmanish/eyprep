import { PART_1, PART_2 } from "./partsFoundations";
import { PART_3 } from "./partsTechRisk";
import { PART_4 } from "./partsCyber";
import { PART_5 } from "./partsTechnical";
import { PART_6, PART_7, PART_9 } from "./partsSkills";

export const PARTS = [PART_1, PART_2, PART_3, PART_4, PART_5, PART_6, PART_7, PART_9];

export const ALL_SECTIONS = PARTS.flatMap((p) =>
  p.sections.map((s) => ({ ...s, partId: p.id, partTitle: p.title, tone: p.tone, icon: p.icon }))
);

export const TOTAL_SECTIONS = ALL_SECTIONS.length;

export const TOTAL_MINUTES = ALL_SECTIONS.reduce((n, s) => n + (s.minutes || 0), 0);
