import EducationList from "@/components/sections/about/education-list";
import ExperienceList from "@/components/sections/about/experience-list";
import HonorsList from "@/components/sections/about/honors-list";

import {
  InstagramLogoIcon,
  Link2Icon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import {
  Activity,
  Baby,
  Bed,
  BookOpen,
  Briefcase,
  Clock,
  GraduationCap,
  MapPin,
  Monitor,
  MonitorSmartphone,
  Moon,
  PhoneIcon,
  Trophy,
  Volume2,
} from "lucide-react";
import { TabConfig } from "./types";

export const NAV_ITEMS: { title: string; path: string }[] = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "درباره من",
    path: "/about",
  },
  {
    title: "تماس با ما",
    path: "/contact",
  },
  {
    title: "وبلاگ",
    path: "/blogs",
  },
  {
    title: "مقالات",
    path: "/articles",
  },
];

export const FOOTER_ITEMS: Record<
  string,
  { title: string; path?: string; icon?: React.ReactNode; value?: string }[]
> = {
  brand: [
    {
      title: "دکتر ویدا ایمانی",
    },
    {
      title: "فلوشیپ فوق تخصصی اختلالات خواب کودکان و بزرگسالان",
    },
  ],
  nav: [
    {
      title: "صفحات",
    },
    {
      title: "خانه",
      path: "/",
    },
    {
      title: "درباره من",
      path: "/about",
    },
    {
      title: "تماس با ما",
      path: "/contact",
    },
    {
      title: "وبلاگ",
      path: "/blogs",
    },
  ],
  contact: [
    {
      title: "پل های ارتباطی",
    },
    {
      title: "اینستاگرام",
      icon: <InstagramLogoIcon width={20} height={20} />,
      value: "https://www.instagram.com/dr.imani.sleepclinic",
    },
    {
      title: "۰۴۱-۳۳۳۵۰۳۵۷",
      icon: <Link2Icon width={20} height={20} />,
      value: "tel:041-3335-0357",
    },
    {
      title: "تبریز، خیابان آزادی، سه راه گلگشت، ساختمان گلگشت، طبقه چهارم",
      icon: <SewingPinIcon width={20} height={20} />,
    },
  ],
};

