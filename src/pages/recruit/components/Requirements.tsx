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
    <section id="requirements" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* タイトル */}
        <div 
          data-scroll-item
          data-index={0}
          className={`text-center mb-16 sm:mb-20 pb-8 border-b-2 border-gray-200 ${
            isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            募集要項
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            学生インターン・主婦の方も大歓迎！✨<br />
            在宅ワーク・フレックス対応で、あなたのペースで成長できます
          </p>
        </div>

        {/* 必須条件 */}
        <div 
          data-scroll-item
          data-index={1}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            📋 必須条件
          </h3>
          <div className="space-y-6">
            {requirements.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group"
              >
                <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">{item.title}</h4>
                  <p className="text-base text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 採用までの流れ */}
        <div 
          data-scroll-item
          data-index={2}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            🌈 採用までの流れ
          </h3>
          <div className="space-y-8">
            {flow.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 group"
              >
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* オフィス情報（強調） */}
        <div 
          data-scroll-item
          data-index={3}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            🏢 オフィス
          </h3>
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6 sm:p-8 border-l-4 border-emerald-500">
            <h4 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-4">
              四ツ谷TOMOSUBA
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              〒102-0083<br />
              東京都千代田区麹町５丁目3番地6 B1
            </p>
          </div>
        </div>

        {/* 業務内容（強調） */}
        <div 
          data-scroll-item
          data-index={4}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            💼 業務内容
          </h3>
          <div className="space-y-4">
            {jobContents.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                <p className="text-base sm:text-lg text-gray-900 pt-1 group-hover:text-emerald-600 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 報酬（強調） */}
        <div 
          data-scroll-item
          data-index={5}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            💰 報酬
          </h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-500">
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-lg sm:text-xl text-gray-700 font-medium">時給：</span>
                <span className="text-3xl sm:text-4xl font-bold text-orange-600">1,500円</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-lg sm:text-xl text-gray-700 font-medium">インセンティブ：</span>
                <span className="text-3xl sm:text-4xl font-bold text-orange-600">20％</span>
              </div>
            </div>
          </div>
        </div>

        {/* 労働条件 */}
        <div 
          data-scroll-item
          data-index={6}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            💼 労働条件
          </h3>
          <div className="space-y-8">
            {workingConditions.filter(item => item.title !== '報酬' && item.title !== '勤務場所').map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{item.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 得られるもの */}
        <div 
          data-scroll-item
          data-index={7}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[7] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            🎁 こんなことができます
          </h3>
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group"
              >
                <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{item.title}</h4>
                  <p className="text-base text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめメッセージ */}
        <div 
          data-scroll-item
          data-index={8}
          className={`mt-12 sm:mt-16 pt-12 border-t-2 border-gray-200 ${
            isVisible[8] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              学生さん・主婦の方、大歓迎！
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
