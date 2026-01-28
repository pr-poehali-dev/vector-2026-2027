import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ResultsSectionProps {
  onButtonClick: () => void;
}

export const ResultsSection = ({ onButtonClick }: ResultsSectionProps) => {
  return (
    <>
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Какой результат вы получите
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            "чёткое понимание своих настоящих желаний, а не навязанных",
            "выстроите внутренние границы дозволенного",
            "ясные ориентиры на 2026 год — без иллюзий и «я тоже так хочу»",
            "ощущение внутренней опоры и уверенности в решениях",
            "понимание, куда направлять энергию, а где перестать сливать её",
            "способность возвращать мотивацию, когда накрывает синдром самозванца, хочется всё бросить, пропадает вера в себя",
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={24} />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
        <Card className="bg-accent/10 border-accent">
          <CardContent className="p-8 text-center">
            <p className="text-2xl font-bold mb-2">«Я знаю, куда иду и зачем»</p>
            <p className="text-lg text-secondary">
              Это не про мотивацию.
              <br />
              Это про взрослую ясность и движение.
            </p>
          </CardContent>
        </Card>
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={onButtonClick}
          >
            Записаться
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Что это за продукт и как он работает
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          «ВЕКТОР 2026» — это онлайн-практикум с живыми эфирами,
          где вы работаете вместе со мной, а не остаетесь один на один с заданиями.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <Icon name="Video" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">8 живых эфиров</h3>
              <p className="text-secondary">за 2 недели</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <Icon name="ClipboardList" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Практики и задания</h3>
              <p className="text-secondary">с поддержкой в процессе</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <Icon name="Target" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Чёткая структура</h3>
              <p className="text-secondary">от хаоса к ясным целям</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Без гонки</h3>
              <p className="text-secondary">и давления</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-lg text-center font-medium">
          Это не самостоятельное обучение «посмотрите когда-нибудь».
          <br />
          Вы идёте шаг за шагом и собираете свою картину будущего и новой себя
        </p>
      </section>
    </>
  );
};