export const SERVICES_ITEMS: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  details?: string[];
  cta?: { label: string; url: string };
}[] = [
  {
    title: "درمان ریشه‌ای بی‌خوابی",
    desc: "با بهره‌گیری از متدهای نوین و مورد تایید جهانی",
    icon: <Bed className="h-8 w-8 text-blue-500" />,
    details: [
      "تحلیل دقیق الگوهای خواب شبانه",
      "روان‌درمانی شناختی-رفتاری مخصوص بی‌خوابی (CBT-I)",
      "درمان مؤثر بدون وابستگی به داروهای خواب‌آور",
    ],
    cta: { label: "مشاوره رایگان", url: "/contact" },
  },
  {
    title: "درمان آپنه خواب",
    desc: "آپنه، یکی از مهم‌ترین عوامل خروپف، فشار خون و خستگی مزمن",
    icon: <Activity className="h-8 w-8 text-red-500" />,
    details: [
      "تشخیص دقیق با استفاده از تست خواب پیشرفته",
      "درمان با CPAP و راهکارهای جایگزین متناسب با شرایط بیمار",
      "بهبود کیفیت خواب و کاهش خطرات قلبی-عروقی",
    ],
    cta: { label: "اطلاعات بیشتر", url: "/services/apnea" },
  },
  {
    title: "مانیتورینگ و تحلیل خواب",
    desc: "ارزیابی جامع خواب با تجهیزات روز دنیا",
    icon: <Monitor className="h-8 w-8 text-green-500" />,
    details: [
      "تست خواب در کلینیک یا منزل با دستگاه‌های قابل حمل",
      "تحلیل دقیق امواج مغزی، تنفس، ضربان قلب و حرکات",
      "ارائه گزارش تخصصی و توصیه‌های درمانی فردمحور",
    ],
    cta: { label: "رزرو تست خواب", url: "/booking" },
  },
  {
    title: "درمان اختلالات ریتم شبانه‌روزی",
    desc: "برای افرادی با خواب نامنظم، شیفت‌کاران و دانشجویان",
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    details: [
      "تنظیم ساعت بیولوژیک بدن با نوردرمانی و برنامه‌ریزی خواب",
      "بررسی سطح ترشح هورمون ملاتونین",
      "ارائه برنامه شخصی‌سازی‌شده برای تطبیق بهتر با ریتم طبیعی بدن",
    ],
  },
  {
    title: "آموزش و مشاوره خواب سالم",
    desc: "افزایش آگاهی عمومی برای پیشگیری از اختلالات خواب",
    icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    details: [
      "آموزش اصول خواب سالم به خانواده‌ها، کودکان، دانش‌آموزان و کارکنان",
      "برگزاری جلسات پیشگیرانه و جلسات گروهی",
      "ارائه بروشورهای آموزشی و کارگاه‌های تخصصی",
    ],
  },
  {
    title: "مشاوره آنلاین با متخصص خواب",
    desc: "دسترسی سریع و آسان به پزشک، بدون نیاز به مراجعه حضوری",
    icon: <MonitorSmartphone className="h-8 w-8 text-green-500" />,
    details: [
      "ارزیابی اولیه و پیگیری آنلاین از طریق پلتفرم‌های معتبر (واتساپ، گوگل میت و...)",
      "ارسال مدارک و فرم‌های پزشکی به‌صورت دیجیتال",
      "صرفه‌جویی در زمان، هزینه و تسهیل روند درمان",
    ],
    cta: { label: "شروع ویزیت آنلاین", url: "/contact" },
  },
  {
    title: "درمان خروپف مزمن",
    desc: "خروپف شدید می‌تواند نشانه‌ی آپنه خواب یا انسداد مجاری تنفسی باشد",
    icon: <Volume2 className="h-8 w-8 text-orange-500" />,
    details: [
      "ارزیابی کامل ساختار تنفسی و الگوی خواب",
      "استفاده از دستگاه‌های کمک‌تنفسی یا ابزار دهانی (دهان‌بندهای مخصوص)",
      "ارائه توصیه‌های تخصصی برای کاهش خروپف از طریق سبک زندگی و پوزیشن خواب",
    ],
    cta: { label: "رزرو مشاوره", url: "/contact" },
  },
  {
    title: "ارزیابی خواب کودکان و نوجوانان",
    desc: "خواب سالم برای رشد ذهنی و جسمی کودکان ضروری است",
    icon: <Baby className="h-8 w-8 text-pink-500" />,
    details: [
      "شناسایی اختلالاتی مانند شب‌ادراری، کابوس، پرتحرکی در خواب",
      "تست خواب در محیط مناسب کودکان همراه با والدین",
      "ارائه راهکارهای رفتاری و تغذیه‌ای برای بهبود خواب",
    ],
    cta: { label: "مشاوره والدین", url: "/services/child-sleep" },
  },
  {
    title: "درمان خواب‌آلودگی روزانه و نارکولپسی",
    desc: "خستگی مفرط روزانه می‌تواند ناشی از بیماری‌های عصبی خواب باشد",
    icon: <Moon className="h-8 w-8 text-teal-500" />,
    details: [
      "تشخیص افتراقی بین نارکولپسی، کم‌خوابی، و سایر اختلالات",
      "استفاده از تست خواب روزانه (MSLT) در صورت نیاز",
      "ارائه درمان ترکیبی دارویی و رفتاری برای کنترل علائم",
    ],
    cta: { label: "درخواست ارزیابی تخصصی", url: "/services/narcolepsy" },
  },
];

