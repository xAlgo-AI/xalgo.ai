// i18n.js - Internationalization module for xalgo.ai
// Supports: English (en), Simplified Chinese (zh), Japanese (ja)

const translations = {
  en: {
    // Navigation
    'nav.hardware': 'Hardware',
    'nav.algorithms': 'Algorithms',
    'nav.opensource': 'Open Source',
    'nav.github': 'GitHub',
    'nav.community': 'Join Community',

    // Hero Section
    'hero.tag': 'xalgo-v1 Model Now Open Source',
    'hero.title': 'Experience AI',
    'hero.titleHighlight': 'Reshaping Daily Life',
    'hero.subtitle': 'Powered by cutting-edge proprietary algorithms, we have created smart rings, smart glasses, and smart frames that truly understand you. Now, we are open-sourcing our core models, inviting global developers to build the future of intelligent connectivity together.',
    'hero.ctaPrimary': 'Join Open Source',
    'hero.ctaSecondary': 'Explore Hardware',
    'hero.socialProof': '10,000+ Developers in Ecosystem',

    // Hardware Section
    'hardware.tag': 'Smart Hardware',
    'hardware.title': 'Seamless Interaction',
    'hardware.subtitle': 'We do more than just algorithms. To truly integrate AI into daily life, we have reimagined hardware forms to create the ultimate computing vehicles.',
    
    'hardware.ring.name': 'xRing Smart Ring',
    'hardware.ring.desc': 'A micro computing center at your fingertips. All-day vital signs monitoring combined with on-device gesture recognition algorithms—control everything with subtle finger movements.',
    'hardware.ring.feature1': 'Ultra-low power millisecond response',
    'hardware.ring.feature2': 'On-device continual learning engine',
    'hardware.ring.feature3': 'Medical-grade vital sensors',
    
    'hardware.glasses.name': 'xVision Smart Glasses',
    'hardware.glasses.desc': 'An AI assistant that delivers what you see. Equipped with our proprietary lightweight vision model for real-world parsing and augmented reality interaction.',
    'hardware.glasses.feature1': 'Instant object recognition & analysis',
    'hardware.glasses.feature2': 'Multimodal audio assistance',
    'hardware.glasses.feature3': 'Lightweight design at only 42g',
    
    'hardware.frame.name': 'xFrame Smart Frame',
    'hardware.frame.desc': 'Art that breaks the boundary between virtual and real. Uses diffusion models to generate emotion-matching artwork in real-time based on ambient atmosphere and conversation history.',
    'hardware.frame.feature1': 'Edge computing real-time generation',
    'hardware.frame.feature2': 'Ambient light adaptive engine',
    'hardware.frame.feature3': 'Ultra-clear anti-glare display',

    // Algorithms Section
    'algorithms.tag': 'xalgo.engine',
    'algorithms.title': 'Edge-Cloud Collaborative\nProprietary LLM Engine',
    'algorithms.desc': 'The beauty of hardware lies in its soul. We have rebuilt an extremely lightweight Transformer architecture variant for compute-constrained wearables, enabling complex AI inference to run smoothly at your fingertips.',
    
    'algorithms.feature1.title': 'Micro-Model Inference Acceleration',
    'algorithms.feature1.desc': 'Supports INT4 extreme quantization, achieving millisecond-level voice/gesture classification response on MCUs running at 100MHz.',
    
    'algorithms.feature2.title': 'Multimodal Edge-Cloud Coordination',
    'algorithms.feature2.desc': 'Complex visual understanding tasks seamlessly offload to the cloud while edge devices handle feature extraction and compression, reducing data transmission bandwidth by 85%.',
    
    'algorithms.feature3.title': 'Edge Continual Learning without Forgetting',
    'algorithms.feature3.desc': 'Combined with our proprietary memory network, devices can adapt to individual user habits with personalized fine-tuning while protecting privacy.',

    // Code block
    'code.local': 'Local Inference',
    'code.cloud': 'Cloud Syncing',
    'code.import': 'import',
    'code.as': 'as',
    'code.comment': '// Accuracy: 99.2%, RAM: 1.2MB',

    // Open Source Section
    'opensource.title': 'Closed Algorithms Belong to the Past\nOpen Compute Power Determines the Future',
    'opensource.desc': 'We believe the best AI should be accessible to more people. The xalgo core model library is now fully open source on GitHub under the Apache 2.0 license. Join us to write the next line of code for the Internet of Everything.',
    'opensource.github': 'View on GitHub',
    'opensource.docs': 'Read Documentation',

    // Footer
    'footer.slogan': 'Experience AI reshaping daily life.\nLet algorithms serve humanity through hardware.',
    'footer.products.title': 'Products',
    'footer.products.ring': 'xRing Smart Ring',
    'footer.products.glasses': 'xVision Smart Glasses',
    'footer.products.frame': 'xFrame Smart Frame',
    'footer.resources.title': 'Resources',
    'footer.resources.github': 'GitHub Repository',
    'footer.resources.docs': 'Algorithm Documentation',
    'footer.resources.blog': 'Developer Blog',
    'footer.contact.title': 'Contact Us',
    'footer.contact.partner': 'Partnership Inquiry',
    'footer.contact.careers': 'Join Our Team',
    'footer.contact.twitter': 'Twitter (X)',
    'footer.copyright': '© 2026 xalgo.ai. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Language Switcher
    'lang.en': 'English',
    'lang.zh': '简体中文',
    'lang.ja': '日本語'
  },

  zh: {
    // Navigation
    'nav.hardware': '硬件产品',
    'nav.algorithms': '核心算法',
    'nav.opensource': '开源生态',
    'nav.github': 'GitHub',
    'nav.community': '加入社区',

    // Hero Section
    'hero.tag': 'xalgo-v1 模型现已开源',
    'hero.title': '体验 AI',
    'hero.titleHighlight': '重塑生活日常',
    'hero.subtitle': '基于前沿自研算法，我们打造了能读懂您的智能戒指、智能眼镜与画框。现在，我们将核心模型开源，邀请全球极客共建万物智联的未来。',
    'hero.ctaPrimary': '参与开源共建',
    'hero.ctaSecondary': '探索智能硬件',
    'hero.socialProof': '已有 10,000+ 开发者加入生态',

    // Hardware Section
    'hardware.tag': 'Smart Hardware',
    'hardware.title': '无感交互的载体',
    'hardware.subtitle': '我们不只是做算法。为了让 AI 真正融入生活，我们重构了硬件形态，打造极致的计算载体。',
    
    'hardware.ring.name': 'xRing 智能戒指',
    'hardware.ring.desc': '指尖的微型算力中心。全天候生命体征监测，结合端侧手势识别算法，让指尖微动即可掌控全局。',
    'hardware.ring.feature1': '超低功耗毫秒级响应',
    'hardware.ring.feature2': '端侧持续学习引擎',
    'hardware.ring.feature3': '医用级体征传感',
    
    'hardware.glasses.name': 'xVision 智能眼镜',
    'hardware.glasses.desc': '所见即所得的 AI 助手。搭载自研轻量级视觉大模型，实时解析现实世界，提供增强现实交互。',
    'hardware.glasses.feature1': '即时物体识别分析',
    'hardware.glasses.feature2': '多模态音频辅助',
    'hardware.glasses.feature3': '仅重 42g 轻量化设计',
    
    'hardware.frame.name': 'xFrame 智能画框',
    'hardware.frame.desc': '打破虚实边界的艺术。根据环境氛围与对话历史，使用扩散模型实时生成情绪匹配的艺术画作。',
    'hardware.frame.feature1': '边缘计算实时生图',
    'hardware.frame.feature2': '环境光自适应引擎',
    'hardware.frame.feature3': '超清防眩光显示',

    // Algorithms Section
    'algorithms.tag': 'xalgo.engine',
    'algorithms.title': '端云协同的\n自研大模型引擎',
    'algorithms.desc': '硬件的美妙在于其背后的灵魂。我们为算力受限的智能穿戴设备，重头研发了极致轻量化的 Transformer 架构变体，让复杂的 AI 推理在指尖顺畅运行。',
    
    'algorithms.feature1.title': '微模型推理加速框架',
    'algorithms.feature1.desc': '支持 INT4 极限量化，在 100MHz 主频的 MCU 上实现毫秒级语音/手势分类响应。',
    
    'algorithms.feature2.title': '多模态云端协同调度',
    'algorithms.feature2.desc': '复杂视觉理解任务无缝上云，端侧实现特征提取压缩，数据传输带宽降低 85%。',
    
    'algorithms.feature3.title': '边缘端持续学习免遗忘',
    'algorithms.feature3.desc': '结合自研记忆网络，设备能根据用户习惯进行千人千面的适应性微调，保护隐私。',

    // Code block
    'code.local': 'Local Inference',
    'code.cloud': 'Cloud Syncing',
    'code.import': 'import',
    'code.as': 'as',
    'code.comment': '// Accuracy: 99.2%, RAM: 1.2MB',

    // Open Source Section
    'opensource.title': '封闭的算法属于过去\n开源的算力决定未来',
    'opensource.desc': '我们坚信，最好的 AI 应该让更多人触手可及。xalgo 核心模型库现已在 GitHub 上基于 Apache 2.0 协议全面开源。加入我们，一起编写万物互联的下一行代码。',
    'opensource.github': 'View on GitHub',
    'opensource.docs': '阅读技术文档',

    // Footer
    'footer.slogan': '体验 AI 重塑生活日常。\n让算法以硬件为载体，真正服务于人。',
    'footer.products.title': '产品',
    'footer.products.ring': 'xRing 智能戒指',
    'footer.products.glasses': 'xVision 智能眼镜',
    'footer.products.frame': 'xFrame 智能画框',
    'footer.resources.title': '资源',
    'footer.resources.github': 'GitHub 仓库',
    'footer.resources.docs': '算法文档',
    'footer.resources.blog': '开发者博客',
    'footer.contact.title': '联系我们',
    'footer.contact.partner': '合作咨询',
    'footer.contact.careers': '加入团队',
    'footer.contact.twitter': 'Twitter (X)',
    'footer.copyright': '© 2026 xalgo.ai. All rights reserved.',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',

    // Language Switcher
    'lang.en': 'English',
    'lang.zh': '简体中文',
    'lang.ja': '日本語'
  },

  ja: {
    // Navigation
    'nav.hardware': 'ハードウェア',
    'nav.algorithms': 'アルゴリズム',
    'nav.opensource': 'オープンソース',
    'nav.github': 'GitHub',
    'nav.community': 'コミュニティ',

    // Hero Section
    'hero.tag': 'xalgo-v1 モデルがオープンソース化',
    'hero.title': 'AI を体験しよう',
    'hero.titleHighlight': '日常を再構築する',
    'hero.subtitle': '最先端の独自アルゴリズムを基に、あなたを理解するスマートリング、スマートグラス、スマートフレームを開発しました。今、コアモデルをオープンソース化し、世界中の開発者と共に万物インターネットの未来を築くことをお誘いします。',
    'hero.ctaPrimary': 'オープンソースに参加',
    'hero.ctaSecondary': 'ハードウェアを探索',
    'hero.socialProof': '10,000+ の開発者がエコシステムに参加',

    // Hardware Section
    'hardware.tag': 'Smart Hardware',
    'hardware.title': 'シームレスなインタラクション',
    'hardware.subtitle': '私たちはアルゴリズムだけを作るのではありません。AI を日常生活に真に統合するため、ハードウェアの形態を再構築し、究極のコンピューティング载体を作り上げました。',
    
    'hardware.ring.name': 'xRing スマートリング',
    'hardware.ring.desc': '指先のマイクロコンピューティングセンター。終日のバイタルサイン監視とオンデバイスジェスチャー認識アルゴリズムを組み合わせ、指先のわずかな動きで全てをコントロール。',
    'hardware.ring.feature1': '超低消費電力ミリ秒応答',
    'hardware.ring.feature2': 'オンデバイス継続学習エンジン',
    'hardware.ring.feature3': '医療グレードバイタルセンサー',
    
    'hardware.glasses.name': 'xVision スマートグラス',
    'hardware.glasses.desc': '見たものがそのまま得られる AI アシスタント。独自の軽量ビジョンモデルを搭載し、現実世界をリアルタイム解析、拡張現実インタラクションを提供。',
    'hardware.glasses.feature1': '即時物体認識・分析',
    'hardware.glasses.feature2': 'マルチモーダル音声支援',
    'hardware.glasses.feature3': 'わずか 42g の軽量設計',
    
    'hardware.frame.name': 'xFrame スマートフレーム',
    'hardware.frame.desc': '仮想と現実の境界を打ち破るアート。環境雰囲気と会話履歴に基づき、拡散モデルを使用して感情に合わせたアートワークをリアルタイム生成。',
    'hardware.frame.feature1': 'エッジコンピューティングリアルタイム生成',
    'hardware.frame.feature2': '環境光適応エンジン',
    'hardware.frame.feature3': '超高精細アンチグレア表示',

    // Algorithms Section
    'algorithms.tag': 'xalgo.engine',
    'algorithms.title': 'エッジ・クラウド協調\n独自 LLM エンジン',
    'algorithms.desc': 'ハードウェアの美しさはその魂にあります。コンピュート制限のあるウェアラブルデバイスのために、極めて軽量な Transformer アーキテクチャ変体を一から開発し、複雑な AI 推論を指先でスムーズに実行できるようにしました。',
    
    'algorithms.feature1.title': 'マイクロモデル推論加速フレームワーク',
    'algorithms.feature1.desc': 'INT4 極限量子化をサポート、100MHz MCU でミリ秒級の音声/ジェスチャー分類応答を実現。',
    
    'algorithms.feature2.title': 'マルチモーダルエッジ・クラウド協調',
    'algorithms.feature2.desc': '複雑な視覚理解タスクをシームレスにクラウドにオフロードし、エッジ側で特徴抽出と圧縮を実現、データ転送帯域を 85% 削減。',
    
    'algorithms.feature3.title': 'エッジ継続学習・忘却防止',
    'algorithms.feature3.desc': '独自のメモリネットワークと組み合わせ、デバイスがユーザーの習慣に適応し、個別化された微調整とプライバシー保護を実現。',

    // Code block
    'code.local': 'Local Inference',
    'code.cloud': 'Cloud Syncing',
    'code.import': 'import',
    'code.as': 'as',
    'code.comment': '// Accuracy: 99.2%, RAM: 1.2MB',

    // Open Source Section
    'opensource.title': '閉鎖的なアルゴリズムは過去に属する\nオープンな算力が未来を決める',
    'opensource.desc': '私たちは、最高の AI はより多くの人にアクセスできるべきだと信じています。xalgo コアモデルライブラリは、Apache 2.0 ライセンスの下で GitHub で完全にオープンソース化されています。私たちと一緒に、万物インターネットの次のコードを書きましょう。',
    'opensource.github': 'GitHub で見る',
    'opensource.docs': '技術文書を読む',

    // Footer
    'footer.slogan': 'AI が日常を再構築する体験を。\nアルゴリズムをハードウェアの载体として、人々に奉仕する。',
    'footer.products.title': '製品',
    'footer.products.ring': 'xRing スマートリング',
    'footer.products.glasses': 'xVision スマートグラス',
    'footer.products.frame': 'xFrame スマートフレーム',
    'footer.resources.title': 'リソース',
    'footer.resources.github': 'GitHub リポジトリ',
    'footer.resources.docs': 'アルゴリズムドキュメント',
    'footer.resources.blog': '開発者ブログ',
    'footer.contact.title': 'お問い合わせ',
    'footer.contact.partner': 'パートナー募集',
    'footer.contact.careers': '採用情報',
    'footer.contact.twitter': 'Twitter (X)',
    'footer.copyright': '© 2026 xalgo.ai. All rights reserved.',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',

    // Language Switcher
    'lang.en': 'English',
    'lang.zh': '简体中文',
    'lang.ja': '日本語'
  }
};

