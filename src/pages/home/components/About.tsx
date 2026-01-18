export default function About() {
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

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* オシャレな背景 - ペイントと幾何学的要素 */}
      <div className="absolute inset-0 z-0">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* ペイント風のブロブ要素 */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-rose-200/15 to-orange-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* 幾何学的パターン */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* グリッドパターン */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(0,0,0) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(0,0,0) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* 幾何学的なライン装飾 */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200/30 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200/30 to-transparent opacity-20"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent opacity-20"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Concept Section */}
        <div 
          data-scroll-item
          data-index={0}
          className={`text-center mb-16 sm:mb-20 pb-8 border-b-2 border-gray-200 ${
            isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">01. </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 bg-clip-text text-transparent">私たちが選ばれる3つの理由</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
            なぜ、建築・不動産のプロフェッショナルが「10's LP」を選ぶのか。
          </p>
        </div>

        {/* 3つの理由 */}
        <div 
          data-scroll-item
          data-index={1}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            {/* 理由1 */}
            <div 
              data-scroll-item
              data-index={2}
              className={`group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-red-500 transform hover:-translate-y-2 ${
                isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <i className="ri-flashlight-line text-3xl sm:text-4xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">10秒で自社サイトができる</h4>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    最短10秒でデザインカンプを作成。圧倒的なスピードで事業をスタートできます。
                  </p>
                </div>
              </div>
            </div>

            {/* 理由2 */}
            <div 
              data-scroll-item
              data-index={3}
              className={`group bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-rose-500 transform hover:-translate-y-2 ${
                isVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <i className="ri-team-line text-3xl sm:text-4xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-rose-600 transition-colors">プロのマーケティングチームが担当する</h4>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    プロのマーケティングチームがトレンドを分析し、売れる構成を組み立てます。
                  </p>
                </div>
              </div>
            </div>

            {/* 理由3 */}
            <div 
              data-scroll-item
              data-index={4}
              className={`group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-emerald-500 transform hover:-translate-y-2 ${
                isVisible[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <i className="ri-edit-box-line text-3xl sm:text-4xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    CMS<sup className="text-xs text-gray-500">※</sup>が永続的に無料で利用できる
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    オプション付き利用の場合は、納品後も自社で簡単に修正・更新が可能です。
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    ※コンテンツの量によっては追加料金がかかります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* サービス利用の流れ */}
        <div 
          data-scroll-item
          data-index={5}
          className={`mb-16 sm:mb-20 pb-12 border-b border-gray-100 ${
            isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg">
              <i className="ri-flow-chart-line text-xl text-white"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              サービス利用の流れ
            </h3>
          </div>
          <div className="space-y-8">
            {/* STEP 1 */}
            <div 
              data-scroll-item
              data-index={6}
              className={`flex items-start gap-6 group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-red-500 transform hover:-translate-y-2 ${
                isVisible[6] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">ヒアリング</h4>
                <p className="text-base sm:text-lg text-gray-600 mb-3 font-bold">30分 / オンライン可</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  企業情報や素材を共有いただき、事業の本質を深掘りします。
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div 
              data-scroll-item
              data-index={7}
              className={`flex items-start gap-6 group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-rose-500 transform hover:-translate-y-2 ${
                isVisible[7] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-rose-600 transition-colors">デザイン・フレーム共有</h4>
                <p className="text-base sm:text-lg text-gray-600 mb-3 font-bold">最短10秒で作成</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  ヒアリングから最短10秒でベースを作成。フィードバックをもとにブラッシュアップ。
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div 
              data-scroll-item
              data-index={8}
              className={`flex items-start gap-6 group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-emerald-500 transform hover:-translate-y-2 ${
                isVisible[8] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">最終納品</h4>
                <p className="text-base sm:text-lg text-gray-600 mb-3 font-bold">目安2営業日</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  すぐに運用可能なLPをお届けします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ご準備いただくもの */}
        <div 
          data-scroll-item
          data-index={9}
          className={`mt-12 sm:mt-16 pt-12 border-t-2 border-gray-200 ${
            isVisible[9] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg">
              <i className="ri-file-list-3-line text-xl text-white"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              ご準備いただくもの
            </h3>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 sm:p-12 border-l-4 border-emerald-500 shadow-lg">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-building-line text-xl sm:text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">会社マスタ情報</h4>
                  <p className="text-base sm:text-lg text-gray-700">企業名・事業内容・代表者名</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-user-smile-line text-xl sm:text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-rose-600 transition-colors">担当者様の顔写真</h4>
                  <p className="text-base sm:text-lg text-gray-700">必要に応じて</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-image-line text-xl sm:text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">実際の仕事の様子がわかる写真や素材</h4>
                  <p className="text-base sm:text-lg text-gray-700">あればあるほど精度が上がります</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
