import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookMarked, Flag, Award } from "lucide-react";

const Career = () => {
  return (
    <section id="career" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">व्यावसायिक यात्रा</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            शिक्षा और समाज सेवा में एक समर्पित जीवन
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-2 border-primary/30 bg-card hover:shadow-[var(--shadow-card)] transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">शैक्षणिक करियर</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">व्याख्याता (Lecturer)</h4>
                  <span className="text-sm bg-primary/10 px-3 py-1 rounded-full font-medium">1985 - 2012</span>
                </div>
                <p className="text-lg text-muted-foreground">महेश सिंह यादव (MSY) कॉलेज, गया</p>
                <p className="mt-2 text-muted-foreground">27 वर्षों तक उर्दू विभाग में शिक्षण कार्य</p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">सरकारी शिक्षक</h4>
                  <span className="text-sm bg-secondary/10 px-3 py-1 rounded-full font-medium">2012 - 2018</span>
                </div>
                <p className="text-lg text-muted-foreground">मध्य विद्यालय पड़ैया, बाराछट्टी, गया</p>
                <p className="mt-2 text-muted-foreground">प्राथमिक शिक्षा में योगदान</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/30 bg-card hover:shadow-[var(--shadow-card)] transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookMarked className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">साहित्यिक योगदान</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-primary/20">
                <h4 className="text-xl font-bold mb-3">प्रकाशित कृति</h4>
                <p className="text-2xl font-bold text-primary mb-2">उर्दू शायरात-ए-बिहार और उनकी शायरी खिदमात</p>
                <div className="flex items-center gap-2 mt-4">
                  <Award className="h-5 w-5 text-secondary" />
                  <p className="text-muted-foreground">बिहार सरकार द्वारा मान्यता प्राप्त और प्रकाशित</p>
                </div>
              </div>

              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/30">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-bold">पुरस्कार</h4>
                </div>
                <p className="text-muted-foreground">
                  बिहार सरकार द्वारा साहित्य में विशेष योगदान के लिए पुरस्कृत (2018)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/30 bg-card hover:shadow-[var(--shadow-card)] transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Flag className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">राजनीतिक यात्रा</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-3">
                <p className="text-lg font-semibold mb-2">छात्र राजनीति में सक्रिय भागीदारी</p>
                <p className="text-muted-foreground">शिक्षा के दौरान छात्र आंदोलनों में सक्रिय</p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-semibold">अल्पसंख्यक अध्यक्ष, LJP</p>
                  <span className="text-sm bg-secondary/10 px-3 py-1 rounded-full font-medium">2018</span>
                </div>
                <p className="text-muted-foreground">लोक जनशक्ति पार्टी में अल्पसंख्यक प्रकोष्ठ के अध्यक्ष</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-3 bg-primary/5 rounded-r-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-bold text-primary">जन सुराज पार्टी में शामिल</p>
                  <span className="text-sm bg-primary px-3 py-1 rounded-full font-medium text-primary-foreground">2023</span>
                </div>
                <p className="text-muted-foreground">जनता की सेवा और सुराज के लिए प्रतिबद्ध</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Career;
