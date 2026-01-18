export default function Requirements() {
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
    <section id="requirements" className="py-32 bg-gradient-to-br from-pink-50 via-purple-50 via-cyan-50 to-white relative overflow-hidden">
      {/* 可愛い背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-300 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-300 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full bg-cyan-300 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 星やハートの装飾 */}
      <div className="absolute top-32 right-20 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-pulse">💝</div>
      <div className="absolute top-64 left-32 text-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⭐</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* タイトル */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            募集要項
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            学生インターン・主婦の方も大歓迎！✨<br />
            在宅ワーク・フレックス対応で、あなたのペースで成長できます
          </p>
        </div>

        {/* 必須条件 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            📋 必須条件
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-pink-200 text-center transform hover:scale-105">
                <div className={`w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-full shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
                  <i className={`${item.icon} text-5xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-lg text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 採用までの流れ */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🌈 採用までの流れ
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {flow.map((item, index) => (
              <div key={index} className="relative">
                {/* 接続線 */}
                {index < flow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-pink-300 to-purple-300 transform -translate-y-1/2 z-0" style={{ width: 'calc(100% + 1.5rem)' }}></div>
                )}
                
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-purple-200 text-center transform hover:scale-105">
                  <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-full shadow-xl relative z-10`}>
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg`}>
                    <i className={`${item.icon} text-3xl text-white`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 労働条件 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            💼 労働条件
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingConditions.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-cyan-200 text-center transform hover:scale-105">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-full shadow-xl`}>
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
              </div>
            ))}
          </div>
        </div>

        {/* 得られるもの */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            🎁 こんなことができます
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-yellow-200 text-center transform hover:scale-105">
                <div className={`w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-full shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
                  <i className={`${item.icon} text-5xl text-white`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-lg text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめメッセージ */}
        <div className="mt-20 bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 rounded-3xl p-10 border-4 border-pink-200 shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">💖</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              学生さん・主婦の方、大歓迎！
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              学業や家事で忙しい方でも、あなたのペースで無理なく活動できます。<br />
              在宅ワークOK・フレックス対応で、ライフスタイルに合わせて働けます。<br />
              経験がなくても大丈夫！丁寧にサポートいたします。✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
