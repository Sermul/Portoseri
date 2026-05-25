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
import Tools18 from "/assets/tools/php.jpg";
import Tools19 from "/assets/tools/laravel.png";

import Tools20 from "/assets/tools/drawio.png";
import Tools21 from "/assets/tools/powerdesigner.png";
import Tools22 from "/assets/tools/odoo.jpg";
import Tools23 from "/assets/tools/staruml.png";
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
    id: 20,
    gambar: Tools20,
    nama: "draw.io",
    ket: "Diagramming Tool",
    dad: "2200",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "PowerDesigner",
    ket: "Data Modeling",
    dad: "2300",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "Odoo",
    ket: "ERP Platform",
    dad: "2400",
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
  {
    id: 18,
    gambar: Tools18,
    nama: "PHP",
    ket: "Language",
    dad: "2000",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Laravel",
    ket: "Framework",
    dad: "2100",
  },
    {
    id: 23,
    gambar: Tools23,
    nama: "StarUML",
    ket: "Diagramming Tool",
    dad: "2300",
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
import Proyek9 from "/assets/proyek/proyek9.png";
import Proyek10 from "/assets/proyek/proyek10.png";
import Proyek11 from "/assets/proyek/proyek11.png";
export const listProyek = [
 
 
 {
  id: 1,
  image: Proyek10,
  title: "SEWEGER",
  subtitle: "UI/UX design for a modern beverage brand website with a clean and aesthetic interface",
  fullDescription: "SEWEGER is a beverage brand website design that I created with a modern and minimalist UI/UX approach. The website is designed to showcase drink products in a visually appealing way while maintaining a clean and easy-to-navigate user experience. I focused on creating responsive layouts, elegant visual compositions, and smooth user interaction to strengthen the brand identity and provide a comfortable browsing experience for users.",
  borderColor: "#8b7b5e",
  gradient: "linear-gradient(180deg, #c2a97d, #000)",
  url: "https://www.figma.com/proto/l4gSYs2wTCoRwOl2YLi8KX/Suweger2?node-id=2008-662&p=f&t=uEmSXlucmv16saB4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2008%3A662",
  date: "2026"
},
 {
    id: 2,
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
    id: 3,
    image: Proyek7,
    title: "VenKampus",
    subtitle: "Helping campus teams find the right vendors for their events",
    fullDescription: "VenKampus is a web app I’m currently building to make it easier for students and campus organizations to connect with vendors for events. Instead of searching manually, users can explore different options like food, merchandise, and documentation in one place. For now, I’m focusing on crafting a clean and responsive frontend experience while gradually adding more features.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(180deg, #F59E0B, #000)",
    url: "https://web-vendordanusan-ogor.vercel.app/",
    dad: "2026"
  },
    {
    id: 4,
    image: Proyek8,
    title: "Gymloc",
    subtitle: "Helping people find the right gyms nearby with recommendations based on location, price, and facilities",
    fullDescription: "GYMLOC is a web app I’m currently building to help users easily find gyms around them. Instead of searching manually, users can explore different gym options based on location, price, and available facilities in one place. For now, I’m focusing on creating a clean and responsive frontend while gradually adding more features like filtering and recommendations to enhance the user experience.",
    borderColor: "#5aadbc",
    gradient: "linear-gradient(180deg, #3c69c4, #000)",
    url: "https://github.com/masterlearn22/GYMLOC.Reservavation_Gym",
    dad: "2026"
  },
  {
  id: 5,
  image: Proyek11,
  title: "Customer Journey Map Analysis",
  subtitle: "UX research project focused on improving the usability and user experience of a school website.",
  fullDescription:
    "This project was created to analyze the user experience when searching for school information through a website. I developed a customer journey map to better understand user needs, identify the problems they encounter, and explore ways to improve the comfort, accessibility, and overall usability of the website.",
  borderColor: "#c98b4d",
  gradient: "linear-gradient(180deg, #e8b16a, #000)",
  url: "https://www.figma.com/",
  date: "2026"
},
  {
    id: 7,
    image: Proyek3,
    title: "DigiPage App",
    subtitle: "A digital book reading mobile application built with Flutter. It allows users to explore, read, and...",
    fullDescription:"A digital book reading mobile application built with Flutter. It allows users to explore, read, and manage their favorite e-books anytime and anywhere.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://fashlook.vercel.app/",
    dad: "300",
  },
  {
    id: 8,
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
    id: 6,
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
  id: 9,
  image: Proyek9,
  title: "Clean Wash",
  subtitle: "UI/UX design for a modern laundry service application with a clean and user-friendly interface",
  fullDescription: "Clean Wash is a mobile laundry service application design that I created focusing on a clean, simple, and modern user experience. The design helps users easily access laundry services such as clothing, shoes, and curtain cleaning through an intuitive interface. I designed the layout, navigation, icons, and visual elements to create a comfortable and user-friendly mobile experience while maintaining a fresh and hygienic brand identity.",
  borderColor: "#5aadbc",
  gradient: "linear-gradient(180deg, #6ea8ff, #000)",
  url: "https://www.figma.com/proto/ywGO9R2mSVLZ1gM5ahBZKm/Untitled?node-id=1-427&t=NmxkXbgO5BfwLZ7r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A427",
  dad: "2026"
}



];
