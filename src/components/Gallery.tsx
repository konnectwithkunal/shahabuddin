import candidateWalking from "@/assets/candidate-walking.jpg";
import meetingIndoor from "@/assets/meeting-indoor.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";
import ruralOutreach from "@/assets/rural-outreach.jpg";
import mosqueGathering from "@/assets/mosque-gathering.jpg";

const Gallery = () => {
  const images = [
    {
      src: candidateWalking,
      alt: "डॉ. शहाब उद्दीन जनता के बीच",
      caption: "जनता के साथ, जनता के लिए"
    },
    {
      src: meetingIndoor,
      alt: "जन सुराज पार्टी की सभा",
      caption: "232 बेलागंज - जन सुराज का संकल्प"
    },
    {
      src: communityMeeting,
      alt: "समुदाय के साथ बैठक",
      caption: "समुदाय की आवाज़"
    },
    {
      src: ruralOutreach,
      alt: "ग्रामीण क्षेत्रों में जनसंपर्क",
      caption: "हर गाँव तक पहुँच"
    },
    {
      src: mosqueGathering,
      alt: "धार्मिक स्थलों पर जनसंपर्क",
      caption: "सभी समुदायों के साथ"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">जन संपर्क</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            जनता के बीच, जनता के साथ - बेलागंज की सेवा में
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-secondary-foreground font-bold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/30">
            <h3 className="text-2xl font-bold mb-2">आ रहा है जन सुराज</h3>
            <p className="text-lg text-muted-foreground">स्कूल का बस्ता • चुनाव चिन्ह</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
