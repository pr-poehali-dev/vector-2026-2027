import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TargetAudienceSectionProps {
  onButtonClick: () => void;
}

export const TargetAudienceSection = ({ onButtonClick }: TargetAudienceSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Кому подойдёт этот практикум
      </h2>
      <p className="text-lg text-center mb-10 text-secondary">
        Этот практикум для вас, если сейчас вы:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          "не понимаете, чего хотите именно вы, а не окружающие",
          "устали быть \"удобной\", но не знаете как стать другой",
          "много думаете, но мало двигаетесь вперёд",
          "боитесь ошибиться и поэтому откладываете решения",
          "ставите цели, но не чувствуете к ним энергии для реализации",
          "пробовали разные курсы, но ничего не менялось по-настоящему",
        ].map((item, index) => (
          <Card key={index} className="border-l-4 border-l-accent hover-scale">
            <CardContent className="p-6">
              <p className="text-lg">{item}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xl font-semibold text-center mt-12">
        Вы уже многое знаете.
        <br />
        Но вам не хватает структуры, ясности и честного контакта с собой.
      </p>
      <div className="text-center mt-8">
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
          onClick={onButtonClick}
        >
          Узнать подробнее
        </Button>
      </div>
    </section>
  );
};
