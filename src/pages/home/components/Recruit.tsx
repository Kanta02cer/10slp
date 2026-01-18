export default function Recruit() {
  const requirements = [
    {
      icon: 'ri-robot-2-line',
      title: 'AIに触れたことがある',
      subtitle: '（興味レベルでOK）',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Web制作をゼロから学びたい',
      subtitle: 'という強い意欲',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: 'ri-time-line',
      title: '継続的に学習できる',
      subtitle: '環境と時間',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const welcome = [
    {
      icon: 'ri-map-pin-line',
      title: '四谷「TOMOSUBA」へ',
      subtitle: '対面で来れる方',
      gradient: 'from-green-500 to-lime-500'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: '上智大学および',
      subtitle: '四谷近辺の大学生',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: 'ri-team-line',
      title: 'チームでの',
      subtitle: '協働経験がある方',
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: 'ri-briefcase-line',
      title: 'プロの現場での',
      subtitle: 'OJT経験',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24時間',
      subtitle: 'サポート体制',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: 'ri-folder-user-line',
      title: 'ポートフォリオ',
      subtitle: '構築支援',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const support = [
    {
      icon: 'ri-user-star-line',
      title: '経験豊富な',
      subtitle: 'メンターによる指導',
      gradient: 'from-green-500 to-lime-500'
    },
    {
      icon: 'ri-global-line',
      title: 'オンライン・オフライン',
      subtitle: '両対応',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: 'ri-feedback-line',
      title: '定期的な',
      subtitle: 'フィードバック',
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section id="recruit" className="py-32 bg-gradient-to-br from-white via-rose-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #ef4444 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-8 py-4 bg-gradient-to-r from-red-500 to-emerald-500 text-white rounded-full text-lg font-bold shadow-xl">
              Recruit
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">共に成長する</span><br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">仲間を募集。</span>
          </h2>
        </div>

        {/* Requirements Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">必須条件</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-red-200 text-center">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-xl text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">歓迎条件</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {welcome.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-emerald-200 text-center">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-xl text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">得られるもの</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-rose-200 text-center">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-xl text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">サポート体制</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {support.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-green-200 text-center">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-xl text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
