import CodingProfiles from "./CodingProfiles";
import SelfIntroduction from "./SelfIntroduction";
const About = () => {
  return (
    <div id="about" className="min-h-full h-auto p-2">
      <div className="flex h-auto p-2">
        <div className="w-full md:w-1/2 hidden md:block">
          <SelfIntroduction />
        </div>
        <div className="w-full md:w-1/2 flex flex-col min-h-full h-auto">
          <div className="order-1 w-full md:h-2/3 flex justify-center items-center p-2 pl-4">
            <img
              src="/PortfolioImage.png"
              alt="My Photo"
              className="w-3/4 aspect-[4/3] rounded-lg"
            />
          </div>
          <div className="order-2 w-full md:hidden">
            <SelfIntroduction />
          </div>
          <div className="order-3 w-full md:h-1/3 p-2 pl-4">
            <CodingProfiles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
