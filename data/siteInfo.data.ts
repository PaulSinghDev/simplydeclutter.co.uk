import { SiteInfo } from "types";

const info: SiteInfo = {
  siteName: "Example Website",
  url: process.env.NEXT_PUBLIC_BASE_URL as string,
  favicon: "/favicon.ico",
};

export default info;
