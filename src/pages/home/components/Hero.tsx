import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Painted Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(251, 113, 133, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 70%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 80%, rgba(20, 184, 166, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 60%, rgba(244, 63, 94, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 10% 50%, rgba(5, 150, 105, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #fef2f2 0%, #ffffff 30%, #ecfdf5 70%, #f0fdfa 100%)
            `,
            filter: 'blur(60px)',
          }}
        />
        {/* Paint Texture Overlay */}
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
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.5) 0%, rgba(251, 207, 232, 0.3) 40%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Logo - スクロール時に小さく */}
      <div className={`fixed top-8 left-8 z-50 transition-all duration-500 ${scrolled ? 'scale-50 opacity-70' : 'scale-100 opacity-100'}`}>
        <div 
          className="relative group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 242, 242, 0.9) 50%, rgba(236, 253, 245, 0.95) 100%)',
            backdropFilter: 'blur(12px)',
            padding: scrolled ? '0.75rem 1rem' : '1.5rem 2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            transition: 'all 0.5s ease',
          }}
        >
          <img 
            src="/a2417c44708479b44380b56b2d1311f7.png" 
            alt="10'sLP Logo" 
            className={`w-auto transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] group-hover:brightness-110 ${scrolled ? 'h-12' : 'h-24'}`}
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(239, 68, 68, 0.2))',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-2xl">
            10's LP
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-2 font-semibold">（テンズ・エルピー）</p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-4 leading-relaxed font-bold max-w-4xl mx-auto">
          「実物資産」の価値を、10秒で可視化する。
        </p>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-12">日本最速の制作パートナー</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a 
            href="https://line.me/R/ti/p/@your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-line-fill text-2xl mr-2"></i>
            LINEで相談する
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
          <a 
            href="#about" 
            className="group px-12 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            選ばれる3つの理由を見る
            <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>

      {/* Floating Tech Elements with Paint Effect */}
      <div className="absolute top-1/4 right-10 z-0 opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>
        <div 
          className="w-20 h-20 flex items-center justify-center rounded-2xl rotate-12"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.8), rgba(251, 113, 133, 0.6))',
            filter: 'blur(1px)',
          }}
        >
          <i className="ri-code-s-slash-line text-4xl text-white"></i>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-10 z-0 opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div 
          className="w-20 h-20 flex items-center justify-center rounded-2xl -rotate-12"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.8), rgba(20, 184, 166, 0.6))',
            filter: 'blur(1px)',
          }}
        >
          <i className="ri-robot-2-line text-4xl text-white"></i>
        </div>
      </div>
    </section>
  );
}
