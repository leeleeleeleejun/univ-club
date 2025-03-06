import { z } from 'zod';

export const clubCreateSchema = z.object({
  name: z.string().nonempty('동아리 이름을 입력해주세요.'),
  category: z.string(),
  tag: z.string().nonempty('태그를 입력해주세요.'),
  campus: z.string(),
  recruitmentPeriod: z.string(),
  introduction: z.string().nonempty('동아리 소개를 입력해주세요.'),
  membershipMethod: z.string(),
  instagram: z.string(),
  recruitmentUrl: z.string(),
  contact: z.string(),
  youtubeUrl: z.string(),
  homepageUrl: z.string(),
});

export type ClubCreateForm = z.infer<typeof clubCreateSchema>;
