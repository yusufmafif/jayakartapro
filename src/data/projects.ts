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
    description: "A clean and minimal e-commerce website design focused on user experience and conversion optimization.",
    tags: ["React", "Tailwind CSS", "E-commerce"]
  },
  {
    id: 3,
    title: "Modern Brand Identity",
    category: "Design",
    imageUrl: "Jersey JEC.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Complete visual identity design for a modern tech company, including logo, style guide, and marketing materials.",
    tags: ["Design", "Identity", "Design System"]
  },
  {
    id: 4,
    title: "Travel Blog Platform",
    category: "Development",
    imageUrl: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "A responsive blog platform for travel enthusiasts with content management system and social sharing features.",
    tags: ["Development", "CMS", "Responsive"]
  },
];

export const categories = [
  "All",
  "Development",
  "UI/UX Design",
  "Design"
];