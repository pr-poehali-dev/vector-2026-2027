import { HeroSection } from "@/components/sections/HeroSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ProgramSection } from "@/components/sections/ProgramSection";

const Index = () => {
  const telegramLink = "https://t.me/m/tRaGp4n7NGVi";

  const handleButtonClick = () => {
    window.open(telegramLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onButtonClick={handleButtonClick} />
      <TargetAudienceSection onButtonClick={handleButtonClick} />
      <ResultsSection onButtonClick={handleButtonClick} />
      <ProgramSection onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Index;
