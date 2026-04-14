import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools3 from "/assets/tools/mongodb.jpg";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/golang.jpg";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/python.png";
import Tools17 from "/assets/tools/postg.jpg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "MongoDB",
    ket: "Database",
    dad: "300",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Golang",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
    {
    id: 16,
    gambar: Tools16,
    nama: "PYTHON",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PostgreSQL",
    ket: "Language",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";
import Proyek7 from "/assets/proyek/proyek7.jpeg";
import Proyek8 from "/assets/proyek/proyek8.png";
export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "PetNest App",
    subtitle: "A mobile application design for pet boarding and pet supplies shopping. Created using Figma,...",
    fullDescription:"A mobile application design for pet boarding and pet supplies shopping. Created using Figma, focusing on user-friendly navigation, clean visuals, and seamless pet care booking experience.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.figma.com/proto/Ey5HuBh9mcxOfqZcxOlFCg/PETNEST?node-id=116-2833&p=f&t=f71lDyKb54hQQwBu-0&scaling=scale-down&content-scaling=fixed&page-id=116%3A690",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "suweger-brand-website",
    subtitle: "A creative beverage brand website combining modern web design and interactive user experience...",
    fullDescription:"A creative beverage brand website combining modern web design and interactive user experience. Built using HTML, CSS, JavaScript, and Figma to promote Suweger’s products attractively.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://suweger-brand-website.vercel.app/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "DigiPage App",
    subtitle: "A digital book reading mobile application built with Flutter. It allows users to explore, read, and...",
    fullDescription:"A digital book reading mobile application built with Flutter. It allows users to explore, read, and manage their favorite e-books anytime and anywhere.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Sermul/mobiledigipage",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Fashlook Web",
    subtitle: "A fashion inspiration website built using HTML, CSS, and JavaScript. It helps users find their...",
    fullDescription:"A fashion inspiration website built using HTML, CSS, and JavaScript. It helps users find their signature style and explore the latest fashion trends easily.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sermul/fashlook",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "QalbuMuslim Web",
    subtitle: "A religious web platform designed to provide access to the Quran, Hadith, prayers, and Islamic articles. Developed...",
    fullDescription:"A religious web platform designed to provide access to the Quran, Hadith, prayers, and Islamic articles. Developed with a modern and calm interface using HTML, CSS, JavaScript, and Figma.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Sermul/alquran",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Academic Achievement Reporting System – REST API",
    subtitle: "A secure role-based backend API for managing student achievements, verification workflows...",
    fullDescription:"A secure role-based backend API for managing student achievements, verification workflows, and academic reporting.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sermul/Prestasi_API",
    dad: "600",
  },
  {
  id: 7,
  image: Proyek7,
  title: "VenKampus",
  subtitle: "Helping campus teams find the right vendors for their events",
  fullDescription: "VenKampus is a web app I’m currently building to make it easier for students and campus organizations to connect with vendors for events. Instead of searching manually, users can explore different options like food, merchandise, and documentation in one place. For now, I’m focusing on crafting a clean and responsive frontend experience while gradually adding more features.",
  borderColor: "#F59E0B",
  gradient: "linear-gradient(180deg, #F59E0B, #000)",
  url: "https://github.com/Sermul/web-vendordanusan",
  dad: "2026"
},
 {
  id: 8,
  image: Proyek8,
  title: "Gymloc",
  subtitle: "Helping people find the right gyms nearby with recommendations based on location, price, and facilities",
  fullDescription: "GYMLOC is a web app I’m currently building to help users easily find gyms around them. Instead of searching manually, users can explore different gym options based on location, price, and available facilities in one place. For now, I’m focusing on creating a clean and responsive frontend while gradually adding more features like filtering and recommendations to enhance the user experience.",
  borderColor: "#5aadbc",
  gradient: "linear-gradient(180deg, #3c69c4, #000)",
  url: "https://github.com/masterlearn22/GYMLOC.Reservavation_Gym",
  dad: "2026"
}

];
