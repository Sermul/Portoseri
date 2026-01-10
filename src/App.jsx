import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);
// ✅ Tambahkan ini di bawahnya
  useEffect(() => {
    const container = document.getElementById("scrollContainer");
    const leftBtn = document.getElementById("scrollLeft");
    const rightBtn = document.getElementById("scrollRight");

    if (leftBtn && rightBtn && container) {
      leftBtn.onclick = () => container.scrollBy({ left: -400, behavior: "smooth" });
      rightBtn.onclick = () => container.scrollBy({ left: 400, behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/seri2.png" className="w-10 rounded-md" />
              <q>Don’t run from challenges — face them and grow through them</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Seri Muliani Lubis" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Designing and developing real-world web projects, including UI/UX design, frontend web development, and REST API integration.."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV_SERI.pdf" 
                download="Seri_Muliani_Lubis_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Seri Muliani Lubis"
              title="Web Developer"
              handle="serimuliani"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/seri2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="w-full">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-center">
  About Me
</h2>


                <BlurText
                  text="Hello! I'm Seri Muliani Lubis, a Junior Full Stack Developer with experience in building REST API using Go and developing web frontends using HTML, CSS, and JavaScript. I have a solid understanding of UI/UX principles for designing responsive and user-friendly interfaces, and I am capable of translating designs into functional web applications.I am enthusiastic about learning new technologies and continuously growing in the field of web development."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300 text-justify"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                   
                    
                    
                  </div>
                </div>


                <ShinyText
               
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            {/* <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div> */}
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">A selection of projects that highlight skills, creativity, and passion in building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}
{/* Pengalaman Organisasi */}
<div
  className="organisasi mt-32 py-10 relative"
  id="organization"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-once="true"
>
  <h1 className="text-center text-4xl font-bold mb-2">Organizational Experience</h1>
  <p className="text-base/loose text-center opacity-50 mb-10">
    Some of my memorable moments and teamwork experiences in organizations.
  </p>

  {/* Tombol panah kiri-kanan */}
  <button
    id="scrollLeft"
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-violet-600/50 hover:bg-violet-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
  >
    ‹
  </button>
  <button
    id="scrollRight"
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-violet-600/50 hover:bg-violet-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
  >
    ›
  </button>

  {/* Scrollable Photo Section */}
  <div
    id="scrollContainer"
    className="flex gap-10 overflow-x-hidden scroll-smooth px-16"
  >
    {[
      { src: "./assets/org1.jpg", title: "Organization of Informatics Engineering Students, Universitas Airlangga", desc: "Member of the Talent and Interests Section." },
      { src: "./assets/org2.jpg", title: "Design TeaIKAMABA – The Dance Talent Section", desc: "Member of the Dance Talent Section." },
      { src: "./assets/org3.jpg", title: "IKAMABA – Arts and Sports Division", desc: "Member of the Arts and Sports Division." },
      { src: "./assets/org4.jpg", title: "Universitas Airlangga Softball Team – Player", desc: "Active player of the university softball team." },
    ].map((org, index) => (
      <div
        key={index}
        className="relative flex-shrink-0 w-[400px] h-[260px] rounded-3xl overflow-hidden border border-violet-500/40 bg-zinc-900 shadow-lg transform transition-all duration-500 hover:scale-[1.07] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] group cursor-pointer"
      >
        <img
          src={org.src}
          alt={`Organization ${index + 1}`}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-500"
        />
        <div className="absolute bottom-0 w-full p-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-violet-400 font-semibold text-base">{org.title}</h3>
          <p className="text-gray-300 text-sm">{org.desc}</p>
        </div>
      </div>
      
    ))}
    
  </div>
</div>

        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
