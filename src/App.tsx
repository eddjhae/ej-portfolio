import { Fragment, useRef } from "react";
import { AboutMe, FeaturedProjects, Header, Introduction } from "./components";

function App() {
  const featuredProjectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);

  function handleScrollToProjects() {
    featuredProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToAboutMe() {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Fragment>
      <div className="w-[85vw] mx-auto font-poppins md:w-[75vw]">
        <Header
          onScrollToProjects={handleScrollToProjects}
          onScrollToAboutMe={handleScrollToAboutMe}
        />
        <main>
          <Introduction />
          <FeaturedProjects ref={featuredProjectsRef} />
        </main>
      </div>
      <AboutMe ref={aboutMeRef} />
    </Fragment>
  );
}

export default App;
