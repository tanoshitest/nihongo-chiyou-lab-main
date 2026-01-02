import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Foundation from "./pages/Foundation";
import MinnaNoNihongo from "./pages/MinnaNoNihongo";
import LessonDetail from "./pages/LessonDetail";
import Irodori from "./pages/Irodori";
import IrodoriLessonDetail from "./pages/IrodoriLessonDetail";
import JlptExam from "./pages/JlptExam";
import JlptLevelDetail from "./pages/JlptLevelDetail";
import JlptPractice from "./pages/JlptPractice";
import JlptExamRunner from "./pages/JlptExamRunner";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nhap-mon" element={<Foundation />} />
          <Route path="/minna" element={<MinnaNoNihongo />} />
          <Route path="/minna/:id" element={<LessonDetail />} />
          <Route path="/irodori" element={<Irodori />} />
          <Route path="/irodori/:level/:id" element={<IrodoriLessonDetail />} />
          <Route path="/jlpt-n5" element={<JlptExam />} />
          <Route path="/jlpt/:level" element={<JlptLevelDetail />} />
          <Route path="/jlpt-practice" element={<JlptPractice />} />
          <Route path="/jlpt-exam/:level/:year/:session" element={<JlptExamRunner />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
