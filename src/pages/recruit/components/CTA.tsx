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

      const response = await fetch('https://readdy.ai/api/form/submit/10slp-recruit-form', {
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
          window.REACT_APP_NAVIGATE('/thanks');
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
    <section className="py-32 bg-gradient-to-br from-red-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">挑戦の第一歩を、</span><br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">ここから。</span>
          </h2>
          <p className="text-2xl text-gray-700 font-medium">
            まずはLINEでお気軽にご相談ください
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-red-100">
          <form id="recruit-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-bold text-gray-900 mb-3">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl font-bold text-gray-900 mb-3">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xl font-bold text-gray-900 mb-3">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                placeholder="090-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl font-bold text-gray-900 mb-3">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                rows={5}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none resize-none"
                placeholder="ご質問やご要望をお聞かせください（500文字以内）"
              ></textarea>
              <p className="text-sm text-gray-500 mt-2">{formData.message.length}/500文字</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? '送信中...' : 'LINEで相談する'}
              <i className="ri-send-plane-fill ml-3"></i>
            </button>

            {submitStatus === 'success' && (
              <div className="text-center text-emerald-600 font-bold text-xl">
                送信完了しました！サンクスページに移動します...
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center text-red-600 font-bold text-xl">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}
          </form>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600 mb-6">または</p>
            <a
              href="https://calendar.google.com/calendar/appointments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-line mr-3"></i>
              Googleカレンダーで日程調整
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
