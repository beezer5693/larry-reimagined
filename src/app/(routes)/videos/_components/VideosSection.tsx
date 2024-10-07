import { replaceText } from "@/lib/helpers/replace-text";

type Video = {
  title: string;
  embeddableUrl: string;
};

async function VideosSection() {
  const youtubeVideos: Video[] = await fetchVideos();

  async function fetchVideos() {
    const reqUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YT_CHANNEL_ID}&type=video&maxResults=25&order=date&key=${process.env.YT_API_KEY}`;
    const res = await fetch(reqUrl, {
      method: "GET",
      cache: "no-store",
    });
    const data = await res.json();

    console.log(data);

    const videos: Video[] = [];

    data.items.forEach((video: any) => {
      const videoId = video.id.videoId;
      const embeddableUrl = `https://youtube.com/embed/${videoId}` as string;
      const title = replaceText(video.snippet.title);
      videos.push({ title, embeddableUrl });
    });

    return videos;
  }

  return (
    <section className="relative mb-28 flex w-full flex-col bg-white md:mb-36 xl:mb-44">
      <div className="w-full px-5 md:px-10">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-10 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <div
              key={video.title}
              className="flex h-full w-full flex-col gap-2 p-3 lg:col-span-1"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={video.embeddableUrl}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="font-semibold">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideosSection;
