// Sections.js
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';

export default [
  {
    id: 'introduction',
    title: 'Introduction',
    content: <Intro />
  },
  {
    id: 'experience',
    title: 'Experience',
    content: <Experience />
  },
  {
    id: 'projects',
    title: 'Projects',
    content: <Projects />
  },
  {
    id: 'skills',
    title: 'Skills',
    content: null // Skills will be rendered dynamically in MainContent with props
  },
    {
    id: 'education',
    title: 'Education',
    content: <Education />
  },
  {
    id: 'Contact',
    title: 'Contact',
    content: <Contact />
  },
   {
    id: 'resume',
    title: 'Resume',
    content: <Resume />
  }
];
