import {
  INotification,
  IsidebarBtn,
  IToggleBtns,
  IVideo,
  IVideoById,
} from "../interfaces";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
export const notifications: INotification[] = [
  {
    id: 1,
    channelImage:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    videoImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    text: "تم رفع فيديو جديد: 'كيفية إتقان React في عام 2024'",
    videoId: 101,
  },
  {
    id: 2,
    channelImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    videoImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    text: "شاهد أحدث درس تعليمي: 'فهم أساسيات TypeScript'",
    videoId: 102,
  },
  {
    id: 3,
    channelImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    videoImage: "https://images.unsplash.com/photo-1503322747342-2a8283b56b35",
    text: "لا تفوت جلسة البرمجة المباشرة عن 'React Hooks'!",
    videoId: 103,
  },
  {
    id: 4,
    channelImage:
      "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    videoImage: "https://images.unsplash.com/photo-1522770174360-9c2f2a2c6c6e",
    text: "دورة جديدة متاحة: 'تقنيات CSS المتقدمة'",
    videoId: 104,
  },
  {
    id: 5,
    channelImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    videoImage: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    text: "قناتك المفضلة أصدرت فيديو جديد: 'أفضل ممارسات JavaScript'",
    videoId: 105,
  },
  {
    id: 6,
    channelImage:
      "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    videoImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    text: "ابقَ على اطلاع مع حلقتنا الجديدة عن 'اتجاهات تطوير الويب'.",
    videoId: 106,
  },
  {
    id: 7,
    channelImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    videoImage: "https://images.unsplash.com/photo-1503322747342-2a8283b56b35",
    text: "إصدار جديد: 'تصميم تخطيطات متجاوبة باستخدام Flexbox'.",
    videoId: 107,
  },
  {
    id: 8,
    channelImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    videoImage: "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    text: "استكشف أحدث نظرة عميقة لدينا في 'React Suspense'.",
    videoId: 108,
  },
  {
    id: 9,
    channelImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    videoImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "انضم إلى مناقشتنا عن 'Next.js للمبتدئين'.",
    videoId: 109,
  },
  {
    id: 10,
    channelImage:
      "https://images.unsplash.com/photo-1522770174360-9c2f2a2c6c6e",
    videoImage: "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    text: "درس جديد: 'استكشاف ميزات JavaScript الحديثة'.",
    videoId: 110,
  },
  {
    id: 11,
    channelImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    videoImage: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    text: "قناتك المفضلة أصدرت فيديو جديد: 'أفضل ممارسات JavaScript'",
    videoId: 111,
  },
  {
    id: 12,
    channelImage:
      "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    videoImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    text: "ابقَ على اطلاع مع حلقتنا الجديدة عن 'اتجاهات تطوير الويب'.",
    videoId: 112,
  },
  {
    id: 13,
    channelImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    videoImage: "https://images.unsplash.com/photo-1503322747342-2a8283b56b35",
    text: "إصدار جديد: 'تصميم تخطيطات متجاوبة باستخدام Flexbox'.",
    videoId: 113,
  },
  {
    id: 14,
    channelImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    videoImage: "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    text: "استكشف أحدث نظرة عميقة لدينا في 'React Suspense'.",
    videoId: 114,
  },
  {
    id: 15,
    channelImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    videoImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "انضم إلى مناقشتنا عن 'Next.js للمبتدئين'.",
    videoId: 115,
  },
  {
    id: 16,
    channelImage:
      "https://images.unsplash.com/photo-1522770174360-9c2f2a2c6c6e",
    videoImage: "https://images.unsplash.com/photo-1534081331911-86f6c96286b5",
    text: "درس جديد: 'استكشاف ميزات JavaScript الحديثة'.",
    videoId: 116,
  },
];

export const toggleBtns: IToggleBtns[] = [
  { value: "all_content", text: "كلّ المحتوى" },
  { value: "music", text: "موسيقى" },
  { value: "collections", text: "تشكيلات" },
  { value: "podcasts", text: "ملفات البودكاست" },
  { value: "live", text: "مباشر" },
  { value: "events", text: "الفعاليات" },
  { value: "videos", text: "فيديوهات" },
  { value: "shorts", text: "القصيرة" },
];

