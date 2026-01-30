import { Mail } from "lucide-react";

import { Link } from "react-router-dom";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Nhập môn", href: "/nhap-mon" },
  { name: "Minna no Nihongo", href: "/minna" },
  { name: "Luyện thi JLPT", href: "/jlpt-n5" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-black/10 py-16 text-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold mb-4 text-black">
              Tiếng nhật vui vẻ
            </h3>
            <p className="text-black/70 leading-relaxed">
              Học tiếng Nhật vì đam mê. Nền tảng học tiếng Nhật miễn phí, được xây dựng bởi cộng đồng, cho cộng đồng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-black/60">
              Liên kết nhanh
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-black/80 hover:text-black transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-black/60">
              Liên hệ
            </h4>
            <div className="flex items-center gap-2 text-black/80">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hello@tiengnhatvuive.com"
                className="hover:text-black transition-colors font-medium"
              >
                hello@tiengnhatvuive.com
              </a>
            </div>
          </div>

          {/* Message */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-black/60">
              Sứ mệnh
            </h4>
            <p className="text-black/70 leading-relaxed">
              Chúng tôi tin rằng việc học ngoại ngữ nên miễn phí và dành cho tất cả mọi người.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-8" />

        {/* Copyright */}
        <div className="text-center text-black/60 text-sm">
          Proudly built by{" "}
          <a
            href="https://tanoshivietnam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors underline font-medium"
          >
            tanoshiVietnam.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
