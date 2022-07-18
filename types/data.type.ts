export interface SiteInfo {
  favicon: string;
  siteName: string;
  url: string;
}

export interface CompanyInfo {
  businessName: string;
  tagLine: string;
  address: string[];
  phone: string;
  logoPath: string;
  owner: string;
}

export interface PageData {
  title: string;
  description: string;
}

export type ApiError = {
  field: string;
  value: string;
};

export type Data = {
  success: boolean;
  message: string;
  errors?: ApiError[];
};

export interface TestimonialInterface {
  author: string;
  comment: string;
  platform: string;
  url: string;
}

export interface ServiceInterface {
  title: string;
  description: string;
  icon: Icons;
}

export type Icons =
  | "shirt"
  | "sad"
  | "iron"
  | "drawer"
  | "shrink"
  | "baby"
  | "grave"
  | "box"
  | "docs";
