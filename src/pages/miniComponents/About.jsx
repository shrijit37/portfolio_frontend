const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-1 my-8 sm:my-20 gap-14">
          {/* <div className="flex justify-center items-center">
           
          </div> */}
          <div className="flex justify-center align-middle flex-col tracking-[1px] text-xl gap-5">
            <p>
            Hi, I’m Shrijit Srivastav, a passionate Full-Stack Developer with a knack for creating responsive websites and scalable applications! I work with ReactJS, Next.js, Node.js, and Express.js, and I love integrating APIs to build seamless and fun user experiences. When I’m not coding, you’ll find me playing chess, binge-watching anime, or exploring cool new tech. I’m always excited to learn, create, and take on new challenges!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
