import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Wedding from "@/pages/Wedding";
import NotFound from "@/pages/not-found";

// ✅ Base path para GitHub Pages (repo: web-boda-cristina-alberto)
const BASE = "/web-boda-cristina-alberto";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <Switch>
          {/* Home */}
          <Route path={`${BASE}/`} component={Wedding} />

          {/* Por si alguien entra sin la barra final */}
          <Route path={BASE} component={Wedding} />

          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