export const sidebarBtns: IsidebarBtn[] = [
  { value: "home", text: "الصفحة الرئيسية", icon: HomeIcon },
  { value: "shorts", text: "Shorts", icon: WhatshotIcon },
  { value: "subscriptions", text: "الاشتراكات", icon: SubscriptionsIcon },
  { value: "history", text: "السجلّ", icon: HistoryIcon },
  { value: "playlists", text: "قوائم التشغيل", icon: PlaylistPlayIcon },
  { value: "your_videos", text: "فيديوهاتك", icon: VideoLibraryIcon },
  { value: "watch_later", text: "المشاهدة لاحقًا", icon: WatchLaterIcon },
  {
    value: "liked_videos",
    text: "الفيديوهات التي أعجبتني",
    icon: ThumbUpAltIcon,
  },
];

export const videoData: IVideo[] = [
  {
    id: 1,
    videoImage:
      "https://cdn.pixabay.com/photo/2023/02/16/03/43/music-player-7792956_1280.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2023/07/10/18/59/bird-8118926_640.jpg",
    title: "أفضل 10 أغاني موسيقية لعام 2024",
    time: "3:45",
    data: "2024-11-28",
    numofwatch: 123456,
    channelName: "عالم الموسيقى",
    category: "music",
  },
  {
    id: 2,
    videoImage:
      "https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2020/06/06/03/38/fish-5265096_640.jpg",
    title: "إطلاق ألبوم جديد: الفنان XYZ",
    time: "5:20",
    data: "2024-11-26",
    numofwatch: 98765,
    channelName: "أفضل الفنانين",
    category: "collections",
  },
  {
    id: 3,
    videoImage:
      "https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2024/01/03/19/37/photography-8486085_640.jpg",
    title: "أفضل الحفلات الموسيقية المباشرة لعام 2024",
    time: "7:30",
    data: "2024-11-22",
    numofwatch: 54321,
    channelName: "موسيقى مباشرة",
    category: "live",
  },
  {
    id: 4,
    videoImage:
      "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2023/03/15/18/14/sea-7855153_640.jpg",
    title: "أساسيات نظريات الموسيقى",
    time: "10:45",
    data: "2024-11-20",
    numofwatch: 345678,
    channelName: "تعليم الموسيقى",
    category: "events",
  },
  {
    id: 5,
    videoImage:
      "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2018/04/05/14/09/sun-3240514_640.jpg",
    title: "رحلة في عالم الألحان الكلاسيكية",
    time: "8:15",
    data: "2024-11-18",
    numofwatch: 67890,
    channelName: "عالم الكلاسيكيات",
    category: "music",
  },
  {
    id: 6,
    videoImage:
      "https://cdn.pixabay.com/photo/2020/11/02/05/56/music-5705801_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2023/08/15/20/08/cat-8191211_640.jpg",
    title: "مقابلة مع ملحن شهير",
    time: "6:30",
    data: "2024-11-15",
    numofwatch: 234567,
    channelName: "أخبار الموسيقى",
    category: "interviews",
  },
  {
    id: 7,
    videoImage:
      "https://cdn.pixabay.com/photo/2019/05/12/11/04/mixer-4197733_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2019/09/17/20/50/mountains-4483250_640.jpg",
    title: "أفضل الآلات الموسيقية لعام 2024",
    time: "12:00",
    data: "2024-11-10",
    numofwatch: 78901,
    channelName: "عالم الآلات",
    category: "instruments",
  },
  {
    id: 8,
    videoImage:
      "https://cdn.pixabay.com/photo/2021/06/03/00/06/sheet-music-6305620_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2021/05/21/09/19/dog-6270021_640.jpg",
    title: "أفضل التحديات الموسيقية",
    time: "4:10",
    data: "2024-11-05",
    numofwatch: 567890,
    channelName: "تحديات الموسيقى",
    category: "challenges",
  },
  {
    id: 9,
    videoImage:
      "https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2020/09/10/10/15/cat-5560455_640.jpg",
    title: "موسيقى التصوير السينمائي",
    time: "9:25",
    data: "2024-11-02",
    numofwatch: 12345,
    channelName: "عالم الأفلام",
    category: "cinema",
  },
  {
    id: 10,
    videoImage:
      "https://cdn.pixabay.com/photo/2023/02/16/03/43/music-player-7792956_1280.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2016/11/22/23/44/mountains-1850864_640.jpg",
    title: "أفضل اللحظات الموسيقية",
    time: "5:50",
    data: "2024-10-30",
    numofwatch: 654321,
    channelName: "لحظات رائعة",
    category: "moments",
  },
  {
    id: 11,
    videoImage:
      "https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2023/03/10/17/52/prayer-book-7842864_640.jpg",
    title: "أغاني الأعياد",
    time: "7:00",
    data: "2024-12-25",
    numofwatch: 44512,
    channelName: "موسيقى الأعياد",
    category: "music",
  },
  {
    id: 12,
    videoImage:
      "https://cdn.pixabay.com/photo/2022/12/16/07/23/heart-7659062_640.jpg",
    channelImage:
      "https://cdn.pixabay.com/photo/2023/11/05/15/25/winter-8367632_640.jpg",
    title: "لحظات حب موسيقية",
    time: "4:45",
    data: "2024-11-14",
    numofwatch: 88890,
    channelName: "الرومانسية الموسيقية",
    category: "shorts",
  },
];
export const videoDetails: IVideoById = {
  id: 1,
  videoUrl:
    "https://cdn.pixabay.com/video/2016/09/21/5364-183788428_medium.mp4",
  title: "Introduction to TypeScript",
  channelImage:
    "https://cdn.pixabay.com/photo/2019/09/22/16/20/backend-4496461_640.png",
  channelName: "Tech Tutorials",
  numOfWatches: 12567,
  date: "2024-11-29",
  numOfLikes: 850,
  numOfSubscribers: 23000,
  comments: [
    {
      comment: "كان هذا الفيديو مفيدًا جدًا، شكرًا!",
      replies: ["سعيد أن الفيديو أعجبك!"],
    },
    {
      comment: "هل يمكنك عمل فيديو عن المواضيع المتقدمة؟",
      replies: ["فكرة رائعة، سأفكر في ذلك!", "أتطلع إلى مشاهدة ذلك أيضًا!"],
    },
    {
      comment: "محتوى ممتاز، أرجو الاستمرار في نشر مثل هذه الفيديوهات.",
      replies: [
        "شكرًا على الدعم!",
        "سأعمل على المزيد من المحتوى الرائع!",
        "سأحرص على توضيح كل التفاصيل التي تهمك!",
      ],
    },
    {
      comment: "هل يمكنني معرفة المزيد عن هذا الموضوع بالتفصيل؟",
      replies: ["بالطبع، سأقدم شرحًا مفصلاً في فيديو قادم."],
    },
    {
      comment: "لقد تعلمت الكثير من هذا الفيديو، شكرًا لكم!",
      replies: ["أنا سعيد لأنك استفدت!", "تعليقاتك تعني لي الكثير!"],
    },
  ],

  videoSuggestions: [
    {
      id: 3,
      videoImage:
        "https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2024/01/03/19/37/photography-8486085_640.jpg",
      title: "أفضل الحفلات الموسيقية المباشرة لعام 2024",
      time: "7:30",
      data: "2024-11-22",
      numofwatch: 54321,
      channelName: "موسيقى مباشرة",
      category: "live",
    },
    {
      id: 4,
      videoImage:
        "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2023/03/15/18/14/sea-7855153_640.jpg",
      title: "أساسيات نظريات الموسيقى",
      time: "10:45",
      data: "2024-11-20",
      numofwatch: 345678,
      channelName: "تعليم الموسيقى",
      category: "events",
    },
    {
      id: 5,
      videoImage:
        "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/05/14/09/sun-3240514_640.jpg",
      title: "رحلة في عالم الألحان الكلاسيكية",
      time: "8:15",
      data: "2024-11-18",
      numofwatch: 67890,
      channelName: "عالم الكلاسيكيات",
      category: "music",
    },
    {
      id: 6,
      videoImage:
        "https://cdn.pixabay.com/photo/2020/11/02/05/56/music-5705801_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2023/08/15/20/08/cat-8191211_640.jpg",
      title: "مقابلة مع ملحن شهير",
      time: "6:30",
      data: "2024-11-15",
      numofwatch: 234567,
      channelName: "أخبار الموسيقى",
      category: "interviews",
    },
    {
      id: 7,
      videoImage:
        "https://cdn.pixabay.com/photo/2019/05/12/11/04/mixer-4197733_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2019/09/17/20/50/mountains-4483250_640.jpg",
      title: "أفضل الآلات الموسيقية لعام 2024",
      time: "12:00",
      data: "2024-11-10",
      numofwatch: 78901,
      channelName: "عالم الآلات",
      category: "instruments",
    },
    {
      id: 8,
      videoImage:
        "https://cdn.pixabay.com/photo/2021/06/03/00/06/sheet-music-6305620_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2021/05/21/09/19/dog-6270021_640.jpg",
      title: "أفضل التحديات الموسيقية",
      time: "4:10",
      data: "2024-11-05",
      numofwatch: 567890,
      channelName: "تحديات الموسيقى",
      category: "challenges",
    },
    {
      id: 9,
      videoImage:
        "https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2020/09/10/10/15/cat-5560455_640.jpg",
      title: "موسيقى التصوير السينمائي",
      time: "9:25",
      data: "2024-11-02",
      numofwatch: 12345,
      channelName: "عالم الأفلام",
      category: "cinema",
    },
    {
      id: 10,
      videoImage:
        "https://cdn.pixabay.com/photo/2023/02/16/03/43/music-player-7792956_1280.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2016/11/22/23/44/mountains-1850864_640.jpg",
      title: "أفضل اللحظات الموسيقية",
      time: "5:50",
      data: "2024-10-30",
      numofwatch: 654321,
      channelName: "لحظات رائعة",
      category: "moments",
    },
    {
      id: 11,
      videoImage:
        "https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2023/03/10/17/52/prayer-book-7842864_640.jpg",
      title: "أغاني الأعياد",
      time: "7:00",
      data: "2024-12-25",
      numofwatch: 44512,
      channelName: "موسيقى الأعياد",
      category: "music",
    },
    {
      id: 8,
      videoImage:
        "https://cdn.pixabay.com/photo/2021/06/03/00/06/sheet-music-6305620_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2021/05/21/09/19/dog-6270021_640.jpg",
      title: "أفضل التحديات الموسيقية",
      time: "4:10",
      data: "2024-11-05",
      numofwatch: 567890,
      channelName: "تحديات الموسيقى",
      category: "challenges",
    },
    {
      id: 9,
      videoImage:
        "https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2020/09/10/10/15/cat-5560455_640.jpg",
      title: "موسيقى التصوير السينمائي",
      time: "9:25",
      data: "2024-11-02",
      numofwatch: 12345,
      channelName: "عالم الأفلام",
      category: "cinema",
    },
    {
      id: 10,
      videoImage:
        "https://cdn.pixabay.com/photo/2023/02/16/03/43/music-player-7792956_1280.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2016/11/22/23/44/mountains-1850864_640.jpg",
      title: "أفضل اللحظات الموسيقية",
      time: "5:50",
      data: "2024-10-30",
      numofwatch: 654321,
      channelName: "لحظات رائعة",
      category: "moments",
    },
    {
      id: 11,
      videoImage:
        "https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_640.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2023/03/10/17/52/prayer-book-7842864_640.jpg",
      title: "أغاني الأعياد",
      time: "7:00",
      data: "2024-12-25",
      numofwatch: 44512,
      channelName: "موسيقى الأعياد",
      category: "music",
    },
  ],
};
