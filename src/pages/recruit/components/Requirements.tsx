export default function Requirements() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-scroll-item]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const requirements = [
    {
      icon: 'ri-robot-2-line',
      title: 'AIに触れたことがある',
      subtitle: '（興味レベルでOK）',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Web制作をゼロから学びたい',
      subtitle: 'という強い意欲',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: 'ri-time-line',
      title: '継続的に学習できる',
      subtitle: '環境と時間',
      gradient: 'from-cyan-400 to-blue-400'
    }
  ];

  const flow = [
    {
      step: '1',
      title: 'エントリー',
      description: 'LINEまたはフォームから<br />エントリーしてください',
      icon: 'ri-user-add-line',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      step: '2',
      title: '面談・ヒアリング',
      description: 'オンラインで気軽に<br />お話しさせていただきます',
      icon: 'ri-chat-3-line',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      step: '3',
      title: '採用決定',
      description: '一緒に成長できる方には<br />採用のお知らせをお送りします',
      icon: 'ri-checkbox-circle-line',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      step: '4',
      title: '活動開始',
      description: 'いよいよ実践開始！<br />あなたの成長を全力サポートします',
      icon: 'ri-rocket-line',
      gradient: 'from-yellow-400 to-orange-400'
    }
  ];

  const workingConditions = [
    {
      icon: 'ri-calendar-line',
      title: '勤務時間',
      content: 'フレックスタイム対応<br />学業・家事との両立可能',
      gradient: 'from-pink-300 to-rose-300'
    },
    {
      icon: 'ri-home-line',
      title: '勤務場所',
      content: '在宅ワークOK<br />対面希望の方は四谷「TOMOSUBA」へ',
      gradient: 'from-purple-300 to-pink-300'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: '報酬',
      content: '成果に応じた<br />適切な報酬をお支払いします',
      gradient: 'from-cyan-300 to-blue-300'
    },
    {
      icon: 'ri-team-line',
      title: 'サポート',
      content: '24時間体制の<br />メンターサポートあり',
      gradient: 'from-yellow-300 to-orange-300'
    }
  ];

  const jobContents = [
    { text: 'ゼロイチでLP制作' },
    { text: 'お客様との接客' },
    { text: 'TOMOSUBAラウンジでのコミュニケーター（コミュマネ）' },
    { text: 'サイトの編集・修正（CMS）' },
    { text: 'サイトデザイン' },
    { text: 'デザインカンプ制作' }
  ];

  const benefits = [
    {
      icon: 'ri-briefcase-line',
      title: '実務経験',
      subtitle: 'プロの現場でのOJT経験が積める',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      icon: 'ri-folder-user-line',
      title: 'ポートフォリオ',
      subtitle: '就職活動に使える実績が作れる',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'スキルアップ',
      subtitle: 'AI×Web制作の実践スキルが身につく',
      gradient: 'from-cyan-400 to-blue-400'
    }
  ];

  return (
    <section id="requirements" className="py-24 sm:py-32 relative overflow-hidden">
      {/* オシャレな背景 */}
      <div className="absolute inset-0 z-0">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 via-purple-50 to-cyan-50"></div>
        
        {/* パターンオーバーレイ */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* アニメーション要素 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* グリッドパターン */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(0,0,0) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(0,0,0) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* タイトル */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            募集要項
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            学生インターン・主婦の方も大歓迎！✨<br />
            在宅ワーク・フレックス対応で、あなたのペースで成長できます
          </p>
        </div>

        {/* 必須条件 */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            📋 必須条件
          </h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {requirements.map((item, index) => (
              <div 
                key={index} 
                data-scroll-item
                data-index={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-rose-200 text-center transform hover:-translate-y-2 ${
                  isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 hover:rotate-6`}>
                  <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-rose-600 transition-colors">{item.title}</h4>
                <p className="text-base sm:text-lg text-gray-700">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 採用までの流れ */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            🌈 採用までの流れ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {flow.map((item, index) => (
              <div 
                key={index} 
                data-scroll-item
                data-index={index + 10}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-purple-200 text-center transform hover:-translate-y-2 hover:scale-105 group ${
                  isVisible[index + 10] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${item.gradient} rounded-full shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-xl sm:text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            ))}
          </div>
        </div>

        {/* オフィス情報（強調） */}
        <div 
          data-scroll-item
          data-index={50}
          className={`mb-16 sm:mb-20 bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 rounded-3xl p-8 sm:p-10 border-4 border-emerald-300 shadow-2xl ${
            isVisible[50] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl shadow-lg">
              <i className="ri-building-4-line text-4xl text-white"></i>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🏢 オフィス
            </h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-3">
                四ツ谷TOMOSUBA
              </h4>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                〒102-0083<br />
                東京都千代田区麹町５丁目3番地6 B1
              </p>
            </div>
          </div>
        </div>

        {/* 業務内容（強調） */}
        <div 
          data-scroll-item
          data-index={60}
          className={`mb-16 sm:mb-20 ${
            isVisible[60] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            💼 業務内容
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {jobContents.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 労働条件 */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            💼 労働条件
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workingConditions.map((item, index) => {
              // 報酬を強調表示
              if (item.title === '報酬') {
                return (
                  <div 
                    key={index} 
                    data-scroll-item
                    data-index={index + 20}
                    className={`bg-gradient-to-br from-yellow-50 to-orange-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-yellow-300 hover:border-orange-400 text-center transform hover:-translate-y-2 group ${
                      isVisible[index + 20] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                    <div className="space-y-2">
                      <p className="text-2xl sm:text-3xl font-bold text-orange-600">時給：1,500円</p>
                      <p className="text-xl sm:text-2xl font-bold text-orange-600">インセンティブ：20％</p>
                    </div>
                  </div>
                );
              }
              
              // 勤務場所を強調表示
              if (item.title === '勤務場所') {
                return (
                  <div 
                    key={index} 
                    data-scroll-item
                    data-index={index + 20}
                    className={`bg-gradient-to-br from-emerald-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-emerald-300 hover:border-cyan-400 text-center transform hover:-translate-y-2 group ${
                      isVisible[index + 20] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <div className="bg-white/80 rounded-xl p-4">
                      <p className="text-lg font-bold text-emerald-700 mb-2">四ツ谷TOMOSUBA</p>
                      <p className="text-sm text-gray-700 leading-relaxed">〒102-0083<br />東京都千代田区麹町５丁目3番地6 B1</p>
                    </div>
                  </div>
                );
              }

              // その他の労働条件
              return (
                <div 
                  key={index} 
                  data-scroll-item
                  data-index={index + 20}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-cyan-200 text-center transform hover:-translate-y-2 group ${
                    isVisible[index + 20] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 得られるもの */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            🎁 こんなことができます
          </h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                data-scroll-item
                data-index={index + 30}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-yellow-200 text-center transform hover:-translate-y-2 group ${
                  isVisible[index + 30] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors">{item.title}</h4>
                <p className="text-base sm:text-lg text-gray-700">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめメッセージ */}
        <div 
          data-scroll-item
          data-index={40}
          className={`mt-12 sm:mt-16 bg-gradient-to-r from-rose-100/90 via-pink-100/90 to-purple-100/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-rose-300/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
            isVisible[40] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 animate-pulse">💖</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              学生さん・主婦の方、大歓迎！
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              学業や家事で忙しい方でも、あなたのペースで無理なく活動できます。<br className="hidden sm:block" />
              在宅ワークOK・フレックス対応で、ライフスタイルに合わせて働けます。<br className="hidden sm:block" />
              経験がなくても大丈夫！丁寧にサポートいたします。✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