// Supported languages
const supportedLanguages = ['en', 'zh', 'ja'];

// Detect language from browser or localStorage
function detectLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem('xalgo-lang');
  if (savedLang && supportedLanguages.includes(savedLang)) {
    return savedLang;
  }
  
  // Detect from browser language
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.toLowerCase();
  
  if (langCode.startsWith('zh')) return 'zh';
  if (langCode.startsWith('ja')) return 'ja';
  return 'en'; // Default to English
}

// Set language and update content
function setLanguage(lang) {
  if (!supportedLanguages.includes(lang)) {
    console.error(`Unsupported language: ${lang}`);
    return;
  }
  
  // Save to localStorage
  localStorage.setItem('xalgo-lang', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja-JP' : 'en';
  
  // Update current language display
  const currentLangEl = document.getElementById('current-lang');
  if (currentLangEl) {
    currentLangEl.textContent = lang.toUpperCase();
  }
  
  // Update all elements with data-i18n attribute
  updateContent(lang);
}

// Typewriter Effect
let currentTypewriterTimeout = null;
let isTyping = false;

function typeWriterEffect(element, text, speed = 60) {
  // Clear any ongoing typing
  if (currentTypewriterTimeout) {
    clearTimeout(currentTypewriterTimeout);
    currentTypewriterTimeout = null;
  }
  
  isTyping = true;
  element.textContent = '';
  
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      currentTypewriterTimeout = setTimeout(typeChar, speed);
    } else {
      isTyping = false;
      currentTypewriterTimeout = null;
    }
  }
  
  // Delay before starting typewriter effect
  setTimeout(typeChar, 400);
}

