import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-primary h-screen">
      {/* name for smooth-scroll */}

      {/* Container */}
      <div className="max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-secondary">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">
          Zaved Hussain Sikdar
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-slate-400">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-slate-400 py-4 max-w-[700px]">
          Welcome to my portfolio! As a passionate full stack developer, I
          thrive on crafting seamless digital experiences. With expertise in
          front-end and back-end technologies, I bring ideas to life, one line
          of code at a time. Explore my projects that reflect innovation,
          functionality, and a deep love for elegant solutions.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary">
            View Work
            {/* for the icon to rotate use group  */}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
