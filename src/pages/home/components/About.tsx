export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Painted Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `
              radial-gradient(ellipse at 15% 20%, rgba(239, 68, 68, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 85% 30%, rgba(251, 113, 133, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 60%, rgba(16, 185, 129, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 70%, rgba(244, 63, 94, 0.2) 0%, transparent 50%),
              linear-gradient(180deg, #ffffff 0%, #fef2f2 30%, #ffffff 60%, #ecfdf5 100%)
            `,
            filter: 'blur(50px)',
          }}
        />
        {/* Paint Texture */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,.02) 3px, rgba(0,0,0,.02) 6px),
              repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,.015) 3px, rgba(0,0,0,.015) 6px)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Concept Section */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">01. </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 bg-clip-text text-transparent">私たちが選ばれる3つの理由</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto font-medium mb-4">
            なぜ、建築・不動産のプロフェッショナルが「10's LP」を選ぶのか。
          </p>
        </div>

        {/* 3つの理由 */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-10">
            {/* 理由1 */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-shield-check-line text-4xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Regalis Japan Groupが母体の安心感</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                単なる制作会社ではなく、事業主体としての実績を持つグループが運営。ビジネスの現場を理解した、地に足のついた提案を行います。
              </p>
            </div>

            {/* 理由2 */}
            <div className="group bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-team-line text-4xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">プロのマーケティングチームによる戦略設計</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                「作って終わり」ではありません。建築・塗装業界の相場感や顧客動向を熟知したチームが、売れる構成を組み立てます。
              </p>
            </div>

            {/* 理由3 */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-palette-line text-4xl text-white"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">北欧フィンランドのデザイン思考×日本最速</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                代表はフィンランド最大の芸術系大学にてデザイン思考を修了。本場のアールト大学等で培われた「本質的な美」と「機能性」を、独自のシステムにより**最短10秒（※カンプ作成）**で形にします。
              </p>
            </div>
          </div>
        </div>

        {/* サービス利用の流れ */}
        <div className="mb-32">
          <h3 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            サービス利用の流れ
          </h3>
          <div className="relative">
            {/* 接続線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-300 via-rose-300 to-emerald-300 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {/* STEP 1 */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border-4 border-red-200 hover:border-red-400 transition-all duration-300">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6 mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-center text-gray-900">ヒアリング</h4>
                <p className="text-lg text-gray-700 text-center mb-4 font-bold">30分 / オンライン可</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  企業情報や素材を共有いただき、事業の本質を深掘りします。
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border-4 border-rose-200 hover:border-rose-400 transition-all duration-300">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-full mb-6 mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-center text-gray-900">デザイン・フレーム共有</h4>
                <p className="text-lg text-gray-700 text-center mb-4 font-bold">最短10秒で作成</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ヒアリングから最短10秒でベースを作成。フィードバックをもとにブラッシュアップ。
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border-4 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-6 mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-center text-gray-900">最終納品</h4>
                <p className="text-lg text-gray-700 text-center mb-4 font-bold">目安2営業日</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  すぐに運用可能なLPをお届けします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ご準備いただくもの */}
        <div className="mt-32">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            ご準備いただくもの
          </h3>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border-4 border-white shadow-xl">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex-shrink-0 shadow-lg">
                  <i className="ri-building-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">会社マスタ情報</h4>
                  <p className="text-lg text-gray-700">企業名・事業内容・代表者名</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex-shrink-0 shadow-lg">
                  <i className="ri-user-smile-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">担当者様の顔写真</h4>
                  <p className="text-lg text-gray-700">必要に応じて</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex-shrink-0 shadow-lg">
                  <i className="ri-image-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">実際の仕事の様子がわかる写真や素材</h4>
                  <p className="text-lg text-gray-700">あればあるほど精度が上がります</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
