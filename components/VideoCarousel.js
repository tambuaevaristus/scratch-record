import React, { useState } from "react";
import dynamic from "next/dynamic";

const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import "owl.carousel";
import VideoCard from "./VideoCard";

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3LiQwcQxCqAgBRPdxjkpiA&maxResults=10&key=AIzaSyCzJmxb2KZKN6D0p96sK6QIipg41fNjSbM"
//   );
//   const data = res.json();

//   return {
//     props: { videos: data.items },
//   };
// };
const videos = {
  kind: "youtube#searchListResponse",
  etag: "K7d0cD_q0FzQ-jhbDxUzBPa-OoE",
  regionCode: "CM",
  pageInfo: {
    totalResults: 3,
    resultsPerPage: 3,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "SxL5cqObVr3vYI8jZoMqgRg4wc0",
      id: {
        kind: "youtube#channel",
        channelId: "UC3LiQwcQxCqAgBRPdxjkpiA",
      },
      snippet: {
        publishedAt: "2016-10-03T06:00:57Z",
        channelId: "UC3LiQwcQxCqAgBRPdxjkpiA",
        title: "Tambua Evaristus",
        description:
          "Bassist, Software Engineer, graphic designer, and a comedian.",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/ytc/AMLnZu9y0sWlF8KcWNGOTZtKMi_3mOyjs3qaVcdqhYwa=s88-c-k-c0xffffffff-no-rj-mo",
          },
          medium: {
            url: "https://yt3.ggpht.com/ytc/AMLnZu9y0sWlF8KcWNGOTZtKMi_3mOyjs3qaVcdqhYwa=s240-c-k-c0xffffffff-no-rj-mo",
          },
          high: {
            url: "https://yt3.ggpht.com/ytc/AMLnZu9y0sWlF8KcWNGOTZtKMi_3mOyjs3qaVcdqhYwa=s800-c-k-c0xffffffff-no-rj-mo",
          },
        },
        channelTitle: "Tambua Evaristus",
        liveBroadcastContent: "none",
        publishTime: "2016-10-03T06:00:57Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "MYS8kQ2HrPqhjGMGcHfsKc1GO14",
      id: {
        kind: "youtube#video",
        videoId: "xn0QtXG_c6A",
      },
      snippet: {
        publishedAt: "2021-05-01T22:24:40Z",
        channelId: "UC3LiQwcQxCqAgBRPdxjkpiA",
        title: "Seben (Evabass)",
        description: "stephan drums Nesi keys Evabass.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xn0QtXG_c6A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xn0QtXG_c6A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xn0QtXG_c6A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Tambua Evaristus",
        liveBroadcastContent: "none",
        publishTime: "2021-05-01T22:24:40Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Cq-68-pCM2S8i2OxwIUn9kXlc1E",
      id: {
        kind: "youtube#video",
        videoId: "6Yk01O-aF3M",
      },
      snippet: {
        publishedAt: "2021-05-18T14:35:00Z",
        channelId: "UC3LiQwcQxCqAgBRPdxjkpiA",
        title: "afro/ndombolo bass.",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6Yk01O-aF3M/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6Yk01O-aF3M/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6Yk01O-aF3M/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Tambua Evaristus",
        liveBroadcastContent: "none",
        publishTime: "2021-05-18T14:35:00Z",
      },
    },
  ],
};

function VideoCarousel() {
  // const [videoList, SetVideoList] = useState([]);
  // SetVideoList(videos.items);
  console.log(videos.items);
  return (
    <div className="my-5 text-center">
      <h1>Recent Videos</h1>
      <OwlCarousel
        loop
        nav={false}
        // responsive={true}
        autoplay={true}
        dots={false}
        autoplayTimeout={5000}
        autoplaySpeed={5000}
        center={true}
      >
        {Object.keys(videos.items).map((video) => {
          <VideoCard
            // key={index}
            // url={video.snippet.thumbnails.default.url}
          />;

        })}
                  <VideoCard />
      </OwlCarousel>
    </div>
  );
}

export default VideoCarousel;
