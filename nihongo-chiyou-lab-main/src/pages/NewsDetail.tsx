import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import VideoSubtitle from "@/components/news/VideoSubtitle";
import { articles, levelColors } from "@/data/newsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  ArrowLeft, 
  Calendar, 
  BookOpen, 
  Languages, 
  Type,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipBack,
  SkipForward
} from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [showFurigana, setShowFurigana] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState(20);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);

  const article = articles.find((a) => a.id === Number(id));

  // Find current active subtitle based on video time
  const activeSubtitleId = article?.subtitles.find(
    (sub) => currentTime >= sub.startTime && currentTime < sub.endTime
  )?.id;

  // Update current time as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  // Auto-scroll to active subtitle
  useEffect(() => {
    if (activeSubtitleId) {
      const element = document.getElementById(`subtitle-${activeSubtitleId}`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeSubtitleId]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const seekTo = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
            <Link to="/news">
              <Button>Quay lại danh sách</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/news" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại danh sách
          </Link>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="container mx-auto px-4 pb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Video & Info */}
            <div className="lg:w-3/5 space-y-4">
              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    src={article.videoUrl}
                    className="w-full h-full object-contain"
                    poster={article.image}
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div 
                      className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = (e.clientX - rect.left) / rect.width;
                        seekTo(percent * duration);
                      }}
                    >
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:bg-white/20"
                          onClick={() => skipTime(-10)}
                        >
                          <SkipBack className="w-5 h-5" />
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:bg-white/20"
                          onClick={togglePlay}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6" />
                          )}
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:bg-white/20"
                          onClick={() => skipTime(10)}
                        >
                          <SkipForward className="w-5 h-5" />
                        </Button>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:bg-white/20"
                          onClick={toggleMute}
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </Button>

                        <span className="text-white text-sm ml-2">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-white hover:bg-white/20"
                        onClick={toggleFullscreen}
                      >
                        <Maximize className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Header */}
              <div className="bg-card rounded-lg p-5 shadow-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className={`${levelColors[article.level]} text-white border-0`}>
                    {article.level}
                  </Badge>
                  <Badge variant="outline">{article.category}</Badge>
                </div>
                
                <h1 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {article.title}
                </h1>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </div>
              </div>

              {/* Reading Controls */}
              <div className="bg-card rounded-lg p-4 shadow-lg">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Furigana Toggle */}
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Furigana</span>
                    <Switch
                      checked={showFurigana}
                      onCheckedChange={setShowFurigana}
                    />
                  </div>

                  {/* Translation Toggle */}
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Dịch</span>
                    <Switch
                      checked={showTranslation}
                      onCheckedChange={setShowTranslation}
                    />
                  </div>

                  {/* Font Size Slider */}
                  <div className="flex items-center gap-2">
                    <Type className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Cỡ chữ</span>
                    <Slider
                      value={[fontSize]}
                      onValueChange={(value) => setFontSize(value[0])}
                      min={14}
                      max={32}
                      step={2}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Subtitles */}
            <div className="lg:w-2/5">
              <div className="bg-card rounded-lg p-4 shadow-lg lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                <h2 className="text-lg font-semibold text-foreground mb-4 sticky top-0 bg-card pb-2">
                  📝 Nội dung bài học
                </h2>
                <div className="space-y-3">
                  {article.subtitles.map((segment) => (
                    <div
                      key={segment.id}
                      id={`subtitle-${segment.id}`}
                      onClick={() => seekTo(segment.startTime)}
                      className="cursor-pointer"
                    >
                      <VideoSubtitle
                        segment={segment}
                        isActive={segment.id === activeSubtitleId}
                        showFurigana={showFurigana}
                        showTranslation={showTranslation}
                        fontSize={fontSize}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
