// src/app/contact/page.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { useState, FormEvent } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid'; // Heroiconsのメールアイコン

// react-icons から、使用したいSNSアイコンをインポート
// GitHub, X (旧Twitter), YouTube のアイコンは、Font Awesome 6 (fa6) のものです。
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    inquiryType: '', // プルダウンの値
    otherInquiry: '', // 「その他」が選択された場合の記入欄
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // 簡単なバリデーション
    if (!formData.name || !formData.inquiryType || !formData.message) {
      setErrorMessage('すべての必須項目を入力してください。');
      setStatus('error');
      return;
    }
    if (formData.inquiryType === 'その他' && !formData.otherInquiry) {
      setErrorMessage('「その他」を選択した場合は、内容を具体的に入力してください。');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', { // API Routesのcontactエンドポイント
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // フォームをクリア
        setFormData({ name: '', inquiryType: '', otherInquiry: '', message: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'メッセージの送信に失敗しました。');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('ネットワークエラーが発生しました。');
      setStatus('error');
    }
  };

  return (
    <main className="container mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">お問い合わせ</h1>
      <section className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <p className="text-lg text-center mb-6 text-gray-700">
          ご興味をお持ちいただきありがとうございます。お気軽にご連絡ください。
        </p>

        {/* メールアドレスのセクション */}
        <div className="text-center mb-8">
          <a
            href="mailto:sekisei2424@gmail.com" // あなたのメールアドレス
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xl font-semibold transition duration-300"
          >
            <EnvelopeIcon className="h-6 w-6 mr-2" />
            sekisei2424@gmail.com
          </a>
        </div>

        {/* SNSリンクのセクション */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* GitHub */}
          <a
            href="https://github.com/sekisei2424" // あなたのGitHubユーザー名
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            {/* FaGithub コンポーネントに置き換え */}
            <FaGithub className="h-10 w-10" />
          </a>

          {/* X (旧Twitter) */}
          <a
            href="https://x.com/sekisei2424" // あなたのX (Twitter) ユーザー名
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            aria-label="X (Twitter)"
          >
            {/* FaXTwitter コンポーネントに置き換え */}
            <FaXTwitter className="h-10 w-10" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@sekisei2424" // あなたのYouTubeチャンネルIDまたはユーザーURL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 transition duration-300"
            aria-label="YouTube"
          >
            {/* FaYoutube コンポーネントに置き換え */}
            <FaYoutube className="h-10 w-10" />
          </a>
        </div>

        {/* 問い合わせフォーム本体 */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* 依頼者の名前 */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">依頼者の名前 <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* 依頼・相談内容（プルダウン） */}
          <div>
            <label htmlFor="inquiryType" className="block text-gray-700 text-sm font-bold mb-2">依頼・相談内容 <span className="text-red-500">*</span></label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">選択してください</option>
              <option value="Webサイト制作">Webサイト制作</option>
              <option value="UI/UXデザイン">UI/UXデザイン</option>
              <option value="ロゴデザイン">ロゴデザイン</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* 「その他」が選択された場合の記入欄 */}
          {formData.inquiryType === 'その他' && (
            <div>
              <label htmlFor="otherInquiry" className="block text-gray-700 text-sm font-bold mb-2">その他の内容 <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="otherInquiry"
                name="otherInquiry"
                value={formData.otherInquiry}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="具体的にご記入ください"
                required
              />
            </div>
          )}

          {/* 内容 */}
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">内容 <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          {/* 送信ボタン */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '送信中...' : 'メッセージを送信'}
            </button>
          </div>

          {/* 送信ステータスの表示 */}
          {status === 'success' && (
            <p className="text-green-600 text-center mt-4">メッセージが正常に送信されました！</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </section>
    </main>
  );
}