
export interface NavLinkItem {
  label: string;
  path: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl?: string; 
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string; // Can be HTML string or markdown
  author: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}
    