// Update all translatable content
function updateContent(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang]?.[key];
    
    if (translation !== undefined) {
      // Skip typewriter elements - they are handled separately
      if (el.classList.contains('typewriter-text')) {
        typeWriterEffect(el, translation, 70);
        return;
      }
      
      // Handle multiline text (split by \n and create <br> tags)
      if (translation.includes('\n')) {
        el.innerHTML = translation.replace(/\n/g, '<br />');
      } else {
        el.textContent = translation;
      }
    }
  });
}

// Language switcher dropdown toggle
let langMenuOpen = false;

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  const arrow = document.getElementById('lang-arrow');
  
  if (!menu) return;
  
  langMenuOpen = !langMenuOpen;
  
  if (langMenuOpen) {
    menu.classList.remove('opacity-0', 'invisible');
    menu.classList.add('opacity-100', 'visible');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  } else {
    menu.classList.add('opacity-0', 'invisible');
    menu.classList.remove('opacity-100', 'visible');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const switcher = document.getElementById('lang-switcher');
  if (switcher && !switcher.contains(e.target) && langMenuOpen) {
    toggleLangMenu();
  }
});

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleLangMenu();
    });
  }
});

// Initialize i18n on page load
function initI18n() {
  const lang = detectLanguage();
  setLanguage(lang);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
