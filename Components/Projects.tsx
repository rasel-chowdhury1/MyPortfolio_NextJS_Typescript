import { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  des: string;
  img: string;
  liveLink: string;
  githubLink: string;
}
import Image from 'next/image';
import ProjectCard from './ProjectCard';


const Projects = () => {
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://my-project-backend-sigma.vercel.app/api/projects'); // Replace with your API endpoint
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log({projects})
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] ' id='projects'>
            <h1 className='heading'>Pro<span className='text-yellow-400'>ject</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
               {
                projects.map((pro) => <ProjectCard key={pro._id} data={pro} />)
               }

            </div>
        </div>
    );
};

export default Projects;