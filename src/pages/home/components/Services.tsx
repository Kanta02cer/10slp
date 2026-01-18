export default function Services() {
  // ポートフォリオ画像のパス（BASE_URLを考慮）
  const baseUrl = import.meta.env.BASE_URL;
  const portfolioItems = [
    {
      title: '株式会社CROSSLAB',
      url: 'https://crosslab.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.41.28.png')}`,
    },
    {
      title: '株式会社万代',
      url: 'https://komuten-osaka-fc.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.41.47.png')}`,
    },
    {
      title: '株式会社万代建設',
      url: 'https://banken-recruit.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.41.57.png')}`,
    },
    {
      title: 'PAGRISTA CLUB Pullover Hoodie',
      subtitle: '（ゴルフファッションブランド）',
      url: 'https://pagurisutaclub.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.42.05.png')}`,
    },
    {
      title: '株式会社万代（採用情報）',
      url: 'https://bandai-recruit.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.42.12.png')}`,
    },
    {
      title: 'BANKEN塗装',
      url: 'https://banken-paint.readdy.co',
      image: `${baseUrl}${encodeURI('スクリーンショット 2026-01-18 14.42.20.png')}`,
    },
  ];

  // カルーセル用の状態管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 自動スクロール（少し早め: 2.5秒）
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (portfolioItems.length * 2));
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, portfolioItems.length]);
  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-rose-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">02. </span>
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 bg-clip-text text-transparent">サービスメニュー・料金体系</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 text-center mb-16 font-medium">
          お客様のニーズに合わせて、明快なプランをご用意しました。
        </p>

        {/* SAISOKUプラン */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            SAISOKUプラン（固定5セクション）
          </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            企業ロゴを共有するだけで、当日中に作成できるLP
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-orange-300 relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                【最速プラン】
              </div>
              <div className="text-center mb-8 mt-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  55,000円
                </div>
                <div className="text-sm text-gray-600 mb-6">（税込）</div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">構成案</h4>
                <ul className="space-y-3 text-left max-w-2xl mx-auto">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">ヒーローセクション</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">サービス・商品紹介セクション</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">特徴・メリット紹介セクション</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">お客様の声・実績紹介セクション</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">CTA（お問い合わせ・申込）セクション</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">企業ロゴを共有するだけでOK</div>
                <div className="text-xs text-gray-600">当日中に作成可能</div>
              </div>
            </div>
          </div>
        </div>

        {/* LP制作プラン */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            丸投げプラン
              </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            縦長の1枚ページで、成約率を最大化します。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* スタータープラン */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-200 hover:border-red-300 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">スターター</h4>
                <div className="text-sm text-red-600 font-medium mb-2">（初めての方はこちら）※</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  165,000円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
            </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">基本デザインと自由構成</div>
                    <div className="text-sm text-gray-600">（お客様側からの持ち込み必須）</div>
          </div>
                </div>
              </div>
            </div>

            {/* スタンダードプラン - おすすめ */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-400 relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                【一番人気】
              </div>
              <div className="text-center mb-6 mt-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">スタンダード</h4>
                <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  330,000円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">構成提案</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">オリジナルデザイン</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">修正3回</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">デザインカンプ作成</div>
                    <div className="text-sm text-emerald-600 font-bold mt-1">
                      デザインカンプまで当日中（最短10秒）に作成可能！
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">「まずはこの1枚から」</div>
                <div className="text-xs text-gray-600">構成からデザインまで丸投げできるプラン</div>
            </div>
          </div>

            {/* プレミアムプラン */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">プレミアム</h4>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  660,000円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">スタンダードの内容</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">CMS付き</div>
                    <div className="text-sm text-gray-600">（お客様自身で更新可能）</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-emerald-500 text-xl mt-1"></i>
                  <div>
                    <div className="font-bold text-gray-900">修正3回</div>
          </div>
                </div>
              </div>
            </div>
          </div>

          {/* LP制作プラン 比較表 */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">機能</th>
                  <th className="px-6 py-4 text-center font-bold">SAISOKU<br/>55,000円</th>
                  <th className="px-6 py-4 text-center font-bold">スターター<br/>165,000円</th>
                  <th className="px-6 py-4 text-center font-bold">スタンダード<br/>330,000円</th>
                  <th className="px-6 py-4 text-center font-bold">プレミアム<br/>660,000円</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">構成提案</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">オリジナルデザイン</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">修正回数</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">1回</td>
                  <td className="px-6 py-4 text-center">3回</td>
                  <td className="px-6 py-4 text-center">3回</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">デザインカンプ作成</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">CMS対応</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-<br/><span className="text-sm text-gray-600">(オプション +30万円)</span></td>
                  <td className="px-6 py-4 text-center">-<br/><span className="text-sm text-gray-600">(オプション +30万円)</span></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">ページ数</td>
                  <td className="px-6 py-4 text-center">固定5セクション</td>
                  <td className="px-6 py-4 text-center">自由構成</td>
                  <td className="px-6 py-4 text-center">最大2ページ</td>
                  <td className="px-6 py-4 text-center">最大5ページ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* WEBサイト制作プラン */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            WEBサイト制作（複数ページ構成）
              </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            情報量の多い物件紹介や、会社案内を兼ねたサイト構築に。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ライトプラン */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">ライト</h4>
                <div className="text-2xl text-gray-700 mb-2">規模目安</div>
                <div className="text-lg text-gray-600 mb-4">A4換算 約3枚分</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  33万円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
              </div>
            </div>

            {/* ミドルプラン */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">ミドル</h4>
                <div className="text-2xl text-gray-700 mb-2">規模目安</div>
                <div className="text-lg text-gray-600 mb-4">A4換算 約8枚分</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  66万円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
            </div>
          </div>

            {/* エンタープライズプラン */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-emerald-400 relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                【大規模対応】
              </div>
              <div className="text-center mb-6 mt-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">エンタープライズ</h4>
                <div className="text-2xl text-gray-700 mb-2">規模目安</div>
                <div className="text-lg text-gray-600 mb-4">A4換算 約10枚分〜</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  110万円
                </div>
                <div className="text-sm text-gray-600">（税込）</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border-4 border-white shadow-xl max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 mb-2">オプション：CMS実装</div>
              <div className="text-2xl font-bold text-emerald-700">（お知らせ等の更新機能）</div>
              <div className="text-3xl font-bold text-emerald-600 mt-2">＋300,000円</div>
            </div>
          </div>

          {/* WEBサイト制作プラン 比較表 */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">機能</th>
                  <th className="px-6 py-4 text-center font-bold">ライト<br/>33万円</th>
                  <th className="px-6 py-4 text-center font-bold">ミドル<br/>66万円</th>
                  <th className="px-6 py-4 text-center font-bold">エンタープライズ<br/>110万円</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">ページ数</td>
                  <td className="px-6 py-4 text-center">約3ページ<br/><span className="text-sm text-gray-600">(A4換算 約3枚分)</span></td>
                  <td className="px-6 py-4 text-center">約8ページ<br/><span className="text-sm text-gray-600">(A4換算 約8枚分)</span></td>
                  <td className="px-6 py-4 text-center">10ページ以上<br/><span className="text-sm text-gray-600">(A4換算 約10枚分〜)</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">構成提案</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">オリジナルデザイン</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">修正回数</td>
                  <td className="px-6 py-4 text-center">3回</td>
                  <td className="px-6 py-4 text-center">3回</td>
                  <td className="px-6 py-4 text-center">3回</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">デザインカンプ作成</td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                  <td className="px-6 py-4 text-center"><i className="ri-check-line text-emerald-500 text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">CMS対応</td>
                  <td className="px-6 py-4 text-center">-<br/><span className="text-sm text-gray-600">(オプション +30万円)</span></td>
                  <td className="px-6 py-4 text-center">-<br/><span className="text-sm text-gray-600">(オプション +30万円)</span></td>
                  <td className="px-6 py-4 text-center">-<br/><span className="text-sm text-gray-600">(オプション +30万円)</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">ページ形式</td>
                  <td className="px-6 py-4 text-center">複数ページ構成</td>
                  <td className="px-6 py-4 text-center">複数ページ構成</td>
                  <td className="px-6 py-4 text-center">複数ページ構成</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* オプションメニュー */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            オプションメニュー
          </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            広告運用や信頼性向上のために必要なパーツも即日対応可能です。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-rose-300 transition-all duration-300">
              <div className="text-lg font-bold text-gray-900 mb-2">サンクスページ制作</div>
              <div className="text-2xl font-bold text-rose-600">22,000円（税込）</div>
              <div className="text-sm text-gray-600 mt-2">計測タグ設置、LINE登録誘導に必須</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-rose-300 transition-all duration-300">
              <div className="text-lg font-bold text-gray-900 mb-2">プライバシーポリシー作成</div>
              <div className="text-2xl font-bold text-rose-600">11,000円（税込）</div>
              <div className="text-sm text-gray-600 mt-2">Google/Meta広告運用に必須</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-rose-300 transition-all duration-300">
              <div className="text-lg font-bold text-gray-900 mb-2">特定商取引法に基づく表記</div>
              <div className="text-2xl font-bold text-rose-600">11,000円（税込）</div>
              <div className="text-sm text-gray-600 mt-2">有料サービスの直接販売に必須</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-rose-300 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-lg font-bold text-gray-900 mb-2">カスタム入力フォーム</div>
              <div className="text-2xl font-bold text-rose-600">20,000円〜50,000円（税込）</div>
              <div className="text-sm text-gray-600 mt-2">特別な入力チェックや項目が必要な場合</div>
            </div>
          </div>
        </div>

        {/* 運用オプション */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            運用オプション
              </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            CMS運用コンサルサービスでサイトの効果的な運用をサポートします
          </p>

          {/* プレミアムプラン特典 */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-6 border-4 border-emerald-300 shadow-xl">
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-700 mb-2">🎉 プレミアムプラン限定特典</div>
                <div className="text-2xl font-bold text-emerald-800 mb-1">運用サービス 3ヶ月無料</div>
                <div className="text-base text-emerald-700">その後も永年半額で提供</div>
              </div>
            </div>
          </div>

          {/* 運用プラン比較表 */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full min-w-[600px] bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden max-w-5xl mx-auto">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  <th className="px-4 sm:px-6 py-4 text-left font-bold text-sm sm:text-base">機能</th>
                  <th className="px-4 sm:px-6 py-4 text-center font-bold">
                    <div className="text-sm sm:text-base mb-2">スタータープラン</div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">月額3万円</div>
                    <div className="text-xs sm:text-sm font-normal">（運用箇所：2箇所まで）</div>
                    <div className="text-xs sm:text-sm font-bold mt-2">🎁 最初の3ヶ月半額</div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-center font-bold">
                    <div className="text-sm sm:text-base mb-2">プロプラン【おすすめ】</div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">月額10万円</div>
                    <div className="text-xs sm:text-sm font-normal">（運用箇所：3箇所以上）</div>
                    <div className="text-xs sm:text-sm font-normal">5箇所目以上：1箇所3万円</div>
                    <div className="text-xs sm:text-sm font-bold mt-2">🎁 最初の3ヶ月半額</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">SEO対策</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">サイトの運用</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">お知らせ</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">お問い合わせ</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">記事の作成</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-400">-</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">テキスト修正</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-400">-</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">記事更新</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-400">-</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">定例ヒアリング</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-400">-</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-center"><i className="ri-check-line text-emerald-500 text-lg sm:text-xl"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ポートフォリオ */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ポートフォリオ
              </h3>
          <p className="text-xl text-gray-700 text-center mb-12 font-medium">
            実際のサイトのワイヤーフレーム、デザインカンプを提示します
          </p>

          {/* カルーセル */}
          <div 
            className="relative overflow-hidden max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={carouselRef}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex % portfolioItems.length) * (100 / Math.min(3, portfolioItems.length))}%)`,
              }}
            >
              {/* ループ用に2倍のアイテムを表示 */}
              {[...portfolioItems, ...portfolioItems].map((item, index) => (
                <div key={index} className="min-w-[calc(100%/3)] md:min-w-[calc(100%/3)] px-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 group block"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={item.image}
                        alt={`${item.title} トップ画面`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5">
                      <div className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-gray-600 mb-1">{item.subtitle}</div>
                      )}
                      <div className="text-sm text-purple-600 break-all">{item.url.replace('https://', '')}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://line.me/R/ti/p/@your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-line-fill text-3xl"></i>
            <span>LINEで相談する</span>
            <i className="ri-arrow-right-line text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
