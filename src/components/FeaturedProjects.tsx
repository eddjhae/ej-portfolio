import { forwardRef } from "react";
import ProjectContainer from "./ProjectContainer";

const FeaturedProjects = forwardRef<HTMLElement>((_, ref) => {

  return (
    <section ref={ref} id="projects" className="my-12">
      <div className="flex flex-col justify-between items-center mb-6 lg:flex-row">
        <h1 className="text-[hsl(247,37%,19%)] text-2xl font-bold lg:mb-6 2xl:text-3xl">
          Featured Projects
        </h1>
        <p className="text-lg font-light text-center 2xl:text-xl">' '
          my work is the bridge to various insightful digital experiences.
        </p>
      </div>

      <div className="grid gap-8 md:gap-5 md:grid-cols-2 lg:gap-10">
        <ProjectContainer
          vidSrc="../../assets/puzzle-demo.mp4"
          vidLink="https://react-slide-puzzle.vercel.app/"
          projectName="Puzzle Game"
          projectDetails="React, Typescript, TailwindCSS"
        />
        <ProjectContainer
          vidSrc="../../assets/netflix-clone-demo.mp4"
          vidLink="https://netflix-clone-eta-fawn.vercel.app"
          projectName="Netflix Clone"
          projectDetails="Next.js, Firebase, Typescript, TailwindCSS"
        />
        <ProjectContainer
          vidSrc="../../assets/zyamura-inventory-demo.mp4"
          vidLink="https://zyamura-inventory-sales.vercel.app"
          projectName="Zyamura Inventory Management System"
          projectDetails="Next.js, Firebase, Typescript, TailwindCSS"
        />
        <ProjectContainer
          vidSrc="../../assets/grandeur-shop-demo.mp4"
          vidLink="#"
          projectName="Grandeur (E-commerce Website)"
          projectDetails="XAMPP, Javascript, Bootstrap"
        />
      </div>
    </section>
  );
})

export default FeaturedProjects;