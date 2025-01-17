export interface Club {
  id: number;
  name: string;
  category: string;
  tag: string;
  campus: string;
}

export interface ClubInfo {
  logoImageUrl: string;
  name: string;
  category: string;
  tag: string;
  campus: string;
}

export interface ClubFeed {
  recruitmentPeriod: string;
  introduction: string;
  membershipMethod: string;
  instagram: string;
}

export type ClubDetail = ClubInfo & ClubFeed & { recruitmentUrl: string };

export type DeptCaptionColor = {
  [name: string]: string;
};

export interface Filters {
  category: string[];
  campus: string;
  tag: string[];
}

export type FilterType = keyof Filters;
