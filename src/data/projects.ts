export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Jadwal Sholat PDF",
    category: "Development",
    imageUrl: "https://jadwal-sholat-pdf.netlify.app/Mosque.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Jadwal Sholat is a project that provide a simple way to get the praying time and template to print out.",
    tags: ["React", "Tailwind CSS", "E-commerce"]
  },
  {
    id: 3,
    title: "JEC Jersey Design",
    category: "Design",
    imageUrl: "Jersey JEC.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Complete visual identity design for a modern tech company, including logo, style guide, and marketing materials.",
    tags: ["Design", "Identity", "Design System"]
  },
  {
    id: 5,
    title: "JEC Logo",
    category: "Design",
    imageUrl: "JEC_logo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Jannissary Equine Center Logo",
    tags: ["Design", "Identity", "Logo"]
  },
  {
    id: 4,
    title: "Ikhwan Butcher Shop",
    category: "Development",
    imageUrl: "Butcher.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "A simple website for a butcher shop with a checkout system through WhatsApp.",
    tags: ["React", "Tailwind CSS", "E-commerce"]
  },
];

export const categories = [
  "All",
  "Development",
  "UI/UX Design",
  "Design"
];