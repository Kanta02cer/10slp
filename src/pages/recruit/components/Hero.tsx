export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Painted Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse at 25% 25%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 30%, rgba(251, 113, 133, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 70%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 75%, rgba(20, 184, 166, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 85% 65%, rgba(244, 63, 94, 0.3) 0%, transparent 50%),
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

      {/* Animated Paint Strokes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.6) 0%, rgba(251, 113, 133, 0.3) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, rgba(20, 184, 166, 0.3) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <a href="/" className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer block">
          <img 
            src="https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/a2417c44708479b44380b56b2d1311f7.png" 
            alt="10'sLP Logo" 
            className="h-16 w-auto"
          />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-2xl">
            共に成長する
          </h1>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
            仲間を募集。
          </h2>
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-800 mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
          AI×Web制作で、次世代のクリエイターへ
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#requirements" 
            className="group px-12 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            募集要項を見る
            <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
