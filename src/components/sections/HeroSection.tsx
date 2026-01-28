import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export const HeroSection = ({ onButtonClick }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto text-center animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        ВЕКТОР 2026
      </h1>
      <p className="text-2xl md:text-3xl mb-4 font-medium">
        Ваш персональный маршрут к истинным целям и желаниям
      </p>
      <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto">
        Практикум для женщин, которые устали жить «как надо»,
        и готовы отбросить социальные маски, чтобы быть собой настоящей
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div className="flex items-center gap-2">
          <Icon name="Monitor" className="text-accent" />
          <span className="font-medium">Формат: онлайн</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Calendar" className="text-accent" />
          <span className="font-medium">14 дней</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" className="text-accent" />
          <span className="font-medium">Старт: 28 января</span>
        </div>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
        onClick={onButtonClick}
      >
        Хочу участвовать
      </Button>
    </section>
  );
};
