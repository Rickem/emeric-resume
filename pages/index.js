import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import LatestCode from '../components/LatestCode';
import Layout from '../layout/layout';
import About from '../components/About';

export default function Home() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/json/resume.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
      console.log(resumeData)
  }, []);

  return (
    <Layout 
      title="Emeric Gnonhoue - Front-end Developer"
      description="My awesome portfolio">
        <Banner />
        <About />
        <Projects />
        <LatestCode />
    </Layout>
  )
}
