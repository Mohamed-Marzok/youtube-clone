export interface INotification {
  id: number;
  videoId: number;
  channelImage: string;
  videoImage: string;
  text: string;
}
export interface IToggleBtns {
  value: string;
  text: string;
}

export interface IsidebarBtn {
  value: string;
  text: string;
  icon: React.ElementType;
}
export interface IVideo {
  id: number;
  videoImage: string;
  channelImage: string;
  title: string;
  time: string;
  data: string;
  numofwatch: number;
  channelName: string;
  category: string;
}
export interface IComment {
  comment: string;
  replies: string[];
}

export interface IVideoById {
  id: number;
  videoUrl: string;
  title: string;
  channelImage: string;
  channelName: string;
  numOfWatches: number;
  date: string;
  numOfLikes: number;
  numOfSubscribers: number;
  comments: IComment[];
  videoSuggestions: IVideo[];
}
