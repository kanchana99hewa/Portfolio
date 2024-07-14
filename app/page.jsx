import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 classname="mb-6 h1">
              Hello I'm <br /> <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">i excel 
            at crafting bla bla jjjjjjjjjj hhh
            </p>
          {/* btn and socials */}
          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 uppercase"
            >
              <span>Download cv</span>
              <FiDownload className="text-xl"/>
            </button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex
            justify-center items-center text-accent text-base hover:bg-accent
            hover: text-primary hover: transition-all duration-500"/>
            </div>
          </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
