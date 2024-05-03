const sampleStatuses = [
  {
    id: 1,
    user: {
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/150",
    },
    type: "image",
    url: "https://via.placeholder.com/300",
    timePosted: "1 hour ago",
    viewed: false, // Initially not viewed
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/150/female",
    },
    type: "video",
    url: "https://www.pexels.com/videos/short-video-of-a-cat-playing-with-a-ball-of-yarn-1088395/",
    timePosted: "2 hours ago",
    viewed: true, // Already viewed
  },
  // ... add more sample statuses
];

export default sampleStatuses;
