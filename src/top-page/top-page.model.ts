export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface HhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}
export interface TopPageAdvantage {
  title: string;
  description: string;
}

export class TopPageModel {
  firstLevelCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: HhData;
  advantages: TopPageAdvantage[];
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  _id: string;
  tags: string[];
}
