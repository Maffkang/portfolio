import type { Lang } from "@/lib/i18n";

export type CaseItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
};

export type CaseImage = {
  src: string;
  width: number;
  height: number;
  /** Relative flex weight when shown alongside other images in the same row (desktop). Defaults to 1. */
  weight?: number;
};

export type CaseTextCard = {
  title: string;
  paragraphs: string[];
  image?: CaseImage;
};

export type CaseAccordionItem = {
  title: string;
  description: string;
  images: CaseImage[];
};

export type CaseRoleResultSection = {
  heading: string;
  roleTitle: string;
  roleList: string[];
  resultTitle: string;
  resultParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type CaseResultStat = {
  value: string;
  description: string;
};

export type CaseResultStatsSection = {
  paragraph: string;
  stats: CaseResultStat[];
};

export type CaseDetail = {
  tagline: string;
  role: string;
  tags: string[];
  heroBanner: {
    desktopBackground: CaseImage;
    mobileBackground: CaseImage;
    /** Gap (px) between the text block and the tags row in the mobile banner. Defaults to 32. */
    mobileContentGap?: number;
  };
  introHeading: string;
  /** Each entry is a row of 1-2 cards rendered side by side (desktop) / stacked (mobile). */
  introRows: CaseTextCard[][];
  solutionHeading?: string;
  solutionParagraphs?: string[];
  solutionImage?: CaseImage;
  accordionHeading?: string;
  accordionItems?: CaseAccordionItem[];
  /** Optional tinted highlight box shown after the accordion (e.g. a results summary). */
  resultParagraphs?: string[];
  /** Alternate "Результат" layout: a summary paragraph next to a grid of stat cards. */
  resultStatsSection?: CaseResultStatsSection;
  /** Alternate "Решение" layout: a bullet list card next to a tinted result card + CTA button. */
  roleResultSection?: CaseRoleResultSection;
};

type Content = {
  profile: {
    name: string;
    legalName: string;
    greeting: string;
    bio: string;
    footerThanks: string;
  };
  cases: CaseItem[];
  profileTags: string[];
  socialLinks: { label: string; href: string }[];
  caseDetails: Partial<Record<string, CaseDetail>>;
};

// Fields shared verbatim between languages (images, tags, hrefs, role labels).
const cycleTags = ["UX/UI", "Product design", "Fintech design", "Acquire service"];
const zippyTags = ["UX/UI", "Product design", "Crypto"];
const travelCardTags = ["UX/UI", "Product design", "AI"];
const roleLabel = "UX/UI & Product designer";

const cycleHeroBanner = {
  desktopBackground: {
    src: "/images/cases/cycle/hero-bg-desktop.webp",
    width: 1360,
    height: 349,
  },
  mobileBackground: {
    src: "/images/cases/cycle/hero-bg-mobile.webp",
    width: 370,
    height: 477,
  },
};

const zippyHeroBanner = {
  desktopBackground: {
    src: "/images/cases/zippy/hero-bg-desktop.webp",
    width: 1360,
    height: 349,
  },
  mobileBackground: {
    src: "/images/cases/zippy/hero-bg-mobile.webp",
    width: 370,
    height: 477,
  },
};

const travelCardHeroBanner = {
  desktopBackground: {
    src: "/images/cases/travel-card/hero-bg-desktop.webp",
    width: 1360,
    height: 349,
  },
  mobileBackground: {
    src: "/images/cases/travel-card/hero-bg-mobile.webp",
    width: 370,
    height: 477,
  },
  mobileContentGap: 16,
};

const cycleProblemImage: CaseImage = {
  src: "/images/cases/cycle/problem.webp",
  width: 1600,
  height: 1128,
};

const cycleSolutionImage: CaseImage = {
  src: "/images/cases/cycle/solution.webp",
  width: 1600,
  height: 836,
};

const cycleAccordionImages = {
  onboarding: [{ src: "/images/cases/cycle/onboarding.webp", width: 1600, height: 1266 }],
  transactions: [{ src: "/images/cases/cycle/transactions.webp", width: 1600, height: 1246 }],
  freeSale: [{ src: "/images/cases/cycle/free-sale.webp", width: 1600, height: 668 }],
  catalog: [{ src: "/images/cases/cycle/catalog.webp", width: 1600, height: 1514 }],
};

const zippyFlowImage: CaseImage = {
  src: "/images/cases/zippy/flow-eng.webp",
  width: 1600,
  height: 1848,
};

const zippyUiKitImage: CaseImage = {
  src: "/images/cases/zippy/ui-kit.webp",
  width: 1600,
  height: 1214,
};

const zippyAccordionImages = {
  main: [
    { src: "/images/cases/zippy/main-1.webp", width: 1600, height: 874, weight: 800 },
    { src: "/images/cases/zippy/main-2.webp", width: 1600, height: 1660, weight: 421 },
  ],
  profile: [
    { src: "/images/cases/zippy/profile-1.webp", width: 1600, height: 702, weight: 939 },
    { src: "/images/cases/zippy/profile-2.webp", width: 1600, height: 2224, weight: 296 },
  ],
  kys: [
    { src: "/images/cases/zippy/kys-1.webp", width: 1600, height: 2672, weight: 335 },
    { src: "/images/cases/zippy/kys-2.webp", width: 1600, height: 940, weight: 850 },
  ],
  afterKyc: [
    { src: "/images/cases/zippy/afterkyc-1.webp", width: 1600, height: 424, weight: 829 },
    { src: "/images/cases/zippy/afterkyc-2.webp", width: 1588, height: 1624, weight: 408 },
  ],
  buySell: [
    { src: "/images/cases/zippy/buysell-1.webp", width: 1600, height: 874, weight: 696 },
    { src: "/images/cases/zippy/buysell-2.webp", width: 1600, height: 1072, weight: 550 },
  ],
  statuses: [
    { src: "/images/cases/zippy/statuses-1.webp", width: 1600, height: 878, weight: 760 },
    { src: "/images/cases/zippy/statuses-2.webp", width: 1600, height: 1660, weight: 401 },
  ],
  email: [{ src: "/images/cases/zippy/email.webp", width: 1600, height: 658 }],
};

const travelCardCtaHref = "https://travelcard.my2can.com";

const socialLinks = [
  { label: "Telegram", href: "https://t.me/maffkang" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/andrew-marchenko-uxuidesign",
  },
  { label: "Email", href: "mailto:andryshardrs@gmail.com" },
];

const profileTags = ["UX/UI", "Graphic design", "Fintech", "IT", "WEB3"];

const cycleCover = "/images/covers/cycle.webp";
const zippyCover = "/images/covers/zippy.webp";
const travelCardCover = "/images/covers/travel-card.webp";
const crocCover = "/images/covers/croc.webp";

const ruContent: Content = {
  profile: {
    name: "Marchenko Andrey",
    legalName: "Марченко Андрей",
    greeting: "Привет! Меня зовут Марченко Андрей",
    bio: "Я дизайнер цифровых продуктов с 5 годами опыта в fintech, IT. Работал с командами из Европы и ЮАР. Работаю на стыке дизайна и продукта, думаю что дизайнер это профессионал который понимает дизайн как совокупность навыков и инструментов, концепций, практик, и способен выполнять любую работу как продуктовую, так и коммуникационную.",
    footerThanks: "Спасибо за просмотр!",
  },
  cases: [
    {
      slug: "cycle",
      title: "Cycle (Acquire POS)",
      description:
        "Я работал на пересечении продуктовой команды, разработки и бизнес-направления. Взаимодействовал с продакт-менеджерами, backend и embedded-разработчиками, а также с участниками, отвечающими за платёжную инфраструктуру.",
      tags: ["UX/UI", "Product design", "Fintech"],
      cover: cycleCover,
    },
    {
      slug: "zippy",
      title: "Zippy (Crypto exchanger)",
      description:
        "Zippy — сервис покупки и продажи USDT за рубли. Целевая аудитория: люди с минимальным опытом в крипто которым нужно быстро и безопасно купить или продать валюту.",
      tags: ["UX/UI", "Mobile", "Crypto", "Product design"],
      cover: zippyCover,
    },
    {
      slug: "travel-card",
      title: "Travel card",
      description:
        "Сервис оформления зарубежных банковских карт для пользователей из РФ в условиях жёстких сроков, где нужно было быстро собрать понятный и доверительный пользовательский опыт для сложного финансового процесса",
      tags: ["UX/UI", "Product design", "Claude", "AI"],
      cover: travelCardCover,
    },
    {
      slug: "croc-k2",
      title: "CROC, K2 & Other brands",
      description:
        "4 года визуального производства в enterprise-среде: конференции, айдентика, презентации, мероприятия. Работа в команде, много брендов, большой поток.",
      tags: ["Communication design", "IT", "AI", "UX/UI", "Product design"],
      cover: crocCover,
    },
  ],
  profileTags,
  socialLinks,
  caseDetails: {
    cycle: {
      tagline:
        "Проекты и задачи в рамках компании Cycle Bit, демонстрируя мою роль в продуктовом и UX/UI дизайне.",
      role: roleLabel,
      tags: cycleTags,
      heroBanner: cycleHeroBanner,
      introHeading: "Вводные",
      introRows: [
        [
          {
            title: "Контекст и специфика",
            paragraphs: [
              "Я работал на пересечении продуктовой команды, разработки и бизнес-направления. Взаимодействовал с продакт-менеджерами, backend и embedded-разработчиками, а также с участниками, отвечающими за платёжную инфраструктуру и операционные процессы мерчантов.",
            ],
          },
          {
            title: "Моя роль и вклад",
            paragraphs: [
              "Отвечал за пересборку интерфейса продукта: переработал ключевые пользовательские сценарии, обновил визуальную систему и внедрил UI Kit, чтобы сделать продукт более цельным и масштабируемым.",
            ],
          },
        ],
        [
          {
            title: "Проблема",
            paragraphs: [
              "Интерфейс был построен на основе устаревших устройств, а также фрагментированным и недостаточно консистентным, из-за чего ключевые сценарии работы с платежами были перегружены и не всегда понятны пользователям в реальных операционных условиях.",
            ],
            image: cycleProblemImage,
          },
          {
            title: "Цели",
            paragraphs: [
              "Основной целью редизайна Cycle POS было упростить и ускорить повседневные операции внутри системы: сделать оплату, работу с заказами, чеками и каталогами более понятной и последовательной для пользователя. Параллельно важно было повысить консистентность интерфейса через внедрение UI Kit и системного подхода к дизайну, упростить онбординг и регистрацию устройств, а также подготовить продукт к дальнейшему масштабированию без потери качества пользовательского опыта.",
            ],
          },
        ],
      ],
      solutionHeading: "Решение",
      solutionParagraphs: [
        "Основной фокус работы был на том, чтобы заново выстроить интерфейсную систему вокруг реальных пользовательских задач. Я переработал ключевые флоу, пересобрал логику экранов и состояний, обновил визуальную систему и заложил более единый подход к компонентам через UI Kit.",
        "Я переработал ключевые пользовательские сценарии, упростил логику интерфейса и обновил визуальную систему продукта. Параллельно внедрил UI Kit, чтобы зафиксировать единые паттерны и упростить развитие продукта. Дополнительно я спроектировал и внедрил новые продуктовые сценарии, связанные с чаевыми: добавил возможность настройки чаевых по умолчанию с привязкой к устройству и синхронизацией с личным кабинетом, реализовал чаевые как отдельную сущность в чеке и учёте. Проработал их отображение в детализации, отчётах и общей сумме (Total), сценарии возвратов с чаевыми, кастомные значения, печать чеков и отдельный раздел в личном кабинете со статистикой и аналитикой.",
        "Также обновил процесс регистрации на кассе, упростив вход пользователя в систему, участвовал в доработке раздела учёта остатков и работе с модификаторами товаров, что помогло сделать повседневные операции более понятными и быстрыми.",
      ],
      solutionImage: cycleSolutionImage,
      accordionHeading: "Работа с внутренними сервисами:",
      accordionItems: [
        {
          title: "Онбординг",
          description:
            "Переработал онбординг: спроектировал сценарии регистрации, первого входа и начальной настройки устройства. Упростил структуру шагов, убрал лишние действия и сделал процесс более понятным, чтобы пользователь быстрее начинал работать с системой.",
          images: cycleAccordionImages.onboarding,
        },
        {
          title: "История транзакций",
          description:
            "Также был переработан раздел с историей операций: обновил структуру и взаимодействие с календарём, за счёт чего поиск и навигация по транзакциям стали заметно быстрее и удобнее для пользователя.",
          images: cycleAccordionImages.transactions,
        },
        {
          title: "Свободные продажи",
          description:
            "Спроектировал и отрисовал экраны для сценария свободных продаж, упростив процесс добавления товаров и проведения транзакции в условиях реального использования кассы.",
          images: cycleAccordionImages.freeSale,
        },
        {
          title: "Работа с каталогами",
          description:
            "Спроектировал и отрисовал экраны для сценариев работы с каталогами, продумав поиск, режимы просмотра и все основные состояния, чтобы сделать работу с товарами быстрой и предсказуемой.",
          images: cycleAccordionImages.catalog,
        },
        {
          title: "Формирование и редактирование чеков",
          description:
            "Спроектировал и отрисовал экраны добавления товаров в чек, упростив процесс формирования и минимизировав лишние действия пользователя.",
          images: cycleAccordionImages.onboarding,
        },
        {
          title: "Работа с заказами",
          description:
            "Переработал интерфейс работы с заказами: спроектировал ключевые сценарии создания, редактирования и управления заказами. Упростил логику и структуру экранов, чтобы ускорить работу пользователя и снизить количество ошибок.",
          images: cycleAccordionImages.onboarding,
        },
      ],
      resultStatsSection: {
        paragraph:
          "В результате продукт получил более современный, понятный и целостный интерфейс, где ключевые сценарии стали восприниматься проще и логичнее. Важно, что эффект здесь не только визуальный: за счёт обновлённых пользовательских флоу и внедрения UI Kit продукт стал более устойчивой системой, которую легче поддерживать и масштабировать дальше. Для бизнеса это означает более удобный рабочий инструмент, а для команды более ясную основу для дальнейшей разработки",
        stats: [
          {
            value: "150+",
            description:
              "экранов переработано и создано с нуля — онбординг, продажи, каталог, заказы, личный кабинет, история операций",
          },
          {
            value: "5-6",
            description:
              "шагов в финальном онбординге — сокращён с перегруженного нелинейного сценария",
          },
          {
            value: "UI Kit",
            description:
              "внедрён с нуля — унифицировал визуальную систему и заложил базу для масштабирования продукта",
          },
          {
            value: "6",
            description:
              "переработаны в рамках одного продукта — онбординг, история транзакций, свободные продажи, каталоги, чеки, заказы",
          },
        ],
      },
    },
    zippy: {
      tagline:
        "Сервис покупки и продажи USDT за рубли. Целевая аудитория: люди с минимальным опытом в крипто которым нужно быстро и безопасно купить или продать валюту. Продукт на этапе закрытого MVP-тестирования.",
      role: roleLabel,
      tags: zippyTags,
      heroBanner: zippyHeroBanner,
      introHeading: "Вводные",
      introRows: [
        [
          {
            title: "Конкурентный анализ",
            paragraphs: [
              "Смотрели на Mercuryo и похожие сервисы. Mercuryo хорош минимализмом и скоростью виджета но заточен под встраивание в сторонние продукты, а не под самостоятельное использование. Там нет личного кабинета, истории транзакций, полноценного профиля. Для пользователя который хочет контролировать свои операции это тупик. Zippy должен был закрыть этот gap: такая же простота на входе, но полноценный продукт внутри.",
              "И Bybit один из самых популярных способов купить USDT за рубли в России. Но это P2P-платформа: покупатель выбирает продавца из списка, договаривается об условиях, ждёт подтверждения вручную. Для опытного пользователя нормально. Для человека который покупает крипту впервые стресс: непонятно кому доверять, непонятно что делать если что-то пошло не так, нет ощущения что тебя кто-то страхует.",
            ],
          },
          {
            title: "Проблема",
            paragraphs: [
              "Задача состояла в том, чтобы разработать автономный продукт для обмена криптовалют, который позволял бы пользователям быстро конвертировать рубли в криптовалюту.",
              "Основная задача состояла в том, чтобы справиться со сложностью и временными ограничениями обмена фиата на криптовалюту на современном рынке, сохраняя при этом простоту и интуитивно понятный интерфейс для широкой аудитории, включая пользователей с небольшим опытом работы в сфере криптографии или вообще без него. В то же время интерфейс должен был обеспечивать ясность и доверие на каждом этапе процесса.",
            ],
            image: zippyFlowImage,
          },
        ],
      ],
      solutionHeading: "Решение и процесс",
      solutionParagraphs: [
        "Я упростил основной поток обмена, сократив его до минимального количества шагов, сделав процесс быстрым, линейным и предсказуемым.",
        "Разработал пользовательские потоки, ключевые экраны и дополнительные возможности, чтобы пользователи всегда понимали, что происходит на каждом этапе. Параллельно я создал набор пользовательского интерфейса для обеспечения согласованности и поддержки будущих разработок, уделяя особое внимание тому, как представляются суммы, ставки и сборы.",
      ],
      solutionImage: zippyUiKitImage,
      accordionHeading: "Экраны и результат",
      accordionItems: [
        {
          title: "Главный экран",
          description:
            "Первый экран не просит войти в аккаунт. Пользователь сразу вводит сумму, видит курс и только после этого идёт дальше к авторизации или регистрации. Сначала ценность, потом барьер. Это убирает главный источник отвала на входе в финансовый продукт.",
          images: zippyAccordionImages.main,
        },
        {
          title: "Профиль",
          description:
            "Функционал который команда хотела убрать из MVP я настоял на включении. Без истории транзакций и привязанных карт пользователь не может контролировать свои операции, а значит не доверяет продукту. Профиль закрывает этот gap: история обменов, карты, техподдержка и смена аккаунта всё в одном месте.",
          images: zippyAccordionImages.profile,
        },
        {
          title: "KYS",
          description:
            "Самый тревожный момент в крипто-продукте когда просят документы. Задача была не убрать этот шаг, а сделать так чтобы он не пугал. Верификация разбита на четыре последовательных шага: почта, страна, фото паспорта, селфи. Каждый шаг один экран, одно действие. Пользователь всегда знает где находится и что будет дальше.",
          images: zippyAccordionImages.kys,
        },
        {
          title: "Главный экран после верификации",
          description:
            "После верификации калькулятор остаётся центром экрана, но появляется контекст: какой аккаунт активен и с какой карты пройдёт списание. Пользователь видит всё необходимое для сделки в одном месте — курс, карту, сумму — и может сразу действовать.",
          images: zippyAccordionImages.afterKyc,
        },
        {
          title: "Экраны покупки и продажи валюты",
          description:
            "Два отдельных сценария с зеркальной логикой. При покупке пользователь отправляет рубли и получает USDT при продаже наоборот. После подтверждения суммы и карты один экран ожидания со статусом операции. Пользователь всегда знает что деньги в пути и когда ждать результат.",
          images: zippyAccordionImages.buySell,
        },
        {
          title: "Статусы",
          description:
            "Основные статусы приложения. Обработка платежа, успешная сделка, сервис недоступен, недоплата, таймаут, ошибка списания, ошибка загрузки. Каждый статус отдельный экран с понятным объяснением что произошло и что делать дальше. В финансовом продукте молчание системы в момент ошибки это потеря доверия навсегда.",
          images: zippyAccordionImages.statuses,
        },
        {
          title: "Email уведомления",
          description:
            "Два типа писем: код подтверждения при входе и детали транзакции после обмена. Минимум но по делу пользователь получает только то что нужно в нужный момент, без лишнего шума.",
          images: zippyAccordionImages.email,
        },
      ],
      resultParagraphs: [
        "В результате получается понятный интерфейс, который упрощает сложные финансовые процессы. Виджет легко интегрируется в банковскую среду, не нарушая ее логику.",
        "Упрощенные потоки и прозрачная информация помогают пользователям принимать решения с большей уверенностью. Проект также позволил быстро запустить MVP и заложил прочную основу для будущего масштабирования благодаря хорошо структурированному пользовательскому интерфейсу и системе дизайна.",
      ],
    },
    "travel-card": {
      tagline:
        "Запуск сервиса оформления зарубежных банковских карт для пользователей из РФ в условиях жёстких сроков, где нужно было быстро собрать понятный и доверительный пользовательский опыт для сложного финансового процесса",
      role: roleLabel,
      tags: travelCardTags,
      heroBanner: travelCardHeroBanner,
      introHeading: "Вводные данные",
      introRows: [
        [
          {
            title: "Моя роль и вклад",
            paragraphs: [
              "Я отвечал за дизайн продукта с нуля: от первых концептов до передачи макетов в разработку в сжатые сроки. Включался в проект на этапе, когда нужно было быстро собрать рабочий MVP, и выстроил ключевые пользовательские сценарии, интерфейс и визуальную логику продукта. Черновую основу интерфейса собрал с помощью AI-инструментов, после чего доработал её вручную и подготовил к продакшену. За 7–10 дней закрыл весь дизайн-контур: основные экраны, анкеты, баннеры и коммуникационные материалы.",
            ],
          },
          {
            title: "Проблема",
            paragraphs: [
              "Продукт решает нетривиальную задачу — оформление зарубежных банковских карт для пользователей из РФ, где процесс сам по себе сложный, многошаговый и требует доверия. При этом запуск нужно было сделать максимально быстро, без долгого ресёрча и классического продуктового цикла. Не было готовой дизайн-системы, структуры продукта и проверенных сценариев, всё нужно было собирать параллельно с разработкой. Главное было упростить сложный финансовый процесс и упаковать его в понятный пользовательский путь в условиях жёстких сроков.",
            ],
          },
        ],
      ],
      roleResultSection: {
        heading: "Решение",
        roleTitle: "Моя роль и вклад",
        roleList: [
          "Быстро собрал черновую визуальную основу продукта с помощью AI, чтобы сократить время на старт и сразу перейти к рабочему направлению",
          "Доработал интерфейс вручную: уточнил структуру экранов, пользовательские сценарии и привёл всё к цельному и понятному виду",
          "Спроектировал основные страницы продукта и ключевые шаги пользователя, включая анкету и базовый путь оформления",
          "Подготовил дополнительные материалы для запуска: баннеры, письма и сопутствующие элементы коммуникации",
          "Передал макеты в разработку в сжатые сроки, чтобы команда могла быстро собрать и выпустить MVP",
        ],
        resultTitle: "Результат",
        resultParagraphs: [
          "Продукт был запущен в формате MVP в течение 7–10 дней, что позволило быстро выйти на рынок и начать проверку гипотез. Несмотря на сжатые сроки, удалось собрать понятный и последовательный пользовательский опыт без ощущения «сырого» продукта. Интерфейс упростил восприятие сложной услуги и снизил барьер входа для пользователей.",
        ],
        ctaLabel: "Перейти на сайт travel card",
        ctaHref: travelCardCtaHref,
      },
    },
  },
};

const enContent: Content = {
  profile: {
    name: "Marchenko Andrey",
    legalName: "Marchenko Andrey",
    greeting: "Hello! My name is Marchenko Andrey",
    bio: "I am a digital product designer with 5 years of experience in fintech and IT. I have worked with teams from Europe and South Africa. I operate at the intersection of design and product, believing that a designer is a professional who understands design as a combination of skills and tools, concepts, practices, and is capable of executing any task, whether product-related or communicative.",
    footerThanks: "Thank you for viewing!",
  },
  cases: [
    {
      slug: "cycle",
      title: "Cycle (Acquire POS)",
      description:
        "I worked at the intersection of the product team, development, and business direction. I interacted with product managers, backend and embedded developers, as well as participants responsible for the payment infrastructure.",
      tags: ["UX/UI", "Product design", "Fintech"],
      cover: cycleCover,
    },
    {
      slug: "zippy",
      title: "Zippy (Crypto exchanger)",
      description:
        "Zippy is a service for buying and selling USDT for rubles. Target audience: people with minimal experience in crypto who need to quickly and safely buy or sell currency.",
      tags: ["UX/UI", "Mobile", "Crypto", "Product design"],
      cover: zippyCover,
    },
    {
      slug: "travel-card",
      title: "Travel card",
      description:
        "A service for issuing foreign bank cards for users from Russia under tight deadlines, where it was necessary to quickly create a clear and trustworthy user experience for a complex financial process.",
      tags: ["UX/UI", "Product design", "Claude", "AI"],
      cover: travelCardCover,
    },
    {
      slug: "croc-k2",
      title: "CROC, K2 & Other brands",
      description:
        "4 years of visual production in an enterprise environment: conferences, branding, presentations, events. Teamwork, many brands, high volume.",
      tags: ["Communication design", "IT", "AI", "UX/UI", "Product design"],
      cover: crocCover,
    },
  ],
  profileTags,
  socialLinks,
  caseDetails: {
    cycle: {
      tagline:
        "Projects and tasks within the Cycle Bit company, showcasing my role in product and UX/UI design.",
      role: roleLabel,
      tags: cycleTags,
      heroBanner: cycleHeroBanner,
      introHeading: "Introductions",
      introRows: [
        [
          {
            title: "Context and specifics",
            paragraphs: [
              "I worked at the intersection of the product team, development, and business direction. I interacted with product managers, backend and embedded developers, as well as participants responsible for payment infrastructure and merchant operational processes.",
            ],
          },
          {
            title: "My role and contribution",
            paragraphs: [
              "I was responsible for rebuilding the product interface: redesigned key user scenarios, updated the visual system, and implemented a UI Kit to make the product more cohesive and scalable.",
            ],
          },
        ],
        [
          {
            title: "Problem",
            paragraphs: [
              "The interface was built on outdated devices, and was also fragmented and insufficiently consistent, causing key payment workflows to be overloaded and not always clear to users in real operational conditions.",
            ],
            image: cycleProblemImage,
          },
          {
            title: "Goals",
            paragraphs: [
              "The main goal of the Cycle POS redesign was to simplify and speed up everyday operations within the system: to make payment, order management, receipts, and catalogs more understandable and consistent for the user. At the same time, it was important to enhance interface consistency through the implementation of a UI Kit and a systematic approach to design, simplify onboarding and device registration, and prepare the product for further scaling without losing the quality of user experience.",
            ],
          },
        ],
      ],
      solutionHeading: "Solution",
      solutionParagraphs: [
        "The main focus of the work was to rebuild the interface system around real user tasks. I redesigned key flows, restructured the logic of screens and states, updated the visual system, and laid a more unified approach to components through the UI Kit.",
        "I redesigned key user scenarios, simplified the interface logic, and updated the product's visual system. Additionally, I implemented a UI Kit to establish consistent patterns and simplify product development. I also designed and implemented new product scenarios related to tips: added the ability to set default tips linked to the device and synchronized with the personal account, realized tips as a separate entity in receipts and accounting. I worked on their display in details, reports, and total amounts, return scenarios with tips, custom values, receipt printing, and a separate section in the personal account with statistics and analytics.",
        "I also updated the registration process at the checkout, simplifying user entry into the system, participated in refining the inventory accounting section and working with product modifiers, which helped make everyday operations clearer and faster.",
      ],
      solutionImage: cycleSolutionImage,
      accordionHeading: "Working with internal services:",
      accordionItems: [
        {
          title: "Onboarding",
          description:
            "I redesigned the onboarding: designed registration, first login, and initial device setup scenarios. I simplified the structure of steps, removed unnecessary actions, and made the process clearer so that users could start working with the system more quickly.",
          images: cycleAccordionImages.onboarding,
        },
        {
          title: "Transaction history",
          description:
            "The section with the history of operations was also redesigned: I updated the structure and interaction with the calendar, which made searching and navigating transactions noticeably faster and more convenient for users.",
          images: cycleAccordionImages.transactions,
        },
        {
          title: "Free sales",
          description:
            "I designed and illustrated screens for the free sales scenario, simplifying the process of adding products and conducting transactions in real checkout usage conditions.",
          images: cycleAccordionImages.freeSale,
        },
        {
          title: "Working with catalogs",
          description:
            "I designed and illustrated screens for scenarios involving catalogs, considering search, viewing modes, and all key states to make working with products fast and predictable.",
          images: cycleAccordionImages.catalog,
        },
        {
          title: "Creating and editing receipts",
          description:
            "I designed and illustrated screens for adding products to receipts, simplifying the creation process and minimizing unnecessary user actions.",
          images: cycleAccordionImages.onboarding,
        },
        {
          title: "Working with orders",
          description:
            "I redesigned the interface for working with orders: designed key scenarios for creating, editing, and managing orders. I simplified the logic and structure of screens to speed up user work and reduce errors.",
          images: cycleAccordionImages.onboarding,
        },
      ],
      resultStatsSection: {
        paragraph:
          "As a result, the product received a more modern, understandable, and cohesive interface, where key scenarios became easier and more logical to perceive. Importantly, the effect here is not only visual: due to the updated user flows and the implementation of the UI Kit, the product became a more stable system that is easier to maintain and scale further. For the business, this means a more convenient working tool, and for the team, a clearer foundation for further development.",
        stats: [
          {
            value: "150+",
            description:
              "screens redesigned and created from scratch — onboarding, sales, catalog, orders, personal account, transaction history",
          },
          {
            value: "5-6",
            description:
              "steps in the final onboarding — reduced from an overloaded non-linear scenario",
          },
          {
            value: "UI Kit",
            description:
              "implemented from scratch — unified the visual system and laid the foundation for scaling the product",
          },
          {
            value: "6",
            description:
              "redesigned within a single product — onboarding, transaction history, free sales, catalogs, receipts, orders",
          },
        ],
      },
    },
    zippy: {
      tagline:
        "A service for buying and selling USDT for rubles. Target audience: people with minimal experience in crypto who need to quickly and safely buy or sell currency. The product is at the stage of closed MVP testing.",
      role: roleLabel,
      tags: zippyTags,
      heroBanner: zippyHeroBanner,
      introHeading: "Introductions",
      introRows: [
        [
          {
            title: "Competitive analysis",
            paragraphs: [
              "We looked at Mercuryo and similar services. Mercuryo is good for its minimalism and the speed of its widget, but it is designed for integration into third-party products rather than standalone use. There is no personal account, transaction history, or full profile. For a user who wants to control their operations, this is a dead end. Zippy was meant to fill this gap: the same simplicity at the entry point, but a complete product inside.",
              "And Bybit is one of the most popular ways to buy USDT for rubles in Russia. But it is a P2P platform: the buyer chooses a seller from a list, negotiates the terms, and waits for manual confirmation. This is fine for an experienced user. For someone buying crypto for the first time, it's stressful: it's unclear whom to trust, what to do if something goes wrong, and there's no sense that someone is backing you up.",
            ],
          },
          {
            title: "Problem",
            paragraphs: [
              "The task was to develop a standalone product for cryptocurrency exchange that would allow users to quickly convert rubles into cryptocurrency.",
              "The main task was to tackle the complexity and time constraints of exchanging fiat for cryptocurrency in the modern market while maintaining simplicity and an intuitive interface for a wide audience, including users with little or no experience in crypto. At the same time, the interface needed to provide clarity and trust at every stage of the process.",
            ],
            image: zippyFlowImage,
          },
        ],
      ],
      solutionHeading: "Solution and process",
      solutionParagraphs: [
        "I simplified the main exchange flow, reducing it to the minimum number of steps, making the process fast, linear, and predictable.",
        "I developed user flows, key screens, and additional features so that users always understood what was happening at each stage. At the same time, I created a UI kit to ensure consistency and support future developments, paying special attention to how amounts, rates, and fees are presented.",
      ],
      solutionImage: zippyUiKitImage,
      accordionHeading: "Screens and results",
      accordionItems: [
        {
          title: "Main screen",
          description:
            "The first screen does not ask the user to log in. The user immediately enters the amount, sees the rate, and only then proceeds to authorization or registration. First value, then barrier. This removes the main source of drop-off at the entry point of a financial product.",
          images: zippyAccordionImages.main,
        },
        {
          title: "Profile",
          description:
            "The functionality that the team wanted to remove from the MVP, I insisted on including. Without transaction history and linked cards, the user cannot control their operations, and therefore does not trust the product. The profile closes this gap: exchange history, cards, support, and account switching all in one place.",
          images: zippyAccordionImages.profile,
        },
        {
          title: "KYS",
          description:
            "The most alarming moment in a crypto product is when documents are requested. The task was not to eliminate this step but to ensure it does not scare users. Verification is broken down into four sequential steps: email, country, passport photo, selfie. Each step is one screen, one action. The user always knows where they are and what will happen next.",
          images: zippyAccordionImages.kys,
        },
        {
          title: "Main screen after verification",
          description:
            "After verification, the calculator remains the center of the screen, but context appears: which account is active and from which card the charge will be made. The user sees everything necessary for the transaction in one place — the rate, card, amount — and can act immediately.",
          images: zippyAccordionImages.afterKyc,
        },
        {
          title: "Currency purchase and sale screens",
          description:
            "Two separate scenarios with mirrored logic. When buying, the user sends rubles and receives USDT; when selling, the opposite occurs. After confirming the amount and card, there is one waiting screen with the status of the operation. The user always knows that the money is on its way and when to expect the result.",
          images: zippyAccordionImages.buySell,
        },
        {
          title: "Statuses",
          description:
            "The main statuses of the application. Processing payment, successful transaction, service unavailable, underpayment, timeout, charge error, loading error. Each status is a separate screen with a clear explanation of what happened and what to do next. In a financial product, silence from the system at the moment of error is a loss of trust forever.",
          images: zippyAccordionImages.statuses,
        },
        {
          title: "Email notifications",
          description:
            "Two types of emails: confirmation code upon login and transaction details after the exchange. Minimal but to the point; the user receives only what is needed at the right moment, without unnecessary noise.",
          images: zippyAccordionImages.email,
        },
      ],
      resultParagraphs: [
        "As a result, a clear interface is created that simplifies complex financial processes. The widget easily integrates into the banking environment without disrupting its logic.",
        "Simplified flows and transparent information help users make decisions with greater confidence. The project also allowed for a quick MVP launch and laid a solid foundation for future scaling due to a well-structured user interface and design system.",
      ],
    },
    "travel-card": {
      tagline:
        "Launch of a service for issuing foreign bank cards for users from Russia under tight deadlines, where it was necessary to quickly create a clear and trustworthy user experience for a complex financial process.",
      role: roleLabel,
      tags: travelCardTags,
      heroBanner: travelCardHeroBanner,
      introHeading: "Input data",
      introRows: [
        [
          {
            title: "My role and contribution",
            paragraphs: [
              "I was responsible for product design from scratch: from the initial concepts to handing over layouts for development under tight deadlines. I joined the project at a stage when it was necessary to quickly assemble a working MVP, and I built key user scenarios, the interface, and the visual logic of the product. I created a rough interface foundation using AI tools, after which I refined it manually and prepared it for production. I completed the entire design outline in 7–10 days: main screens, forms, banners, and communication materials.",
            ],
          },
          {
            title: "Problem",
            paragraphs: [
              "The product addresses a non-trivial task — issuing foreign bank cards for users from Russia, where the process itself is complex, multi-step, and requires trust. At the same time, the launch had to be done as quickly as possible, without lengthy research and the classic product cycle. There was no ready-made design system, product structure, or validated scenarios; everything had to be assembled in parallel with development. The main goal was to simplify the complex financial process and package it into a clear user journey under tight deadlines.",
            ],
          },
        ],
      ],
      roleResultSection: {
        heading: "Solution",
        roleTitle: "My role and contribution",
        roleList: [
          "Quickly assembled a rough visual foundation of the product using AI to reduce startup time and immediately move to a working direction.",
          "Refined the interface manually: clarified screen structure, user scenarios, and brought everything to a cohesive and understandable appearance.",
          "Designed the main product pages and key user steps, including the form and basic application process.",
          "Prepared additional materials for launch: banners, emails, and accompanying communication elements.",
          "Handed over layouts for development under tight deadlines, so the team could quickly assemble and release the MVP.",
        ],
        resultTitle: "Result",
        resultParagraphs: [
          'The product was launched in MVP format within 7–10 days, allowing for a quick market entry and hypothesis testing. Despite the tight deadlines, a clear and consistent user experience was achieved without the feeling of a "raw" product. The interface simplified the perception of a complex service and lowered the entry barrier for users.',
        ],
        ctaLabel: "Go to the travel card website",
        ctaHref: travelCardCtaHref,
      },
    },
  },
};

const content: Record<Lang, Content> = { ru: ruContent, en: enContent };

export function getContent(lang: Lang): Content {
  return content[lang];
}
