import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d5j2ak1845a7l1lrh8u0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          window.location.href = '/thanks';
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Painted Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-85"
          style={{
            background: `
              radial-gradient(ellipse at 10% 10%, rgba(244, 63, 94, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 20%, rgba(251, 113, 133, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(16, 185, 129, 0.35) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(251, 207, 232, 0.25) 0%, transparent 60%),
              linear-gradient(135deg, #fef2f2 0%, #ffffff 25%, #ecfdf5 75%, #f0fdfa 100%)
            `,
            filter: 'blur(60px)',
          }}
        />
        {/* Paint Texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.025) 2px, rgba(0,0,0,.025) 4px),
              repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px)
            `,
          }}
        />
      </div>

      {/* Animated Paint Blobs */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute top-10 left-10 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(251, 113, 133, 0.25) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(20, 184, 166, 0.25) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, rgba(251, 207, 232, 0.2) 40%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                「サービスが伝わらない、<br className="hidden md:block" />イメージを伝えたい」
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              その想い、私たちが10秒で形にします。
            </p>
            
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-4 sm:p-5 mb-8 border-2 border-rose-200">
              <p className="text-sm sm:text-base md:text-lg font-bold text-rose-700">
                本日15時までにご注文の場合、<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>デザインカンプ当日ご提示可能
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white px-8 sm:px-10 md:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-2xl cursor-pointer w-full sm:w-auto"
              >
                <i className="ri-line-fill text-2xl sm:text-3xl"></i>
                <span>LINEで相談する</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                  <i className="ri-arrow-right-line text-white text-xl sm:text-2xl"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-lg">
                <i className="ri-mail-send-line text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">お問い合わせフォーム</h3>
            </div>

            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-bold text-gray-900 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-900 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="ご質問やご要望をお聞かせください（500文字以内）"
                />
                <p className="text-sm text-gray-500 mt-2">{formData.message.length}/500文字</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white px-8 py-5 rounded-xl text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-700 px-6 py-4 rounded-xl text-center font-bold">
                  送信が完了しました！ありがとうございます。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center font-bold">
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
