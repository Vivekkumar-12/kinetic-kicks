import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["New Releases", "Men", "Women", "Kids", "Sale"],
    },
    {
      title: "Support",
      links: ["Contact Us", "Shipping", "Returns", "Size Guide", "FAQ"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Sustainability", "Press", "Stores"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100080085475262x" },
    { icon: Instagram, href: "https://www.instagram.com/vivek__kumar__14_/?hl=en" },
    { icon: Twitter, href: "https://x.com/Vivek0897" },
    { icon: Youtube, href: "https://www.youtube.com/@randhirkumar8542" },
    {icon: Linkedin, href="https://www.linkedin.com/in/vivek-kumar-b19aa5299/" }
  ];

  return (
    <footer className="bg-card border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-4xl font-black bg-gradient-fire bg-clip-text text-transparent mb-4">
              STRIDE
            </h2>
            <p className="text-muted-foreground mb-6">
              Elevating your performance with cutting-edge footwear innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-fire hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 STRIDE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
