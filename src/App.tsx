import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Episodes from "./pages/Episodes";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import Partners from "./pages/Partners";
import SuggestGuest from "./pages/SuggestGuest";
import NotFound from "./pages/NotFound";
import Guests from "./pages/Guests";
import GuestDetail from "./pages/GuestDetail";
import { ThemeProvider } from "./components/ui/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="pt-16 flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/advertise" element={<Navigate to="/partners" replace />} />
                <Route path="/suggest-guest" element={<SuggestGuest />} />
                <Route path="/guests" element={<Guests />} />
                <Route path="/guests/:guestId" element={<GuestDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
