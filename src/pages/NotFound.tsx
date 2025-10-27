import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Large 404 */}
        <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20">
          404
        </h1>
        
        {/* Biblical Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            This page could not be found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground italic max-w-xl mx-auto leading-relaxed">
            "For you were straying like sheep, but have now returned to the Shepherd and Overseer of your souls."
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            1 Peter 2:25
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="divine" size="lg" asChild>
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </a>
          </Button>
          <Button variant="warm" size="lg" asChild>
            <a href="/visit">
              <Search className="mr-2 h-5 w-5" />
              Plan Your Visit
            </a>
          </Button>
        </div>

        {/* Helpful Message */}
        <p className="text-sm text-muted-foreground pt-8">
          If you believe this is an error, please contact us at{" "}
          <a href="mailto:office@lithiaspringsmethodist.org" className="text-primary hover:underline">
            office@lithiaspringsmethodist.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
