import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import LivePage from "./pages/LivePage";
import CorporatePage from "./pages/CorporatePage";
import PrivatePage from "./pages/PrivatePage";
import WeddingsPage from "./pages/WeddingsPage";
import EndorsementsPage from "./pages/EndorsementsPage";
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
          <Route path="/live" element={<LivePage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/endorsements" element={<EndorsementsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
