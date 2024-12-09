import Title from "./Title";
// import ProjectsCard from "./ProjectsCard";
// import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

       {/* INFORMATION ABOUT THE DIFFERENT MISSIONS BELOW */}
       const missions = [
        {
          image: '/src/assets/images/projects/projectOne.jpg',
          title: 'Mission to Vientiane',
          description: 'Our team conducted 50 successful cleft lip and palate surgeries in the capital city of Laos, bringing smiles to many families.',
          date: 'Feburary 2023'
        },
        {
          image: '/src/assets/images/projects/projectTwo.jpg',
          title: 'Outreach in Luang Prabang',
          description: 'We partnered with local hospitals to provide surgeries and training, expanding our reach to this northern province.',
          date: 'November 2023'
        },
        {
          image: '/src/assets/images/projects/projectThree.jpg',
          title: 'Southern Laos Initiative',
          description: 'Our most recent mission focused on the underserved communities in the southern regions, providing both surgical and dental care.',
          date: 'April 2024'
        }
      ]
        {/* INFORMATION ABOUT THE DIFFERENT MISSIONS ABOVE */}


        




const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>




        <div className="flex justify-center items-center text-center">
          <Title
            title="What we do"
            des="Missions"
          />
        </div>


{/* COPY PASTED CODE HERE */}
        <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Past Medical Missions</h2>
        <div className="space-y-16">
          {missions.map((mission, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                
              <img src={mission.image} alt={mission.title} className="mission-image" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">{mission.title}</h3>
                <p className="text-gray-600 mb-4">{mission.description}</p>
                <p className="text-sm text-gray-500">{mission.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </div> */}



      </FadeIn>
    </section>
  );
};

export default Projects;
