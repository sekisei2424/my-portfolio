// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // Resend SDKをインポート

// 環境変数からAPIキーを読み込む
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, inquiryType, otherInquiry, message } = body;

    // 1. サーバーサイドでのバリデーション
    if (!name || !inquiryType || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (inquiryType === 'その他' && !otherInquiry) {
      return NextResponse.json({ message: 'Please specify the "other" inquiry type' }, { status: 400 });
    }

    // メール内容の生成
    let subject = `ポートフォリオサイトからのお問い合わせ: ${inquiryType}`;
    if (inquiryType === 'その他' && otherInquiry) {
      subject += ` (${otherInquiry})`;
    }

    const emailText = `
      依頼者の名前: ${name}
      依頼・相談内容: ${inquiryType}${inquiryType === 'その他' && otherInquiry ? ` (${otherInquiry})` : ''}
      --------------------------------
      内容:
      ${message}
    `;

    // Resendを使ってメールを送信
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendが提供するドメイン、または認証済みのあなたのドメイン
      // 例: from: 'noreply@yourdomain.com' // 認証済みの独自ドメインを使う場合
      to: 'sekisei2424@gmail.com', // あなたが問い合わせを受け取りたいメールアドレス
      subject: subject,
      text: emailText,
      // html: `<p>${emailText.replace(/\n/g, '<br />')}</p>`, // HTMLメールとして送る場合
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending message:', error);
    // Resendからのエラーレスポンスを詳しくログに出すことも可能
    if (error instanceof Error) {
        return NextResponse.json({ message: 'Failed to send message: ' + error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}