import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: "ru",
  officialLocale: "ua",
  InterNationLocale: "en",
  asianOceanLocale: "jp",

  messages: {
    brandName: "City Staff",
    BrandEmail: "citystaff.hr@gmail.com",
    phoneFirst: "+38(073) 367-67-68",
    phoneSecond: "+38(093) 367-67-69",

    en: {
      homeLink: "Main",
      titleHome: "Recruiting agency",
      brandDescription: "Recruitment for the goals of your business",
      buttonTxtOnTop: "To customers",
      buttonTxtInSide: "Order Service",
      homeIconFirst: "4 years in the market service",
      homeIconSecond: "7 professionals",
      homeIconThird: "600+ satisfied employees",
      homeIconFourth: "1000+ closed vacancies",
      workTime: "mon. - fri. 9 am till 6 pm",
      addressLocation:
          "Ukraine, Kyiv, Vasilkivska street 14, BC Stand, office 500",

      aboutLink: "About",
      titleAbout: "City Staff – we are an international recruitment Agency.",
      contentAbout:
          "Our priority is high-quality recruitment and a unique approach to finding employees for companies of absolutely different segment and profile. The Agency has been successfully working in the labor market for more than 4 years. Our Agency is a reliable Foundation, because the staff is the key to success for any Manager and company! The motto of our Agency is quite simple: Choose people who, in Your opinion, will love this job!Therefore, you can order our recruitment services or consult on any issue in the field of recruitment here by filling out the form below.We will be glad to cooperate!",

      charityLink: "Charity",
      charityContent:
          "Our recruiting agency helps people not only with the search and provision of jobs and jobs, but also gives joy to our little children. Indeed, you must agree that it is so pleasant to give warmth, comfort and affection to those who need and who lack parental love. Now we will talk about orphanages and orphans. We have been engaged in charity work for a relatively short time, but during this short period we have not a lot and not a few orphanages in care, namely 9. For the entire period of our company’s work and monthly trips to orphanages, we have extended a helping hand to a large number of needy children and we urge all people to become a little kinder and not think about further benefits. Its so nice to see a sincere smile on the face of the one you helped. If you want to join our team we are always happy to any help!",

      recruitersLink: "For candidates",
      recruitersTitle: "Staff",
      recruitersSubTitle: "recruitment",
      firstListTitle: "How do we work?",
      ListFirstItem: "we finding people who you required",
      ListSecondItem: "we know your needs",
      ListThirdItem: "search for a specific employee",
      secondListTitle: "How are we looking for a candidates?",
      sListFirstItem: "our candidate database",
      sListSecondItem: "recommendations",
      sListThirdItem: "networking (smm)",
      thirdListTitle: "Our services:",
      tListFirstItem: "search and textbook to middle and high school staff",
      tListSecondItem:
          "direct tapping of unique personalities in your own pocket of activity",
      tListThirdItem: "idividually folding job vacancies",

      contactsLink: "Contacts",
      contactsContent:
          "We are located at: {break} Ukraine, Kiev city, st. Vasilkivska 14, Business Center *Stand* office 500 M.Golosievska"
    },

    ru: {
      homeLink: "Главная",
      titleHome: "Рекрутинговое Агентство",
      brandDescription: "Подбор персонала под цели Вашего бизнеса",
      buttonTxtOnTop: "Клиентам",
      buttonTxtInSide: "Заказать услугу",
      homeIconFirst: "4 года на рынке услуг",
      homeIconSecond: "7 профессионалов",
      homeIconThird: "600+ довольных сотрудников",
      homeIconFourth: "1000+ закрытых вакансий",
      workTime: "ПН — ПТ с 9:00 до 18:00",
      addressLocation:
          "Украина, Киев, ул. Васильковская 14, БЦ Стенд, офис 500",

      aboutLink: "О нас",
      titleAbout:
          "City Staff – мы международное рекрутинговое агенство по подбору персонала.",
      contentAbout:
          " Нашим приоритетом является качественный подбор персонала и уникальный подход при поиске сотрудников для компаний абсолютно разного сегмента и профиля. Агенство успешно работает на рынке труда более 4х лет. Наше агентство является надёжным фундаментом , ведь персонал – это зало успеха для любого руководителя и компании! Девиз нашего агентства достаточно прост: «Подбирайте людей которые, по Вашему мнению, будут любить эту работу!» Поэтому заказать наши рекрутинговые услуги или проконсультироваться по любому вопросу из сферы подбора персонала можно здесь заполнив форму ниже. Обращайтесь, будем рады сотрудничеству!",

      charityLink: "Благотворительность",
      charityContent:
          "Наше рекрутинговое агенство помогает людям не только с поиском и предоставлением работы и рабочих мест, а ещё дарит радость нашим маленьким деткам. Ведь согласитесь так приятно дарить тепло , уют и ласку тем кто нуждается и кому не хватает родительской любви. Сейчас речь пойдёт о детских домах и детях сиротах. Мы занимаемся благотворительностью относительно не давно, но за этот маленький период у нас не много и не мало детских домов находятся в попечении, а именно 9. За все время работы нашей компании и ежемесячных поездок в детские дома, мы протянули руку помощи большому количеству нуждающихся детей и мы призываем всех людей к тому что бы стать чуточку добрее и не думать о дальнейшей выгоде. Ведь это так приятно видеть искреннюю улыбку на лице того, кому ты помог. Если Вы хотите присоединится к нашей команде то звоните на контактный номер телефона, который указан ниже. Если Вы хотите присоединиться к нашей команде, мы всегда рады помощи!",

      recruitersLink: "Соискателям",
      recruitersTitle: "Подбор",
      recruitersSubTitle: "Персонала",
      firstListTitle: "Как мы работаем?",
      ListFirstItem: "Находим тех кто нужен",
      ListSecondItem: "Знаем ваши потребности",
      ListThirdItem: "Подбираем подходящего сотрудника",
      secondListTitle: "Как мы ищем кандидатов?",
      sListFirstItem: "Наша база кандидатов",
      sListSecondItem: "Рекомендации",
      sListThirdItem: "Нетворкинг(smm)",
      thirdListTitle: "Наши услуги:",
      tListFirstItem: "Поиск и подбор персонала среднего и высшего звена",
      tListSecondItem:
          "Прямой поиск уникальных специалистов в своей области деятельности",
      tListThirdItem:
          "Индивидуальное составление вакансии в зависимости от требований компаний",

      contactsLink: "Контакты",
      contactsContent:
          "Мы находимся по адресу Украина, Киев, ул. Васильковская 14, БЦ Стенд, офис 500 М.Голосеевская пн-пт 09:00 до 18:00{break} Почтовый ящик для резюме:"
    },

    ua: {
      homeLink: "Головна",
      titleHome: "Рекрутингове Агентство",
      brandDescription: "Підбір персоналу під цілі Вашого бізнесу",
      buttonTxtOnTop: "Клієнтам",
      buttonTxtInSide: "Замовити послугу",
      homeIconFirst: "4 роки на ринку послуг",
      homeIconSecond: "7 професіоналів",
      homeIconThird: "600+ задоволених співробітників",
      homeIconFourth: "1000+ закритих вакансій",
      workTime: "ПН — ПТ з 9:00 до 18:00",
      addressLocation:
          "Україна, Київ, вул. Василькiвська 14, БЦ Стенд офiс 500",

      aboutLink: "Про нас",
      titleAbout:
          "City Staff – ми міжнародне рекрутингове агенство з підбору персоналу.",
      contentAbout:
          "Нашим пріоритетом є якісний підбір персоналу і унікальний підхід при пошуку співробітників для компаній абсолютно різного сегмента і профілю. Агенство успішно працює на ринку праці більш 4х років. Наше агенство є надійним фундаментом, адже персонал - це показник успіху для будь-якого керівника і компанії! Девіз нашого агенства досить простий: «Підбирайте людей, які на Вашу думку, будуть любити цю роботу!» Тому замовити наші рекрутингові послуги або проконсультуватися з будь-якого питання зі сфери підбору персоналу можна тут заповнивши форму нижче. Звертайтеся, будемо раді співпраці!",

      charityLink: "Благодійність",
      charityContent:
          "Наше рекрутингове агенство допомагає людям не тільки з пошуком і наданням роботи і робочих місць, а ще дарує радість нашим маленьким діткам. Адже погодьтеся так приємно дарувати тепло, затишок і ласку тим хто потребує і кому не вистачає батьківської любові. Зараз мова піде про дитячі будинки і дітей сиріт. Ми займаємося благодійністю відносно не давно, але за цей короткий період часу у нас не багато і не мало дитячих будинків знаходяться під опікою, а саме 9. За весь час роботи нашої компанії і щомісячних поїздок в дитячі будинки, ми протягнули руку допомоги великій кількості нужденних дітей і ми закликаємо всіх людей до того що б стати трішки добрішими і не думати про подальшу вигоду. Адже це так приємно бачити щиру посмішку на обличчі того, кому ти допоміг. Якщо Ви хочете приєднається до нашої команди телефонуйте на контактний номер телефону, який вказаний нижче. Якщо Ви бажаєте приєднатися до нашої команди, ми завжди раді допомозі!",

      recruitersLink: "Здобувачам",
      recruitersTitle: "Підбір",
      recruitersSubTitle: "Персоналу",
      firstListTitle: "Як ми працюємо?",
      ListFirstItem: "Знаходимо тих хто потрiбен",
      ListSecondItem: "Знаємо ваші потреби",
      ListThirdItem: "Пiдбираємо відповідного працiвника",
      secondListTitle: "Як ми пiдбираємо кандидатiв?",
      sListFirstItem: "Наша база кандидатiв ",
      sListSecondItem: "Рекомендації",
      sListThirdItem: "Нетворкiнг(smm)",
      thirdListTitle: "Нашi послуги:",
      tListFirstItem: "Пошук та пiдбiр персоналу середньої та вищої ланки",
      tListSecondItem:
          "Прямий пошук унiкальних фахiвцiв в своїй галузi дiяльностi",
      tListThirdItem:
          "Iндивiдуальне складання вакансiї залежно вiд вимог пiдприємств",

      contactsLink: "Контакти",
      contactsContent:
          "Ми знаходимося за адресою Україна, місто Київ, вул. Васильківська 14, БЦ Стенд, офіс 500 М.Голосіївська пн-пт 09:00 до 18:00 Поштова скринька для резюме:"
    }
  }
});
