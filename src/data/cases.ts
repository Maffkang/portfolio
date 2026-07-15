export const profile = {
  name: "Marchenko Andrey",
  fullNameRu: "Марченко Андрей",
  greeting: "Привет! Меня зовут Марченко Андрей",
  bio: "Я UX/UI дизайнер с 5 годами опыта в fintech, IT. Работал с командами из Европы и ЮАР. Работаю на стыке дизайна и продукта, думаю, что дизайнер это профессионал который понимает дизайн как совокупность навыков и инструментов, концепций, практик, и способен выполнять любую работу как продуктовую, так и коммуникационную.",
  footerThanks: "Спасибо за просмотр!",
};

export type CaseItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
};

export const cases: CaseItem[] = [
  {
    slug: "cycle",
    title: "Cycle (Acquire POS)",
    description:
      "Я работал на пересечении продуктовой команды, разработки и бизнес-направления. Взаимодействовал с продакт-менеджерами, backend и embedded-разработчиками, а также с участниками, отвечающими за платёжную инфраструктуру.",
    tags: ["UX/UI", "Product design", "Fintech"],
    cover: "/images/covers/cycle.png",
  },
  {
    slug: "zippy",
    title: "Zippy (Crypto exchanger)",
    description:
      "Zippy — сервис покупки и продажи USDT за рубли. Целевая аудитория: люди с минимальным опытом в крипто которым нужно быстро и безопасно купить или продать валюту.",
    tags: ["UX/UI", "Mobile", "Crypto", "Product design"],
    cover: "/images/covers/zippy.png",
  },
  {
    slug: "travel-card",
    title: "Travel card",
    description:
      "Сервис оформления зарубежных банковских карт для пользователей из РФ в условиях жёстких сроков, где нужно было быстро собрать понятный и доверительный пользовательский опыт для сложного финансового процесса",
    tags: ["UX/UI", "Product design", "Claude", "AI"],
    cover: "/images/covers/travel-card.png",
  },
  {
    slug: "croc-k2",
    title: "CROC, K2 & Other brands",
    description:
      "4 года визуального производства в enterprise-среде: конференции, айдентика, презентации, мероприятия. Работа в команде, много брендов, большой поток.",
    tags: ["Communication design", "IT", "AI", "UX/UI", "Product design"],
    cover: "/images/covers/croc.png",
  },
];

export const profileTags = [
  "UX/UI",
  "Graphic design",
  "Fintech",
  "IT",
  "WEB3",
];

export const socialLinks = [
  { label: "Telegram", href: "https://t.me/maffkang" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/andrew-marchenko-uxuidesign",
  },
  { label: "Email", href: "mailto:andryshardrs@gmail.com" },
];
