import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useAnimation, useInView, motion } from 'framer-motion';

const people = [
  {
    name: 'Kirti Kamal',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Kirti Kamal is a tech enthusiast and visionary community leader pursuing a Bachelor of Technology in Computer Science and Engineering. As a Beta Microsoft Learn Student Ambassador, Kirti helps fellow students learn new technologies and develop their career skills for the future. Kirti also leads and organizes engaging workshops, events, and hackathons for the tech community. Kirti strives to inspire others to explore, innovate, and excel in the ever-evolving realm of technology, by blending leadership skills, collaboration, and creativity.',
    social: {
      twitter: 'https://twitter.com/kirtikamal12',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'

    },
  },
  {
    name: 'Anshuman Njs',
    imageUrl: 'https://avatars.githubusercontent.com/u/90966147?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Anshuman is a versatile professional with expertise in web development, specializing as a React developer and Web 3 developer. An AI enthusiast at heart, he combines his passion for artificial intelligence with his web development skills to create innovative and intelligent web solutions. Anshumans dedication to staying at the forefront of technology ensures he delivers cutting-edge digital experiences that leverage the power of AI and the latest web technologies.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Aditya Majhi',
    imageUrl: 'https://avatars.githubusercontent.com/u/87221497?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Aditya is a seasoned professional in the world of web development, specializing in Web 3 technologies. With a strong focus on frontend development, Aditya crafts user-centric, responsive, and visually captivating web interfaces. His mastery of Web 3 ensures adityas at the forefront of decentralized applications and blockchain integration, offering a holistic approach to creating modern and immersive digital experiences.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/aditya-majhi'
    },
  },
  {
    name: 'Barada Laxmi',
    imageUrl: 'https://avatars.githubusercontent.com/u/142567052?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Barada Laxmi Biswal is a freelance content writer with expertise in SEO optimization, digital marketing, web content creation, WordPress, and technical blogging. She is also passionate about web development and cybersecurity. Laxmi is committed to continuous learning and skill improvement. Beyond work, she is a sketch enthusiast and an avid reader. Feel free to reach out if you ever want to chat about digital marketing strategies, content creation, or just have a friendly conversation about your favorite F.R.I.E.N.D.S episodes!',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/LaxmiBarada'
    },
  },
  {
    name: 'Kalyan Mohapatra',
    imageUrl: 'https://avatars.githubusercontent.com/u/142584768?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Kalyan Mohapatra is a creative powerhouse, adept in UI/UX design, graphic design, and web development. Operating as a versatile freelancer, he delivers captivating digital solutions that merge artistic finesse with technical acumen. Kalyans expertise transforms concepts into tangible, user-friendly interfaces, eye-catching visuals  and responsive websites. With a commitment to enhancing digital experiences, he collaborates with clients globally, leaving an indelible mark on the ever-evolving landscape of design and web development.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Priyanshu Rout',
    imageUrl: 'https://avatars.githubusercontent.com/u/143950409?s=400&u=78b90e387298db176fee5467568af3be46bf0593&v=4',
    // role: 'Co-Founder / CEO',
    about: 'Priyanshu Rout is a dedicated tech enthusiast and visionary community leader who is currently pursuing a Bachelor of Technology in Computer Science and Engineering. He is committed to assisting fellow students in acquiring knowledge about emerging technologies and enhancing their career prospects for the future. Furthermore, Priyanshu takes on the responsibility of spearheading and coordinating impactful workshops, events, and hackathons to foster growth and innovation within the tech community.',
    social: {
      twitter: 'https://twitter.com/priyanshurout54',
      linkedin: 'https://www.linkedin.com/in/priyanshu-rout-643452259/',
      github: 'https://github.com/priyanshurout'
    },
  },
  {
    name: 'Soumya Ranjan',
    imageUrl: 'https://avatars.githubusercontent.com/u/123158751?v=4',
    // role: 'Co-Founder / CEO',
    about: 'I am Soumya, currently pursuing my degree in electronics and telecommunications engineering. With a passion for technology, I have gained proficiency in JAVA programming, mastering relational database management systems, and honing my skills in UI design. I am excited to continue my journey in this dynamic field, eager to explore new horizons and contribute to the ever-evolving world of technology.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Debadatta Pradhan',
    imageUrl: 'https://avatars.githubusercontent.com/u/142510886?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Debadatta Pradhan, a fervent tech enthusiast, embarks on a ceaseless learning odyssey. Proficient in diverse coding languages, he thrives in the dynamic tech universe. His rapid learning aptitude aligns seamlessly with his gift for imparting knowledge. Debadattas passions extend across frontend web and Android development, where he tirelessly explores uncharted territories.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },

  
  // Add more people...
];

export default function Team() {

  const ref = useRef(null) ;
  const isInView = useInView(ref, { amount: 0.2, once:true }) ;
  const animateH2 = useAnimation() ;
  const animateP = useAnimation() ;
  const animateCard = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateH2.start({
        x: 0,
        transition: {
          duration: 0.4
        }
      })
      animateP.start({
        x: 0,
        transition: {
          duration: 0.6
        }
      })
      animateCard.start({
        opacity: 1,
        transition: {
          duration: 0.7
        }
      })
    }
    if(!isInView){
      animateH2.start({
        x: '-100vw'
      })
      animateP.start({
        x: '-100vw'
      })
      animateCard.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black sm:py-5" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='text-center'>
        <motion.span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text sm:text-6xl" animate={animateH2}>Meet Our Team</motion.span>
        </div>
        <motion.p className="text-lg text-gray-600">
        Get acquainted with the individuals behind Decode Devs! Each of us brings a distinct perspective that fuels our collective determination to create an impact. Uncover the minds propelling innovation and collaboration.
        </motion.p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {people.map((person) => (
            <div key={person.name} className="bg-gradient-to-r from-cyan-900 to-cyan-500 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img className="h-16 w-16 rounded-full mr-4" src={person.imageUrl} alt={person.name} />
                <div>
                  <h3 className="text-base font-semibold text-black">{person.name}</h3>
                  <p className="text-sm text-indigo-600">{person.role}</p>
                </div>
              </div>
              <p className="text-sm text-black">
                {person.about}
              </p>
              <div className="flex mt-4">
                <a href={person.social.twitter} className="mr-2 text-black hover:text-blue-500">
                  <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                </a>
                <a href={person.social.linkedin} className="mr-2 text-black hover:text-blue-800">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                </a>
                <a href={person.social.github} className="text-black hover:text-slate-700">
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
