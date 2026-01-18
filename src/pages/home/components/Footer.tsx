import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}a2417c44708479b44380b56b2d1311f7.png`}
                alt="10'sLP Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              次世代WebクリエイターOJTプロジェクト。<br />
              AIとWeb制作で未来を創る。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">お問い合わせ</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-lg">
                  <i className="ri-mail-line text-lg"></i>
                </div>
                <a href="mailto:kanta.inoue@regalis-group.com" className="text-gray-300 hover:text-white transition-colors font-medium">
                  kanta.inoue@regalis-group.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span className="text-gray-300 font-medium">東京都千代田区麴町6丁目2-1<br />麹町サイトビル6階ROOM Z</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">クイックリンク</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg cursor-pointer">
                  ホーム
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg cursor-pointer">
                  事業紹介
                </a>
              </li>
              <li>
                <Link to="/recruit" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-lg cursor-pointer">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">フォローする</h4>
            <div className="flex gap-4">
              <a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                <i className="ri-line-fill text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                <i className="ri-twitter-x-line text-2xl"></i>
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                <i className="ri-instagram-line text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © 2024 10'sLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
