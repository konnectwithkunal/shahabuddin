import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">संपर्क करें</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            आपकी समस्याएं, आपके सुझाव - हम हैं आपके साथ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-primary">संपर्क जानकारी</h3>
                    <p className="text-muted-foreground mb-8">
                      बेलागंज क्षेत्र के विकास और जनता की सेवा के लिए हमेशा उपलब्ध
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">फोन नंबर</p>
                        <a 
                          href="tel:6287892656"
                          className="text-xl font-bold text-primary hover:underline"
                        >
                          6287892656
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">पता</p>
                        <p className="text-muted-foreground">
                          लक्ष्मीपुर, बेलागंज<br />
                          गया, बिहार
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">विधानसभा क्षेत्र</p>
                        <p className="text-xl font-bold text-primary">232 बेलागंज</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground shadow-[var(--shadow-warm)]">
                    <h4 className="text-2xl font-bold mb-4">जन सुराज पार्टी</h4>
                    <p className="text-lg mb-6 opacity-90">
                      शिक्षा, स्वास्थ्य और रोजगार - हर नागरिक का अधिकार
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                        <p className="font-medium">गुणवत्तापूर्ण शिक्षा</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                        <p className="font-medium">रोजगार के अवसर</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                        <p className="font-medium">स्वास्थ्य सुविधाएं</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                        <p className="font-medium">ग्रामीण विकास</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6 rounded-xl"
                    onClick={() => window.location.href = 'tel:6287892656'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    अभी संपर्क करें
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
