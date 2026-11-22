import type ko from "./ko";
import type { Messages } from "../types";

/** 日本語 — ko.ts と同じキーを持つこと */
const ja: Messages<typeof ko> = {
    common: {
        siteName: "カン・ダユン",
        viewLarger: "拡大表示",
        viewLargerOf: "{{name}}の画像を拡大表示",
        language: "言語を選択"
    },

    profile: {
        region: "プロフィール",
        name: "カン・ダユン",
        nameAlt: "(Dayoon Kang)",
        photoAlt: "プロフィール写真",
        toggle: "プロフィール",
        toggleLabel: "プロフィール情報の表示切替",
        detailTitle: "プロフィール詳細",
        location: "韓国 京畿道 安養市",
        school: "グンミョン高等学校",
        emailLabel: "メールを送る",
        githubLabel: "GitHubプロフィールを見る"
    },

    home: {
        heading: "はじめまして、カン・ダユンです",
        intro: "問題解決と協業を通じて、共に成長できる開発者を目指しています。フロントエンドとバックエンドのプロジェクトを通じて様々な経験を積み、開発中に直面した問題をそのままにせず、原因を深く分析して解決することにやりがいを感じてきました。チームプロジェクトでは協業の大切さを実感しました。特に意見が対立した場面で、お互いの考えをすり合わせてより良い結果を生み出せた経験が印象に残っています。その過程で、協業とは単に役割を分けることではなく、互いに学び合い成長していくプロセスだと気づきました。いつかはDB分野に進みたいと考えており、これからも知らないことを学びながら成長し続けていきます。",
        simpleProjects: "小さなプロジェクト",
        news: "最近のお知らせ",
        links: {
            limeet: "Limeet (PWA)",
            weather: "天気APIサービス",
            webcam: "モバイルWebカメラアプリ",
            school: "学校情報検索"
        },
        interests: {
            desktop: {
                title: "デスクトップアプリケーション",
                content: "C#とWPF(Windows Presentation Foundation)でGUIプログラミングを学習中です。"
            },
            devops: {
                title: "DevOpsの勉強",
                content: "GitHub Actionsを活用したCI/CDパイプラインの構築を学習中です。ワークフローを作成し、継続的なビルド・デプロイを研究しています。"
            }
        }
    },

    skill: {
        title: "技術スタック"
    },

    project: {
        title: "主なプロジェクト",
        role: "担当",
        demoVideo: "デモ動画",
        team: { solo: "個人", team: "チーム" },
        items: {
            shortform: {
                description: "ショート動画プラットフォームです。Kotlin・Spring BootのサーバーとReact・TypeScriptのクライアントを一つのモノレポで構成しました。フォロー、動画スワイプ、コミュニティ(投稿)、コメント・返信機能があります。",
                highlights: []
            },
            "movie-ticket": {
                description: "映画館の予約キオスクをWebに移植したプロジェクトです。フロントエンドはReact SPA、バックエンドはSpring Boot REST APIサーバーとして分離し、Spring AIとOllamaで映画のおすすめ機能を追加しました。",
                highlights: []
            },
            "mycloud-project": {
                description: "ファイルのアップロードと共有機能を持つクラウドサービスです。メール機能とアクセスキーで他のユーザーにファイルを共有できます。",
                highlights: []
            },
            "springboot-video-platform": {
                description: "モバイルWeb向けの動画プラットフォームです。動画のアップロード、いいね、チャンネル登録、視聴履歴、タグ、動画分析機能があります。",
                highlights: []
            },
            "springboot-blog": {
                description: "ブログプラットフォームです。投稿の作成・編集・削除、コメント、いいね機能とファイルアップロードを実装しました。",
                highlights: []
            },
            kmcreativeschool: {
                description: "学校暴力の通報Webサービスです。通報内容はSMTPメールで送信され、通報者は自分の通報履歴を確認できます。",
                role: "問い合わせ機能(CRUD)、警察アカウント管理、問い合わせ・警察テーブル設計",
                highlights: []
            }
        }
    },

    architecture: {
        title: "DB設計",
        erdAlt: "{{name}} ERD",
        viewLargerOf: "{{name}}のERDを拡大表示",
        items: {
            shortform: {
                title: "ショート動画プラットフォーム",
                description: "高校3年生の1学期を終えた夏休みから進めたショート動画プラットフォームのERDです。テーブルが多く画像ではカラム名が見えにくいため、スキーマ全体をテキストでもまとめました。",
                linkLabel: "スキーマをテキストで見る",
                points: []
            },
            movieTicket: {
                title: "映画予約キオスク",
                description: "未来有望分野の高卒人材育成事業の3年生プロジェクトで設計した、映画予約サービスのERDです。",
                points: []
            },
            mycloud: {
                title: "マイクラウド",
                description: "ファイルのアップロードと共有機能を持つクラウドサービスのERDです。約2日間で設計しました。",
                points: []
            },
            videoPlatform: {
                title: "Whynot 動画プラットフォーム",
                description: "動画プラットフォームのERDです。約3か月間、アプリケーション開発と並行して設計しました。",
                points: []
            },
            blog: {
                title: "Spring Boot ブログ",
                description: "ブログプラットフォームのERDです。約1か月間、開発と並行して設計し、基本的なCRUDとファイルI/Oを実装しました。",
                points: []
            },
            creativeSchool: {
                title: "京畿コンテンツ創意学校プロジェクト",
                description: "京畿コンテンツ創意学校のチームプロジェクトのERDです。このうち警察署・問い合わせテーブルの設計とCRUDの実装を担当しました。",
                points: []
            }
        }
    },

    cv: {
        title: "経歴・活動",
        present: "現在",
        sections: {
            work: "職歴",
            education: "学歴",
            certifications: "資格",
            awards: "受賞歴",
            clubs: "部活動"
        },
        experience: {
            imtsoft: {
                company: "IMTSoft",
                role: "ソフトウェア開発者・正社員",
                works: {
                    esl: {
                        title: "ESL(電子棚札)連携サーバー",
                        summary: "AIMSのUI改善版とプロキシサーバーを開発しました。",
                        details: []
                    },
                    signage: {
                        title: "デジタルサイネージ",
                        summary: "自社開発ソリューションであるデジタルサイネージサービスの開発・運用を担当しました。",
                        details: []
                    },
                    asp: {
                        title: "ASPサーバー管理・システム運用",
                        summary: "ASP(Application Service Provider)サーバーを管理し、サービスシステムを運用しています。",
                        details: []
                    }
                }
            }
        },
        items: {
            geunmyeongHigh: { title: "グンミョン高等学校", subtitle: "卒業" },
            gwanyangMiddle: { title: "クァニャン中学校", subtitle: "卒業" },
            gwanyangElementary: { title: "クァニャン小学校", subtitle: "卒業" },

            engineerInfoProcessing: { title: "情報処理産業技師", subtitle: "課程評価型" },
            craftsmanInfoProcessing: { title: "情報処理技能士" },
            craftsmanWebDesign: { title: "ウェブデザイン技能士" },
            computerSpecialist2: { title: "コンピュータ活用能力 2級" },
            gtqPhotoshop2: { title: "GTQ Photoshop 2級" },

            skillsAward: { title: "技能賞 金賞", subtitle: "1位" },
            algorithmContest: { title: "校内アルゴリズムコンテスト 優秀賞", subtitle: "2位" },
            infographicContest: { title: "校内インフォグラフィックコンテスト 優秀賞", subtitle: "3位" },
            spreadsheetContest: { title: "校内スプレッドシート関数コンテスト 奨励賞", subtitle: "3位" },
            attendance2: { title: "皆勤賞", subtitle: "2年生" },
            creativeSchoolContest: { title: "京畿コンテンツ創意学校コンテスト", subtitle: "最優秀賞" },
            attendance1: { title: "皆勤賞", subtitle: "1年生" },

            smartCodingClub: { title: "スマートコーディング部" },
            digitalContentClub: { title: "デジタルコンテンツ制作部" }
        }
    },

    portfolio: {
        title: "ポートフォリオ"
    },

    sitemap: {
        title: "サイトマップ"
    },

    notFound: {
        titleLine1: "お探しのページが",
        titleLine2: "見つかりませんでした。",
        home: "ホームに戻る",
        sitemap: "サイトマップ"
    },

    lightbox: {
        prev: "前の画像",
        next: "次の画像",
        close: "ライトボックスを閉じる",
        goTo: "{{n}}枚目の画像へ移動",
        fallbackAlt: "ライトボックス画像"
    }
};

export default ja;
