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
  | "iron"
  | "drawer"
  | "shrink"
  | "baby"
  | "grave"
  | "box"
  | "docs";
