export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applications?: Array<{ name: string, skills: string }>;
}

  