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
            <span className="font-medium">Старт: 31 января</span>
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
                <strong>О чем:</strong> Как формируется внутренний диалог и почему мы часто не
                осознаем его влияния.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Увидите, кто на самом деле правит вашими решениями:
                вы или чужие «надо», научитесь выявлять деструктивные установки, которые блокируют
                движение вперед.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 2. Чистый лист: зачем отпускать старое
                </h3>
                <p className="text-secondary text-sm">
                  Разбор барьеров, которые мешают двигаться вперед
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Разбор барьеров, которые мешают двигаться вперед: старые
                травмы, токсичные отношения, невыполненные обещания.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Освободите энергию для нового, отпустив «тяжёлые
                якоря» прошлого.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 3. Встреча с собой. Кто я есть на самом деле?
                </h3>
                <p className="text-secondary text-sm">
                  Работа с архетипами и глубинной идентичностью
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Работа с архетипами и глубинной идентичностью. Кто вы —
                без социальных масок, без попыток соответствовать?
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Узнаете свою истинную природу и как она влияет на
                выбор целей.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 4. «Хочу» или «надо»? Истинные желания против навязанных целей
                </h3>
                <p className="text-secondary text-sm">
                  Техники выявления настоящих желаний
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Техники выявления настоящих желаний и отделения их от
                чужих ожиданий.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Вы чётко поймёте, чего хотите ВЫ, а не родители,
                муж, друзья или общество.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 5. Личные границы и энергия: где я сливаю силы?
                </h3>
                <p className="text-secondary text-sm">
                  Работа с границами дозволенного
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Работа с границами дозволенного: где вы позволяете себя
                использовать, игнорировать, недооценивать.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Выстроите внутренние границы и перестанете быть
                «удобной» для всех, кроме себя.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 6. ВЕКТОР 2026: формирование ясной цели
                </h3>
                <p className="text-secondary text-sm">
                  От идеи до конкретного плана
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> От идеи до конкретного плана. Как создать цель, которая
                зажигает, а не обязывает.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Сформируете чёткий ВЕКТОР на 2026 год, который
                соответствует вашей природе и желаниям.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 7. Мотивация, самозванец и страхи: как не слиться в процессе
                </h3>
                <p className="text-secondary text-sm">
                  Техники возвращения к цели
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Техники возвращения к цели, когда накрывает синдром
                самозванца, хочется всё бросить, пропадает вера в себя.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Получите инструменты, чтобы не сходить с пути даже в
                кризисных ситуациях.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Эфир 8. Ритуал завершения и перехода в новую жизнь
                </h3>
                <p className="text-secondary text-sm">
                  Закрепление изменений и создание плана действий
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>О чем:</strong> Закрепление изменений и создание плана действий на первые
                30 дней после практикума.
              </p>
              <p className="mb-2">
                <strong>Результат:</strong> Вы уходите с пониманием, что делать дальше, и с чувством
                внутренней опоры.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Частые вопросы
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          <AccordionItem value="q1" className="border rounded-lg px-6 bg-white">
            <AccordionTrigger className="text-left hover:no-underline">
              А можно будет смотреть эфиры в записи, если не смогу онлайн?
            </AccordionTrigger>
            <AccordionContent>
              Да, будут записи. Но смысл именно в совместной работе на эфирах. Это про живое
              взаимодействие, обратную связь, ваши вопросы. В записи этого не будет.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2" className="border rounded-lg px-6 bg-white">
            <AccordionTrigger className="text-left hover:no-underline">
              Что если я не успею выполнить задания?
            </AccordionTrigger>
            <AccordionContent>
              Задания не на скорость. Они для вас, а не для отчёта. Но структура и поддержка помогают не
              откладывать и идти в своем темпе.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className="border rounded-lg px-6 bg-white">
            <AccordionTrigger className="text-left hover:no-underline">
              Я уже проходила много курсов. Чем это отличается?
            </AccordionTrigger>
            <AccordionContent>
              Это не курс, где вам дают информацию. Это практикум, где вы работаете С собой, а не узнаёте
              О себе. Разница огромная.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className="border rounded-lg px-6 bg-white">
            <AccordionTrigger className="text-left hover:no-underline">
              У меня нестабильная ситуация в жизни. Стоит ли сейчас участвовать?
            </AccordionTrigger>
            <AccordionContent>
              Именно сейчас. Когда всё ясно и стабильно — менять ничего не хочется. Нестабильность —
              это окно для изменений.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5" className="border rounded-lg px-6 bg-white">
            <AccordionTrigger className="text-left hover:no-underline">
              Мне нужна индивидуальная работа. Групповой формат подойдёт?
            </AccordionTrigger>
            <AccordionContent>
              Вы работаете со своими задачами, но в группе это усиливается. Вы видите себя через других
              и понимаете, что не одиноки в своих переживаниях.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Формат и стоимость
        </h2>
        <Card className="max-w-2xl mx-auto border-2 border-primary hover-scale">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Практикум «ВЕКТОР 2026»
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>онлайн-формат</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>2 недели работы</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>8 живых эфиров</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>задания и практики</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0" />
                <span>поддержка в процессе</span>
              </li>
            </ul>
            <div className="text-center py-6 bg-accent/10 rounded-lg mb-4">
              <p className="text-lg mb-2">Стоимость участия:</p>
              <p className="text-5xl font-bold text-primary mb-3">3 500 ₽</p>
              <p className="text-xl text-secondary line-through">вместо 7 000 ₽</p>
              <p className="text-lg font-semibold text-primary mt-4">
                <Icon name="Users" className="inline mr-2" size={20} />
                Из 8 мест осталось 2
              </p>
            </div>
            <p className="text-center text-lg mb-6">
              <Icon name="Calendar" className="inline mr-2 text-accent" />
              Старт: 31 января
            </p>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-xl py-6"
              onClick={handleButtonClick}
            >
              Забронировать место
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Кто ведёт практикум
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Алёна Галсанова</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Психолог-консультант, специалист по трансформационным практикам.
            </p>
            <p className="mb-4 leading-relaxed">
              Работаю с женщинами, которые застряли в состоянии «делаю, но не чувствую».
            </p>
            <p className="mb-4 leading-relaxed">
              Помогаю убрать внутренние барьеры, понять свои истинные желания и выстроить жизнь
              без чувства вины за «неправильный» выбор.
            </p>
            <p className="leading-relaxed">
              Верю, что изменения начинаются не с мотивации, а с честности с собой.
            </p>
          </div>
          <div>
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-02-12_00-09-06.jpg" 
              alt="Алёна Галсанова"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Подойдёт ли вам этот практикум?
        </h2>
        <p className="text-xl mb-6">
          Этот продукт для вас, если вы:
        </p>
        <div className="space-y-3 mb-8 text-left max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={24} />
            <p className="text-lg">готовы честно посмотреть на себя и свою жизнь</p>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={24} />
            <p className="text-lg">хотите ясности, а не вдохновения на пару дней</p>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={24} />
            <p className="text-lg">понимаете, что дальше жить «по-старому» не хочется</p>
          </div>
        </div>
        <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Сейчас — хороший момент остановиться,
          определить ориентиры и войти в 2026 год осознанно,
          а не по инерции.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6 mb-4"
          onClick={handleButtonClick}
        >
          Хочу участвовать
        </Button>
        <p className="text-2xl font-bold mt-8">
          ВЕКТОР 2026
        </p>
        <p className="text-lg text-secondary">
          Практикум по раскрытию потенциала
        </p>
      </section>
    </div>
  );
};

export default Index;