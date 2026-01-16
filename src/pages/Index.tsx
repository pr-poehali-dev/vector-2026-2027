import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const telegramLink = "https://t.me/m/tRaGp4n7NGVi";

  const handleButtonClick = () => {
    window.open(telegramLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
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
            <span className="font-medium">Старт: 26 февраля</span>
          </div>
        </div>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
          onClick={handleButtonClick}
        >
          Хочу участвовать
        </Button>
      </section>

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
            onClick={handleButtonClick}
          >
            Узнать подробнее
          </Button>
        </div>
      </section>

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
            onClick={handleButtonClick}
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

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Программа практикума «ВЕКТОР 2026»
        </h2>
        <p className="text-lg text-center text-secondary mb-12">
          8 живых эфиров · 14 дней · движение от неопределенности к ясности
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 1. Сила мысли и власть внутреннего голоса
                </h3>
                <p className="text-secondary text-sm">
                  Как формируется внутренний диалог
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Как формируется внутренний диалог и как наши мысли определяют наше состояние и реальность.
              </p>
              <p>
                <strong>Результат:</strong> Вы посмотрите в глаза своим мыслям и научитесь отделять свои мысли от навязанных, а также поймёте, что именно мешает жить и действовать иначе.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 2. Кто "я" в рутине жизни
                </h3>
                <p className="text-secondary text-sm">
                  Внутренние роли и энергия
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Рассмотрим наглядно какие внутренние роли лишают энергии, а какие требуют "выхода в свет"
              </p>
              <p>
                <strong>Результат:</strong> Вы поймёте, какая вы разносторонняя личность, куда утекает ваша энергия, и узнаете где заложен ресурс.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 3. Опора на себя и выборы
                </h3>
                <p className="text-secondary text-sm">
                  Ответственность и скрытые выгоды
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Как формируется фундамент личности, как научиться брать ответственность на себя и делать выборы. Рассмотрим скрытую выгоду жизни "на самотеке"
              </p>
              <p>
                <strong>Результат:</strong> Станет ясно, почему избегаете выборов, выход из сценариев: "муж мне должен"; "я жертва обстоятельств" и "само как-нибудь"
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 4. Присвоение авторства
                </h3>
                <p className="text-secondary text-sm">
                  Истинные желания vs. ожидания
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Рассмотрим причины "синдрома отложенной жизни". Истинные желания vs. ожидания окружающих. Страхи, сомнения и внутренние запреты, для чего они нужны.
              </p>
              <p>
                <strong>Результат:</strong> Вы сформулируете свои реальные желания, а не навязанные цели.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 5. Новая версия
                </h3>
                <p className="text-secondary text-sm">
                  Новые мысли и состояние
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Закладывание новых мыслей и состояния
              </p>
              <p>
                <strong>Результат:</strong> Начнёте жить в моменте здесь и сейчас и держать состояние в балансе, цели без иллюзий. У вас появятся понятные и живые цели на 2026 год, с внутренней опорой и мотивацией.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 7. Пространство для новой жизни
                </h3>
                <p className="text-secondary text-sm">
                  Расхламление и освобождение
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Избавляемся от старых вещей, привычек, связей, людей, которые мешают фоново и держат нас ментально. Почему без расхламления — внутреннего, внешние изменения — невозможны.
              </p>
              <p>
                <strong>Результат:</strong> Вы освободите пространство для новых этапов и почувствуете лёгкость и готовность к переменам.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 8. Обретаем новые связи
                </h3>
                <p className="text-secondary text-sm">
                  Новые действия и привычки
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чём:</strong> Новые действия, новые люди, новая жизнь, новые привычки.
              </p>
              <p>
                <strong>Результат:</strong> Вы выйдете с ощущением устойчивости, ясности и понимания, как поддерживать себя дальше в дальнейшем и как не скатываться с намеченных целей и маршрута.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleButtonClick}
          >
            Хочу участвовать
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Почему со мной
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-4">Алёна Галсанова</h3>
            <p className="text-xl text-secondary mb-6">
              Архетиполог и эксперт по раскрытию потенциала
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Icon name="Award" className="text-accent flex-shrink-0" />
                <span>2 года практики</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Users" className="text-accent flex-shrink-0" />
                <span>более 30 успешных кейсов</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Globe" className="text-accent flex-shrink-0" />
                <span>онлайн-формат</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Target" className="text-accent flex-shrink-0" />
                <span>работаю не через мотивацию, а через ясность и ответственность</span>
              </li>
            </ul>
            <p className="text-lg italic">
              Я не обещаю «новую жизнь за 7 дней».
              Моя задача — помочь вам увидеть правду о себе, своих желаниях и возможностях
              и выстроить путь, который выдержит реальность.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-02-12_00-09-06.jpg" 
              alt="Алёна Галсанова"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Формат и стоимость
        </h2>
        <Card className="max-w-2xl mx-auto border-2 border-primary hover-scale">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Практикум «ВЕКТОР 2026»
            </h3>
            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center justify-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>онлайн-формат</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>2 недели работы</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>8 живых эфиров</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>задания и практики</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>поддержка в процессе</span>
              </li>
            </ul>
            <div className="text-center py-6 bg-accent/10 rounded-lg mb-6">
              <p className="text-lg mb-2">Стоимость участия:</p>
              <p className="text-5xl font-bold text-primary">3 500 ₽</p>
            </div>
            <p className="text-center text-lg mb-6">
              <Icon name="Calendar" className="inline mr-2 text-accent" />
              Старт: 26 февраля
            </p>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-xl py-6"
              onClick={handleButtonClick}
            >
              Оплатить участие
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Бонусы
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Ваш личный прогноз на 2026 год",
            "Разбор-диагностика вашего базового архетипа",
            "Два прямых урока в записи",
            "Распаковка ваших результатов и составление дальнейшего маршрута по достижению целей на год",
          ].map((bonus, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="Gift" className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{bonus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="cta" className="py-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Подойдёт ли вам этот практикум?
        </h2>
        <p className="text-xl mb-6">Этот продукт для вас, если вы:</p>
        <ul className="text-left max-w-2xl mx-auto space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <Icon name="Check" className="text-accent flex-shrink-0 mt-1" />
            <span className="text-lg">готовы честно посмотреть на себя и свою жизнь</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" className="text-accent flex-shrink-0 mt-1" />
            <span className="text-lg">хотите ясности, а не вдохновения на пару дней</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" className="text-accent flex-shrink-0 mt-1" />
            <span className="text-lg">понимаете, что дальше жить «по-старому» не хочется</span>
          </li>
        </ul>
        <Card className="bg-primary/5 border-primary mb-12">
          <CardContent className="p-8">
            <p className="text-xl font-medium">
              Сейчас — хороший момент остановиться,
              <br />
              определить ориентиры и войти в 2026 год осознанно,
              <br />
              а не по инерции.
            </p>
          </CardContent>
        </Card>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-full"
          onClick={handleButtonClick}
        >
          Хочу участвовать
        </Button>
      </section>

      <footer className="py-12 px-4 md:px-8 bg-gray-900 text-white text-center">
        <p className="text-lg mb-2">ВЕКТОР 2026</p>
        <p className="text-secondary">Практикум по раскрытию потенциала</p>
      </footer>
    </div>
  );
};

export default Index;