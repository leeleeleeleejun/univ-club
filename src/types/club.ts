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
  contact: string;
  membershipMethod: string;
  instagram: string;
  youtubeUrl: string;
  homepageUrl: string;
}

export type ClubDetail = ClubInfo &
  ClubFeed & { id: string; recruitmentUrl: string };

export type ClubDetailKey = keyof ClubDetail;

export type DeptCaptionColor = {
  [name: string]: string;
};

export interface Filters {
  category: string[];
  campus: string;
  tag: string[];
}

export type FilterType = keyof Filters;
