import { Mail } from "lucide-react";

import { Link } from "react-router-dom";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Nhập môn", href: "/nhap-mon" },
  { name: "Minna no Nihongo", href: "/minna" },
  { name: "Luyện thi JLPT", href: "/jlpt-n5" },
  { name: "Tin tức", href: "#" },
  { name: "Blog", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold mb-4">
              Tiếng nhật vui vẻ
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Học tiếng Nhật vì đam mê. Nền tảng học tiếng Nhật miễn phí, được xây dựng bởi cộng đồng, cho cộng đồng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Liên kết nhanh
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Liên hệ
            </h4>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:hello@tiengnhatvuive.com" 
                className="hover:text-primary-foreground transition-colors"
              >
                hello@tiengnhatvuive.com
              </a>
            </div>
          </div>

          {/* Message */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Sứ mệnh
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Chúng tôi tin rằng việc học ngoại ngữ nên miễn phí và dành cho tất cả mọi người.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-8" />

        {/* Copyright */}
        <div className="text-center text-primary-foreground/70 text-sm">
          Proudly built by{" "}
          <a 
            href="https://tanoshivietnam.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary-foreground transition-colors underline"
          >
            tanoshiVietnam.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
