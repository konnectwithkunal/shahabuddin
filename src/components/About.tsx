import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Briefcase, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">परिचय</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            शिक्षा, साहित्य और समाज सेवा में समर्पित जीवन
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 hover:scale-105 group">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <BookOpen className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">शिक्षाविद</h3>
              <p className="text-muted-foreground">उर्दू साहित्य में PhD, 27+ वर्षों का शिक्षण अनुभव</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 hover:scale-105 group">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">पुरस्कृत लेखक</h3>
              <p className="text-muted-foreground">बिहार सरकार द्वारा साहित्य में पुरस्कृत</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 hover:scale-105 group">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Briefcase className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">अनुभवी</h3>
              <p className="text-muted-foreground">MSY कॉलेज गया में प्रोफेसर (1985-2012)</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 hover:scale-105 group">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">जन सेवक</h3>
              <p className="text-muted-foreground">जन सुराज पार्टी के प्रतिबद्ध सदस्य</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">व्यक्तिगत जानकारी</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-semibold">जन्म तिथि:</span>
                    <span>06 अगस्त 1958</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-semibold">जन्म स्थान:</span>
                    <span>लक्ष्मीपुर, बेलागंज, गया</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-semibold">विधानसभा क्षेत्र:</span>
                    <span>232 बेलागंज</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">पार्टी:</span>
                    <span className="text-primary font-bold">जन सुराज पार्टी</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">शैक्षणिक योग्यता</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-bold text-lg mb-1">PhD (उर्दू)</p>
                    <p className="text-muted-foreground">मगध विश्वविद्यालय, बोधगया</p>
                    <p className="text-sm text-muted-foreground">वर्ष: 2011</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-bold text-lg mb-1">M.A (उर्दू)</p>
                    <p className="text-muted-foreground">मगध विश्वविद्यालय, बोधगया</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
