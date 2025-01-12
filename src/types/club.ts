export interface Club {
  id: number;
  name: string;
  category: string;
  tag: string;
  recruitStatus: string;
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
  formUrl: string;
  instagram: string;
}

export type DeptCaptionColor = {
  [name: string]: string;
};
