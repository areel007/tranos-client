export interface ICaseStudy {
  category: string;
  imageUrl: string;
  project: string;
  solutionsProvided: string;
  title: string;
  _id: string;
}

export interface ICaseStudies {
  caseStudies: ICaseStudy[];
}

export interface InewsAndInsights {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  blogImage: string;
  createdAt: Date;
}

export type TTitle = {
  title: string;
};

export type TPartner = {
  _id: string;
  partner: string;
};

export type TAtexPowerPanels = {
  _id: string;
  title: string;
  features: string;
  atexPowerPanelsImage: string;
};
