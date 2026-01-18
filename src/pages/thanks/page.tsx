import { useEffect } from 'react';

export default function ThanksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Painted Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(244, 63, 94, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, rgba(251, 113, 133, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 70%, rgba(16, 185, 129, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 25% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(251, 207, 232, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, #fef2f2 0%, #ffffff 30%, #ecfdf5 70%, #f0fdfa 100%)
            `,
            filter: 'blur(60px)',
          }}
        />
        {/* Paint Texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px),
              repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px)
            `,
          }}
        />
      </div>

      {/* Animated Paint Blobs */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(251, 113, 133, 0.25) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(20, 184, 166, 0.25) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-8 py-3 rounded-full shadow-xl border-2 border-red-400">
            <span className="text-3xl font-bold tracking-wider bg-gradient-to-r from-red-500 to-emerald-500 bg-clip-text text-transparent" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.3em' }}>10'sLP</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Success Icon */}
          <div className="mb-12 inline-block">
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-full shadow-2xl animate-bounce">
              <i className="ri-check-line text-6xl text-white"></i>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">ご登録</span><br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ありがとう</span><br />
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">ございます！</span>
          </h1>

          <p className="text-2xl text-gray-800 mb-16 leading-relaxed font-bold">
            お問い合わせを受け付けました。<br />
            担当者より順次ご連絡させていただきます。
          </p>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <a
              href="https://line.me/R/ti/p/@your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white px-10 py-6 rounded-full text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-line-fill text-2xl"></i>
              <span>公式LINEを追加する</span>
              <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                <i className="ri-arrow-right-line text-white text-xl"></i>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.google.com/calendar/appointments/your-calendar-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white px-8 py-5 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line text-xl"></i>
                <span>面談を予約する</span>
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-5 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg border-2 border-gray-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-home-line text-xl"></i>
                <span>トップページへ戻る</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex-shrink-0">
                <i className="ri-information-line text-2xl text-white"></i>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">次のステップ</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  公式LINEを追加いただくと、最新情報やイベント案内をいち早くお届けします。<br />
                  また、面談予約も随時受け付けておりますので、お気軽にご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
