import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Foundation from "./pages/Foundation";
import MinnaNoNihongo from "./pages/MinnaNoNihongo";
import MinnaTest1 from "./pages/MinnaTest1";
import MinnaTest2 from "./pages/MinnaTest2";
import MinnaTest3 from "./pages/MinnaTest3";
import MinnaTest4 from "./pages/MinnaTest4";
import MinnaTest5 from "./pages/MinnaTest5";
import MinnaTest6 from "./pages/MinnaTest6";
import MinnaTest7 from "./pages/MinnaTest7";
import MinnaTest8 from "./pages/MinnaTest8";
import MinnaTest9 from "./pages/MinnaTest9";
import MinnaTest10 from "./pages/MinnaTest10";
import MinnaTest11 from "./pages/MinnaTest11";
import MinnaTest12 from "./pages/MinnaTest12";
import MinnaTestN4 from "./pages/MinnaTestN4";
import Particles from "./pages/Particles";
import Forms from "./pages/Forms";
import Adverbs from "./pages/Adverbs";
import Conjunctions from "./pages/Conjunctions";
import Numbers from "./pages/Numbers";
import TimeExpressions from "./pages/TimeExpressions";
import Counters from "./pages/Counters";
import GrammarReview from "./pages/GrammarReview";
import VocabularyList from "./pages/VocabularyList";
import LessonDetail from "./pages/LessonDetail";
import Irodori from "./pages/Irodori";
import IrodoriLessonDetail from "./pages/IrodoriLessonDetail";
import JlptExam from "./pages/JlptExam";
import JlptLevelDetail from "./pages/JlptLevelDetail";
import JlptPractice from "./pages/JlptPractice";
import JlptExamRunner from "./pages/JlptExamRunner";

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
          <Route path="/minna/test-1" element={<MinnaTest1 />} />
          <Route path="/minna/test-2" element={<MinnaTest2 />} />
          <Route path="/minna/test-3" element={<MinnaTest3 />} />
          <Route path="/minna/test-4" element={<MinnaTest4 />} />
          <Route path="/minna/test-5" element={<MinnaTest5 />} />
          <Route path="/minna/test-6" element={<MinnaTest6 />} />
          <Route path="/minna/test-7" element={<MinnaTest7 />} />
          <Route path="/minna/test-8" element={<MinnaTest8 />} />
          <Route path="/minna/test-9" element={<MinnaTest9 />} />
          <Route path="/minna/test-10" element={<MinnaTest10 />} />
          <Route path="/minna/test-11" element={<MinnaTest11 />} />
          <Route path="/minna/test-12" element={<MinnaTest12 />} />
          <Route path="/minna/test-n4/:id" element={<MinnaTestN4 />} />
          <Route path="/minna/particles" element={<Particles />} />
          <Route path="/minna/forms" element={<Forms />} />
          <Route path="/minna/adverbs" element={<Adverbs />} />
          <Route path="/minna/conjunctions" element={<Conjunctions />} />
          <Route path="/minna/numbers" element={<Numbers />} />
          <Route path="/minna/time-expressions" element={<TimeExpressions />} />
          <Route path="/minna/counters" element={<Counters />} />
          <Route path="/minna/grammar-review" element={<GrammarReview />} />
          <Route path="/minna/vocabulary" element={<VocabularyList />} />
          <Route path="/minna/:id" element={<LessonDetail />} />
          <Route path="/irodori" element={<Irodori />} />
          <Route path="/irodori/:level/:id" element={<IrodoriLessonDetail />} />
          <Route path="/jlpt-n5" element={<JlptExam />} />
          <Route path="/jlpt/:level" element={<JlptLevelDetail />} />
          <Route path="/jlpt-practice" element={<JlptPractice />} />
          <Route path="/jlpt-exam/:level/:year/:session" element={<JlptExamRunner />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
