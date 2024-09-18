import { PatternWithFill } from "@heypano/pupds/dist/components/DrawWithin/patterns/PatternsDefs";

export type PatternWithDetails = PatternWithFill & {
  caption: string;
};
