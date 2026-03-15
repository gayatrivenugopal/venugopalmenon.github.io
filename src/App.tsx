import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Works from "./pages/Works";
import Reviews from "./pages/Reviews";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Excerpt from "./pages/Excerpt";
import SundayRead from "./pages/SundayRead";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
		  <Route path="/excerpt/:slug" element={<Excerpt />} />
		  <Route path="/sunday/:slug" element={<SundayRead />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
