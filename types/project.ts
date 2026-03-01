export type Category = "all" | "resto" | "ai" | "mkt" | "energy" | "ops" | "biz" | "life";

export interface Project {
  id: string;
  category: Category;
  emoji: string;
  name: string;
  description: string;
  targetAudience: string;
  innovationReason: string;
  link: string;
  status: "live" | "demo" | "under-construction";
  videoUrl?: string;
  fullscreen?: boolean;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  emoji: string;
  color: string;
  description?: string;
}
