/* eslint-disable no-unused-vars */
export interface FilterProps {
  testId?: string;
  tags: string[];
  setFilter: (tag: string) => void;
  removeFilter: (tag: string) => void;
  filter: string[];
}
