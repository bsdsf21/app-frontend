import Card1 from "./HeroSectionComponents/FirstCard";
import Card2 from "./HeroSectionComponents/SecondCard";
import Card3 from "./HeroSectionComponents/ThirdCard";

const Hero = async () => {
  return (
    <section>
      <div className="mx-auto grid grid-cols-2 bg-white text-black">
        {/* First Card */}
        <Card1 />
        <div className="grid grid-rows-2 gap-2 ">
          {/* Second Card */}
          <Card2 />
          {/* Third Card */}
          <Card3 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
