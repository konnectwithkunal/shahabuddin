import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import campaignPoster from "@/assets/campaign-poster.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse-slow" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 lg:gap-32 items-center">
          
          {/* Image - Left side on desktop, in middle on mobile */}
          <div className="order-2 lg:order-1 w-full flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <img
                src={campaignPoster}
                alt="डॉ. मो. शहाब उद्दीन - जन सुराज पार्टी"
                className="relative rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg border-4 border-primary/30 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Content - Right side on desktop */}
          <div className="order-1 lg:order-2 text-center lg:text-left w-full">
            {/* Top content */}
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block px-4 md:px-6 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border-2 border-primary/40 mb-2 md:mb-4 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <p className="text-primary font-bold text-base md:text-lg">जन सुराज पार्टी के प्रत्याशी</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                डॉ. मो. शहाब उद्दीन
              </h1>
              
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                  232 बेलागंज विधानसभा
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold">
                  शिक्षा और सेवा का प्रतीक
                </p>
              </div>
            </div>

            

            {/* Contact button */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6">
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:6287892656'}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-[var(--shadow-warm)] transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                संपर्क करें: 6287892656
              </Button>
            </div>

            {/* Pramukh Pehchan */}
            <div className="pt-6 md:pt-8 space-y-2 md:space-y-3">
              <p className="text-base md:text-lg font-bold text-foreground">प्रमुख पहचान:</p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                <span className="px-3 md:px-4 py-2 bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 rounded-lg text-xs md:text-sm font-semibold hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-sm">
                  राजनेता
                </span>
                <span className="px-3 md:px-4 py-2 bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 rounded-lg text-xs md:text-sm font-semibold hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-sm">
                  पूर्व प्रोफेसर
                </span>
                <span className="px-3 md:px-4 py-2 bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 rounded-lg text-xs md:text-sm font-semibold hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-sm">
                  लेखक
                </span>
                <span className="px-3 md:px-4 py-2 bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 rounded-lg text-xs md:text-sm font-semibold hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-sm">
                  बिहार पुरस्कार विजेता 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
