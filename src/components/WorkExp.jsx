const WorkExp = () => {
  return (
    <div name="workexp" className="w-full h-screen bg-primary text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[900px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-secondary">
              Work
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-4xl font-bold">Standard Chartered</p>
            <p className="text-slate-400 py-4 max-w-[700px]">
              (Aug 2020 - Mar 2023)
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">Software Developer</p>
            <p className="text-slate-400 py-4">
              At Standard Chartered I wore many hats building frontend
              applications with ReactJs, backend services to handle business
              logic with WebMethods as well as automating processes with
              schedulers and message queues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExp;