export const FAQ_ITEMS: { title: string; desc?: string }[] = [
  {
    title: "سوالات متداول",
  },
  {
    title: "تست خواب چیست؟",
    desc: "تست خواب یا پلی‌سومنـوگرافی، استاندارد طلایی برای تشخیص بسیاری از اختلالات خواب است. این تست چندپارامتری با ثبت فعالیت‌های فیزیولوژیکی بدن در طول خواب، به متخصص کمک می‌کند علت مشکلات خواب را به‌دقت تشخیص دهد.",
  },
  {
    title: "در تست خواب چه فاکتورهایی بررسی می‌شود؟",
    desc: "مراحل مختلف خواب (خواب سبک، عمیق، و مرحله رویا)، امواج مغزی، ضربان قلب، حرکات عضلانی و چشمی، جریان هوای بینی و دهان، حرکات قفسه سینه و شکم، درصد اکسیژن خون، و وضعیت بدن هنگام خواب ثبت و تحلیل می‌شوند.",
  },
  {
    title: "تست خواب چگونه انجام می‌شود؟",
    desc: "تست خواب در محیطی آرام و شبیه فضای خانه، در کلینیک و زیر نظر تکنسین مجرب انجام می‌شود. هیچ‌گونه تزریق یا ورود به دستگاه وجود ندارد؛ فقط سنسورهایی سبک روی بدن متصل می‌شوند و فرد در ساعات معمول خواب خود استراحت می‌کند.",
  },
  {
    title: "آیا تست خواب درد دارد یا با اشعه انجام می‌شود؟",
    desc: "خیر. تست خواب کاملاً غیرتهاجمی و بدون درد است. مانند گرفتن نوار قلب، فقط چند سنسور روی پوست متصل می‌شود و هیچ‌گونه اشعه‌ای استفاده نمی‌شود. فرد می‌تواند آزادانه بخوابد و جابه‌جا شود.",
  },
  {
    title: "تست خواب برای چه مواردی توصیه می‌شود؟",
    desc: "در موارد مشکوک به آپنه خواب (قطع تنفس)، یا علائمی مانند خر و پف، خواب‌آلودگی روزانه، خستگی پس از بیداری، بی‌قراری در خواب، فشار خون بالا، سردردهای صبحگاهی، مشکلات تمرکز و حافظه، یا پرتحرکی در کودکان، این تست کاربرد دارد.",
  },
  {
    title: "آیا برای انجام تست خواب نیاز به ارجاع پزشک دارم؟",
    desc: "خیر، در بسیاری از موارد می‌توانید مستقیماً با کلینیک تماس گرفته و نوبت تست خواب دریافت کنید. اما در برخی شرایط، داشتن معرفی‌نامه از پزشک متخصص کمک می‌کند روند تشخیص سریع‌تر طی شود.",
  },
  {
    title: "قبل از انجام تست خواب چه نکاتی را باید رعایت کنم؟",
    desc: "بهتر است در روز تست، از مصرف کافئین و الکل خودداری کنید، موها را تمیز و خشک نگه دارید (بدون ژل یا اسپری)، و لباس راحت برای خواب همراه داشته باشید. تیم ما قبل از تست، راهنمای کامل آماده‌سازی را در اختیار شما قرار می‌دهد.",
  },
  {
    title: "نتایج تست خواب چه زمانی آماده می‌شود؟",
    desc: "نتایج تست پس از تحلیل توسط متخصص خواب، معمولاً طی ۳ تا ۵ روز کاری آماده می‌شود. سپس جلسه‌ای برای توضیح نتایج و ارائه برنامه درمانی برگزار خواهد شد.",
  },
  {
    title: "آیا تست خواب در خانه هم قابل انجام است؟",
    desc: "بله. برای برخی بیماران، بسته به شرایط، امکان انجام تست خواب خانگی (Home Sleep Test) وجود دارد. این نوع تست ساده‌تر است اما اطلاعات محدودتری نسبت به تست کامل کلینیکی ارائه می‌دهد. انتخاب روش بر اساس نظر پزشک انجام می‌شود.",
  },
];

