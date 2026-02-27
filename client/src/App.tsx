import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Artists from "./pages/Artists";
import Book from "./pages/Book";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Aftercare from "./pages/Aftercare";
import About from "./pages/About";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/artists" component={Artists} />
      <Route path="/book" component={Book} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/aftercare" component={Aftercare} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
