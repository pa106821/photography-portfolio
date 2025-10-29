// HERO IMAGE
import heroImage from "../assets/hero/hero1.jpg";

// GALLERY IMAGES
import portrait1 from "../assets/gallery/portraits/portrait1.jpg";
import portrait2 from "../assets/gallery/portraits/portrait2.jpg";
import portrait3 from "../assets/gallery/portraits/portrait3.jpg";
import travel1 from "../assets/gallery/travel/travel1.jpg";
import travel2 from "../assets/gallery/travel/travel2.jpg";
import travel3 from "../assets/gallery/travel/travel3.jpg";
import event1 from "../assets/gallery/events/event1.jpg";
import event2 from "../assets/gallery/events/event2.jpg";
import event3 from "../assets/gallery/events/event3.jpg";
import editorial1 from "../assets/gallery/editorial/editorial1.jpg";
import editorial2 from "../assets/gallery/editorial/editorial2.jpg";
import editorial3 from "../assets/gallery/editorial/editorial3.jpg";

// BLOG IMAGES
import post1 from "../assets/blog/post1.jpg";
import post2 from "../assets/blog/post2.jpg";
import post3 from "../assets/blog/post3.jpg";

export const siteData = {
  name: "Rosette Victory Photography",
  tagline: "Capturing Colors of Life — stories told in light",
  heroImage: heroImage,
  categories: ["All", "Portraits", "Travel", "Events", "Editorial"],

  gallery: [
    { id: 1, title: "Portrait 1", category: "Portraits", srcFallback: portrait1 },
    { id: 2, title: "Portrait 2", category: "Portraits", srcFallback: portrait2 },
    { id: 3, title: "Portrait 3", category: "Portraits", srcFallback: portrait3 },
    { id: 4, title: "Travel 1", category: "Travel", srcFallback: travel1 },
    { id: 5, title: "Travel 2", category: "Travel", srcFallback: travel2 },
    { id: 6, title: "Travel 3", category: "Travel", srcFallback: travel3 },
    { id: 7, title: "Event 1", category: "Events", srcFallback: event1 },
    { id: 8, title: "Event 2", category: "Events", srcFallback: event2 },
    { id: 9, title: "Event 3", category: "Events", srcFallback: event3 },
    { id: 10, title: "Editorial 1", category: "Editorial", srcFallback: editorial1 },
    { id: 11, title: "Editorial 2", category: "Editorial", srcFallback: editorial2 },
    { id: 12, title: "Editorial 3", category: "Editorial", srcFallback: editorial3 },
  ],

  posts: [
    {
      id: 1,
      title: "How I Capture Golden Hour Portraits",
      date: "October 10, 2025",
      excerpt: "A short guide to nailing natural light portraits — lenses, angles, and trust.",
      img: post1,
    },
    {
      id: 2,
      title: "Top 5 Travel Photography Tips",
      date: "September 2, 2025",
      excerpt: "Packing light, finding stories, and editing hacks to speed your workflow.",
      img: post2,
    },
    {
      id: 3,
      title: "Behind the Scenes: A Wedding Day",
      date: "August 15, 2025",
      excerpt: "How I stay calm and create candid moments during busy wedding days.",
      img: post3,
    },
  ],
};