export const ABOUT_ME_ITEMS = {
  experience: [
    {
      position: "فوق تخصص خواب",
      hospital: "کلینیک خواب دکتر ایمانی",
      years: "۲۰۱۷ - تا کنون",
    },
    {
      position: "فوق تخصص خواب",
      hospital: "ویزیت آنلاین",
      years: "۲۰۲۲ - تا کنون",
    },
    {
      position: "متخصص خواب",
      hospital: "بیمارستان آجی بادم و 9 ایلول",
      years: "۲۰۱۹ - ۲۰۲۲",
    },
    {
      position: "متخصص کودکان",
      hospital: "بیمارستان علوی",
      years: "۲۰۱۳ - ۲۰۱۸",
    },
    {
      position: "متخصص کودکان",
      hospital: "بیمارستان علوی",
      years: "۲۰۱۳ - ۲۰۱۸",
    },
  ],
  education: [
    {
      degree: "فلوشیپ اختلالات خواب",
      institution: "دانشگاه آجی بادم ترکیه",
      years: "۲۰۱۹ - ۲۰۲۰",
      description: "Specialized in interventional cardiology techniques",
      details: "Specialized in interventional cardiology techniques",
    },
    {
      degree: "فلوشیپ پزشکی خواب",
      institution: "دانشگاه بابایی قزوین",
      years: "۲۰۱۷ - ۲۰۱۸",
      description: "Specialized in interventional cardiology techniques",
      details: "Specialized in interventional cardiology techniques",
    },
    {
      degree: "متخصص کودکان",
      institution: "دانشگاه علوم پزشکی تبریز",
      years: "۲۰۱۱ - ۲۰۱۴",
      description: "Specialized in interventional cardiology techniques",
      details: "Specialized in interventional cardiology techniques",
    },
    {
      degree: "پزشک عمومی",
      institution: "دانشگاه علوم پزشکی تبریز",
      years: "۲۰۰۱ - ۲۰۰۸",
      description: "Specialized in interventional cardiology techniques",
      details: "Specialized in interventional cardiology techniques",
    },
  ],
  honors: [
    {
      title: "یک درصد پژوهشگر و دانشمندان برتر",
      year: "۲۰۲۴",
    },
    {
      title: "بانوی موفق و کارافرین ایران در سال",
      year: "۱۴۰۳",
    },
    {
      title: "جزو پژوهشگران افتخاری",
      year: "۲۲۲۲",
      description: " دانشگاه استنفورد",
    },
    {
      title: "نویسنده فصل خواب کتاب",
      year: "۲۲۲۲",
      description: "انتشارات Springer",
    },
    {
      title: "جوانترین سخنران و پزشک شاخص و نویسنده برترین مقاله",
      year: "۱۳۹۷",
      description: "در بین متخصصین کودکان",
    },
    {
      title: "پزشک پیشرو و نویسنده برترین مقاله پژوهشی",
      year: "۱۳۹۷",
      description: "چهلمین سالگرد دکتر محمد قریب",
    },
    {
      title: "عضو‌کمیته علمی سمینار و سخنرانی",
      year: "۱۳۹۷",
      description: "استانبول - پکن - دهلی",
    },
    {
      title: "برگزارکننده و دبیر سمینار",
      year: "۱۴۰۴",
      description: "تازه های بیماریهای قلبی و اختلالات خواب",
    },
  ],
};

export const ABOUT_TABS: TabConfig[] = [
  {
    value: "تحصیلات",
    label: "تحصیلات",
    icon: <GraduationCap className="h-4 w-4" />,
    component: <EducationList />,
  },
  {
    value: "سوابق کاری",
    label: "سوابق کاری",
    icon: <Briefcase className="h-4 w-4" />,
    component: <ExperienceList />,
  },
  {
    value: "افتخارات",
    label: "افتخارات",
    icon: <Trophy className="h-4 w-4" />,
    component: <HonorsList />,
  },
];

export const CONTACT_ITEMS: {
  title: string;
  desc?: string;
  value?: string;
  icon?: React.ReactNode;
}[] = [
  {
    title: "در تماس باشید",
    desc: "برای دریافت اطلاعات، رزرو نوبت یا ارتباط با کلینیک خواب، از طریق اطلاعات تماس زیر اقدام کنید.",
  },
  {
    title: "اینستاگرام",
    desc: "dr.imani.sleepclinic@",
    value: "https://www.instagram.com/dr.imani.sleepclinic",
    icon: <InstagramLogoIcon height={30} width={30} />,
  },
  {
    title: "شماره تماس",
    desc: "۰۴۱-۳۳۳۵۰۳۵۷",
    value: "tel:041-3335-0357",
    icon: <PhoneIcon height={30} width={30} />,
  },
  {
    title: "آدرس",
    desc: "تبریز، خیابان آزادی، سه راه گلگشت، ساختمان گلگشت، طبقه چهارم",
    icon: <MapPin height={30} width={30} />,
  },
];
