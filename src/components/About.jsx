import '../styles/About.css'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaLaravel 
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiCodeigniter } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';

const About = () => {
  const skills = [
    { Icon: FaHtml5 },
    { Icon: FaCss3Alt },
    { Icon: RiTailwindCssFill },
    { Icon: FaReact },
    { Icon: FaLaravel },
    { Icon: DiCodeigniter },
    { Icon: GrMysql },
    { Icon: BiLogoPostgresql }
  ];

  return (
    <section id='about' className='w-full overflow-hidden'>
      <div className='skills-language'>
      <div className="flex items-center justify-center pb-8">
                <h3 className=" text-[#222831] text-3xl md:text-3xl uppercase mb-2 font-extrabold tracking-tight text-center">
                    Programming Language
                </h3>
            </div>
        <div className='skills-slide-container'>
          <div className='skills-slide'>
            {skills.map(({ Icon }, index) => (
              <Icon 
                key={index} 
                className='skill-icon'
              />
            ))}
            {/* Duplikasi untuk efek sliding kontinyu */}
            {skills.map(({ Icon }, index) => (
              <Icon 
                key={`duplicate-${index}`} 
                className='skill-icon'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
