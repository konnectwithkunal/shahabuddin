const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-4xl font-bold mb-4">डॉ. मो. शहाब उद्दीन</h3>
            <p className="text-xl font-semibold text-secondary-foreground/80 mb-2">जन सुराज पार्टी के प्रत्याशी</p>
            <p className="text-xl font-semibold ">232 बेलागंज विधानसभा</p>
          </div>

          <div>
            <h4 className="text-4xl font-bold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-xl font-semibold text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  परिचय
                </a>
              </li>
              <li>
                <a href="#career" className="text-xl font-semibold text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  व्यावसायिक यात्रा
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-xl font-semibold text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  जन संपर्क
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xl font-semibold text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-4xl font-bold mb-4">संपर्क</h4>
            <p className="text-xl font-semibold text-secondary-foreground/80 mb-2">फोन: 6287892656</p>
            <p className="text-xl font-semibold text-secondary-foreground/80">लक्ष्मीपुर, बेलागंज, गया, बिहार</p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-xl font-semibold  mb-4">
            चुनाव चिन्ह: स्कूल का बस्ता
          </p>
          <p className="text-secondary-foreground/80 font-semibold text-lg">
            आ रहा है जन सुराज
          </p>
          <p className="text-secondary-foreground/60 text-xl font-semibold  mt-4">
            © 2025 डॉ. मो. शहाब उद्दीन - जन सुराज पार्टी। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
