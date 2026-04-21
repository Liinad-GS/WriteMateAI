const DEFAULT_TARGET_LANGUAGE = "Spanish"
const BUILD_CHANNEL = "development"
const LANGUAGE_PREFERENCE_KEY = "preferredTargetLanguage"
const CORRESPONDENCE_LANGUAGE_BY_HOST_KEY = "correspondenceLanguageByHost"
const LANGUAGE_PREFERENCE_PROMPT_KEY = "languagePreferencePromptSeen"
const APP_LANGUAGE_STORAGE_KEY = "appLanguage"
const FIRST_RUN_ONBOARDING_KEY = "firstRunOnboardingSeen"
const DAILY_USAGE_STORAGE_KEY = "dailyFreeUsage"
const RUSSIAN_LANGUAGE = "Russian"
const DEFAULT_APP_LANGUAGE = "en"
const DEFAULT_TONE = "professional"
const IS_DEVELOPMENT_BUILD = BUILD_CHANNEL !== "production"
const GOOGLE_DOCS_HOST = "docs.google.com"
const GOOGLE_DOCS_DOCUMENT_PATH_PREFIX = "/document/"
const GOOGLE_DOCS_SELECTION_SELECTORS = [
  ".kix-selection-overlay",
  ".kix-selection-overlay-native",
  "[class*='kix-selection-overlay']",
  "[class*='kix-overlay-under-text']"
]
const POPULAR_LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Polish",
  "Czech",
  "Ukrainian",
  "Russian",
  "Turkish",
  "Arabic",
  "Hebrew",
  "Hindi",
  "Chinese (Simplified)",
  "Japanese",
  "Korean",
  "Vietnamese",
  "Indonesian"
]
const TONE_OPTIONS = [
  { value: "professional", labelKey: "tone_professional" },
  { value: "friendly", labelKey: "tone_friendly" },
  { value: "confident", labelKey: "tone_confident" },
  { value: "warm", labelKey: "tone_warm" },
  { value: "shorter", labelKey: "tone_shorter" }
]
const APP_UI_LANGUAGES = [
  { value: "en", label: "English", flag: "US" },
  { value: "es", label: "Espanol", flag: "ES" },
  { value: "de", label: "Deutsch", flag: "DE" },
  { value: "fr", label: "Francais", flag: "FR" },
  { value: "pt", label: "Portugues", flag: "PT" },
  { value: "ja", label: "Japanese", flag: "JP" },
  { value: "ko", label: "Korean", flag: "KR" },
  { value: "zh", label: "Chinese", flag: "CN" },
  { value: "ru", label: "Russkiy", flag: "RU" },
  { value: "uk", label: "Ukrainska", flag: "UA" }
]
const UI_STRINGS = {
  en: {
    title: "AI Writing Tools",
    action_translate: "Translate",
    action_grammar: "Grammar",
    action_improve: "Improve",
    action_tone: "Tone",
    translate_to: "Translate to",
    tone_to: "Change tone to",
    tone_professional: "Professional",
    tone_friendly: "Friendly",
    tone_confident: "Confident",
    tone_warm: "Warm",
    tone_shorter: "Shorter",
    result: "Result",
    result_placeholder: "Result will appear here",
    copy: "Copy",
    reply: "Reply",
    reply_to: "Reply to {language}",
    reply_draft: "Reply draft",
    reply_placeholder: "Write your reply in your language",
    replace_text: "Replace text",
    tip_label: "Tip",
    tip_inline_grammar_first: "Use Grammar first if you want a cleaner draft before translation.",
    tip_inline_tone_general: "Tone is helpful when the meaning is right but the message feels off.",
    tip_inline_replace: "Replace text works best in chat boxes, email composers, and form fields.",
    tip_inline_translate_memory: "Translate remembers the other person's language after incoming messages.",
    tip_tone_context: "Try Tone when the meaning is right but the wording feels too harsh, too dry, or too long.",
    tip_translate_reply_memory: "After an incoming message is translated to your language, the reply language is remembered automatically.",
    tip_copy_page: "On regular page text, Copy is the safest way to reuse the result.",
    daily_limit_title: "Daily free limit reached",
    daily_limit_text: "You have used all {limit} free results for today.",
    buy_credits: "Buy access for $2",
    leave_feedback: "Leave feedback",
    feedback_placeholder: "Tell us what is missing or what makes the extension hard to use",
    send_feedback: "Send feedback",
    close: "Close",
    preferred_badge: "preferred",
    language_help: "Choose your main correspondence language. Your text suggests the conversation language, and vice versa.",
    model_buy_next: "Thanks for your interest. This $2 access flow is not live yet, and no money has been charged. In this purchase simulation, today's free limit has been reset and the app is available again.",
    feedback_saved: "Thanks, your feedback was sent.",
    feedback_failed: "Feedback could not be sent yet. Please check the feedback webhook setup.",
    no_text: "No text selected.",
    working: "Working on it...",
    loading_translate: "Translating your text...",
    loading_grammar: "Checking grammar and spelling...",
    loading_improve: "Improving clarity and flow...",
    loading_tone: "Adjusting the tone...",
    nothing_apply: "Nothing to apply yet.",
    unsupported_field: "This field is not supported yet.",
    copied: "Result copied.",
    copy_failed: "Copy failed. Please copy the text manually.",
    nothing_copy: "Nothing to copy yet.",
    replaced: "Text replaced.",
    ready: "",
    done_page: "Done. Review the result below and copy it if needed.",
    done_editable: "",
    onboarding_badge: "First time here",
    onboarding_title: "Hi!",
    onboarding_text: "This app helps you translate text right in the browser without breaking your flow.",
    onboarding_text_secondary: "If you switch between 2 or 3 languages during the day, the app will notice and suggest a reply in the same language as the conversation.",
    onboarding_text_tertiary: "You can also check grammar, adjust tone of voice, and improve your text. Press Next to take a quick tour.",
    onboarding_button_next: "Next",
    onboarding_button_skip: "Skip",
    onboarding_translate_title: "Translate",
    onboarding_translate_text: "Choose the language, then copy the translation or replace the selected text right here.",
    onboarding_translate_note: "If you reply in 2 or 3 languages during the day, the app will remember the correspondence language and suggest the right direction automatically.",
    onboarding_translate_demo: "Hello, thanks for your message.",
    onboarding_grammar_title: "Grammar",
    onboarding_grammar_text: "This tab checks the grammar of the selected text and works with any language.",
    onboarding_grammar_note: "Useful when the message is almost ready and you only want to fix mistakes quickly.",
    onboarding_improve_title: "Improve",
    onboarding_improve_text: "Use Improve when you want the text to sound clearer, more structured, and easier to read.",
    onboarding_improve_note: "It is a good fit for emails, chats, and short drafts that need a cleaner version.",
    onboarding_tone_title: "Tone",
    onboarding_tone_text: "Tone helps adapt the same message to the situation: more friendly, more professional, or more direct.",
    onboarding_tone_note: "Choose the context you want and the app will rewrite the wording for that style.",
    onboarding_button_done: "Finish",
    language_prompt_title: "Choose your default reply language",
    language_prompt_text: "We will use this as the preferred language when the app suggests translating your reply back.",
    language_prompt_save: "Save and continue",
    language_prompt_later: "Maybe later",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  es: {
    title: "Herramientas de escritura con IA",
    action_translate: "Traducir",
    action_grammar: "Gramatica",
    action_improve: "Mejorar",
    action_tone: "Tono",
    translate_to: "Traducir a",
    tone_to: "Cambiar tono a",
    tone_professional: "Profesional",
    tone_friendly: "Amistoso",
    tone_confident: "Seguro",
    tone_warm: "Cercano",
    tone_shorter: "Mas corto",
    result: "Resultado",
    result_placeholder: "El resultado aparecera aqui",
    copy: "Copiar",
    reply: "Responder",
    reply_to: "Responder en {language}",
    reply_draft: "Borrador de respuesta",
    reply_placeholder: "Escribe tu respuesta en tu idioma",
    replace_text: "Reemplazar texto",
    tip_label: "Consejo",
    tip_inline_grammar_first: "Usa Gramatica primero si quieres un borrador mas limpio antes de traducir.",
    tip_inline_tone_general: "Tono ayuda cuando el significado es correcto pero el mensaje no termina de sonar bien.",
    tip_inline_replace: "Reemplazar texto funciona mejor en chats, redactores de correo y campos de formulario.",
    tip_inline_translate_memory: "Traducir recuerda el idioma de la otra persona despues de los mensajes entrantes.",
    tip_tone_context: "Prueba Tono cuando el significado es correcto pero la redaccion suena demasiado dura, seca o larga.",
    tip_translate_reply_memory: "Despues de traducir un mensaje entrante a tu idioma, el idioma de respuesta se recuerda automaticamente.",
    tip_copy_page: "En texto normal de una pagina, Copiar es la forma mas segura de reutilizar el resultado.",
    daily_limit_title: "Limite diario gratuito alcanzado",
    daily_limit_text: "Has usado los {limit} resultados gratuitos de hoy.",
    buy_credits: "Comprar creditos",
    connect_provider: "Conectar proveedor de IA",
    leave_feedback: "Dejar feedback",
    feedback_placeholder: "Cuentanos que falta o que dificulta usar la extension",
    send_feedback: "Enviar feedback",
    close: "Cerrar",
    preferred_badge: "preferido",
    language_help: "Elige aqui tu idioma principal de correspondencia. El texto en tu idioma sugerira el idioma de la conversacion, y el texto en el idioma de la conversacion sugerira tu idioma.",
    model_buy_next: "El onboarding de creditos sera el siguiente paso. En esta simulacion de compra, el limite gratuito de hoy se restablecio y la app vuelve a estar disponible.",
    provider_next: "El onboarding del proveedor de IA sera el siguiente paso.",
    feedback_saved: "Gracias, tu feedback se guardo. Luego conectaremos el envio.",
    no_text: "No hay texto seleccionado.",
    working: "Trabajando en ello...",
    nothing_apply: "Todavia no hay nada para aplicar.",
    unsupported_field: "Este campo aun no es compatible.",
    copied: "Resultado copiado.",
    copy_failed: "No se pudo copiar. Copialo manualmente.",
    nothing_copy: "Todavia no hay nada para copiar.",
    replaced: "Texto reemplazado.",
    ready: "",
    done_page: "Hecho. Revisa el resultado abajo y copialo si hace falta.",
    done_editable: "Hecho. Revisa el resultado abajo y haz clic en Reemplazar texto si esta bien.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  de: {
    title: "KI-Schreibwerkzeuge",
    action_translate: "Ubersetzen",
    action_grammar: "Grammatik",
    action_improve: "Verbessern",
    action_tone: "Ton",
    translate_to: "Ubersetzen in",
    tone_to: "Ton andern zu",
    tone_professional: "Professionell",
    tone_friendly: "Freundlich",
    tone_confident: "Selbstbewusst",
    tone_warm: "Herzlich",
    tone_shorter: "Kurzer",
    result: "Ergebnis",
    result_placeholder: "Das Ergebnis erscheint hier",
    copy: "Kopieren",
    reply: "Antworten",
    reply_to: "Antworten auf {language}",
    reply_draft: "Antwortentwurf",
    reply_placeholder: "Schreibe deine Antwort in deiner Sprache",
    replace_text: "Text ersetzen",
    tip_label: "Hinweis",
    tip_inline_grammar_first: "Nutze Grammatik zuerst, wenn du vor der Ubersetzung einen saubereren Entwurf willst.",
    tip_inline_tone_general: "Ton hilft, wenn die Bedeutung stimmt, die Nachricht aber noch nicht richtig klingt.",
    tip_inline_replace: "Text ersetzen funktioniert am besten in Chats, E-Mail-Editoren und Formularfeldern.",
    tip_inline_translate_memory: "Ubersetzen merkt sich die Sprache der anderen Person nach eingehenden Nachrichten.",
    tip_tone_context: "Nutze Ton, wenn die Bedeutung stimmt, die Formulierung aber zu hart, zu trocken oder zu lang wirkt.",
    tip_translate_reply_memory: "Nachdem eine eingehende Nachricht in deine Sprache ubersetzt wurde, wird die Antwortsprache automatisch gemerkt.",
    tip_copy_page: "Bei normalem Seitentext ist Kopieren der sicherste Weg, das Ergebnis zu ubernehmen.",
    daily_limit_title: "Tagliches Freikontingent erreicht",
    daily_limit_text: "Du hast heute alle {limit} kostenlosen Ergebnisse genutzt.",
    buy_credits: "Credits kaufen",
    connect_provider: "KI-Anbieter verbinden",
    leave_feedback: "Feedback senden",
    feedback_placeholder: "Sag uns, was fehlt oder was die Nutzung erschwert",
    send_feedback: "Feedback senden",
    close: "Schliessen",
    preferred_badge: "bevorzugt",
    language_help: "Wahle hier deine Hauptsprache fur Korrespondenz. Text in deiner Sprache schlagt die Gesprachssprache vor, und Text in der Gesprachssprache schlagt deine Sprache vor.",
    model_buy_next: "Das Credits-Onboarding ist der nachste Schritt. In dieser Kaufsimulation wurde das heutige Freikontingent zuruckgesetzt und die App ist wieder verfugbar.",
    provider_next: "Das Onboarding fur KI-Anbieter ist der nachste Schritt.",
    feedback_saved: "Danke, dein Feedback wurde gespeichert. Als Nachstes verbinden wir den Versand.",
    no_text: "Kein Text ausgewahlt.",
    working: "Wird bearbeitet...",
    nothing_apply: "Noch nichts zum Ersetzen vorhanden.",
    unsupported_field: "Dieses Feld wird noch nicht unterstutzt.",
    copied: "Ergebnis kopiert.",
    copy_failed: "Kopieren fehlgeschlagen. Bitte manuell kopieren.",
    nothing_copy: "Noch nichts zum Kopieren vorhanden.",
    replaced: "Text ersetzt.",
    ready: "",
    done_page: "Fertig. Prufe das Ergebnis unten und kopiere es bei Bedarf.",
    done_editable: "Fertig. Prufe das Ergebnis unten und klicke auf Text ersetzen, wenn es passt.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  fr: {
    title: "Outils d'ecriture IA",
    action_translate: "Traduire",
    action_grammar: "Grammaire",
    action_improve: "Ameliorer",
    action_tone: "Ton",
    translate_to: "Traduire en",
    tone_to: "Changer le ton en",
    tone_professional: "Professionnel",
    tone_friendly: "Amical",
    tone_confident: "Assure",
    tone_warm: "Chaleureux",
    tone_shorter: "Plus court",
    result: "Resultat",
    result_placeholder: "Le resultat apparaitra ici",
    copy: "Copier",
    reply: "Repondre",
    reply_to: "Repondre en {language}",
    reply_draft: "Brouillon de reponse",
    reply_placeholder: "Ecrivez votre reponse dans votre langue",
    replace_text: "Remplacer le texte",
    tip_label: "Conseil",
    tip_inline_grammar_first: "Utilisez Grammaire d'abord si vous voulez un brouillon plus propre avant la traduction.",
    tip_inline_tone_general: "Le ton aide quand le sens est juste mais que le message ne sonne pas encore bien.",
    tip_inline_replace: "Remplacer le texte fonctionne le mieux dans les chats, les editeurs d'e-mail et les champs de formulaire.",
    tip_inline_translate_memory: "Traduire retient la langue de l'autre personne apres les messages entrants.",
    tip_tone_context: "Essayez Ton quand le sens est correct mais que la formulation semble trop seche, trop dure ou trop longue.",
    tip_translate_reply_memory: "Apres la traduction d'un message entrant dans votre langue, la langue de reponse est retenue automatiquement.",
    tip_copy_page: "Sur le texte normal d'une page, Copier est la facon la plus sure de reutiliser le resultat.",
    daily_limit_title: "Limite quotidienne gratuite atteinte",
    daily_limit_text: "Vous avez utilise les {limit} resultats gratuits d'aujourd'hui.",
    buy_credits: "Acheter des credits",
    connect_provider: "Connecter un fournisseur IA",
    leave_feedback: "Laisser un retour",
    feedback_placeholder: "Dites-nous ce qui manque ou ce qui rend l'extension difficile a utiliser",
    send_feedback: "Envoyer le retour",
    close: "Fermer",
    preferred_badge: "prefere",
    language_help: "Choisissez ici votre langue principale de correspondance. Un texte dans votre langue suggerera la langue de la conversation, et un texte dans la langue de la conversation suggerera votre langue.",
    model_buy_next: "L'onboarding des credits sera la prochaine etape. Dans cette simulation d'achat, la limite gratuite du jour a ete reinitialisee et l'app est de nouveau disponible.",
    provider_next: "L'onboarding du fournisseur IA sera la prochaine etape.",
    feedback_saved: "Merci, votre retour a ete enregistre. Nous connecterons ensuite l'envoi.",
    no_text: "Aucun texte selectionne.",
    working: "Traitement en cours...",
    nothing_apply: "Rien a appliquer pour le moment.",
    unsupported_field: "Ce champ n'est pas encore pris en charge.",
    copied: "Resultat copie.",
    copy_failed: "La copie a echoue. Veuillez copier manuellement.",
    nothing_copy: "Rien a copier pour le moment.",
    replaced: "Texte remplace.",
    ready: "",
    done_page: "Termine. Verifiez le resultat ci-dessous et copiez-le si besoin.",
    done_editable: "Termine. Verifiez le resultat ci-dessous puis cliquez sur Remplacer le texte si cela vous convient.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  pt: {
    title: "Ferramentas de escrita com IA",
    action_translate: "Traduzir",
    action_grammar: "Gramatica",
    action_improve: "Melhorar",
    action_tone: "Tom",
    translate_to: "Traduzir para",
    tone_to: "Mudar tom para",
    tone_professional: "Profissional",
    tone_friendly: "Amigavel",
    tone_confident: "Confiante",
    tone_warm: "Acolhedor",
    tone_shorter: "Mais curto",
    result: "Resultado",
    result_placeholder: "O resultado aparecera aqui",
    copy: "Copiar",
    reply: "Responder",
    reply_to: "Responder em {language}",
    reply_draft: "Rascunho da resposta",
    reply_placeholder: "Escreva sua resposta no seu idioma",
    replace_text: "Substituir texto",
    tip_label: "Dica",
    tip_inline_grammar_first: "Use Gramatica primeiro se quiser um rascunho mais limpo antes da traducao.",
    tip_inline_tone_general: "Tom ajuda quando o significado esta certo, mas a mensagem ainda nao soa bem.",
    tip_inline_replace: "Substituir texto funciona melhor em chats, compositores de e-mail e campos de formulario.",
    tip_inline_translate_memory: "Traduzir lembra o idioma da outra pessoa depois das mensagens recebidas.",
    tip_tone_context: "Use Tom quando o significado estiver certo, mas a redacao parecer seca demais, dura demais ou longa demais.",
    tip_translate_reply_memory: "Depois que uma mensagem recebida e traduzida para o seu idioma, o idioma da resposta e lembrado automaticamente.",
    tip_copy_page: "Em texto normal da pagina, Copiar e a forma mais segura de reutilizar o resultado.",
    daily_limit_title: "Limite diario gratuito atingido",
    daily_limit_text: "Voce usou todos os {limit} resultados gratuitos de hoje.",
    buy_credits: "Comprar creditos",
    connect_provider: "Conectar provedor de IA",
    leave_feedback: "Deixar feedback",
    feedback_placeholder: "Conte o que esta faltando ou o que dificulta usar a extensao",
    send_feedback: "Enviar feedback",
    close: "Fechar",
    preferred_badge: "preferido",
    language_help: "Escolha aqui seu idioma principal de correspondencia. Texto no seu idioma sugerira o idioma da conversa, e texto no idioma da conversa sugerira o seu idioma.",
    model_buy_next: "O onboarding de creditos sera o proximo passo. Nesta simulacao de compra, o limite gratuito de hoje foi redefinido e o app esta disponivel novamente.",
    provider_next: "O onboarding do provedor de IA sera o proximo passo.",
    feedback_saved: "Obrigado, seu feedback foi salvo. Depois vamos conectar o envio.",
    no_text: "Nenhum texto selecionado.",
    working: "Trabalhando nisso...",
    nothing_apply: "Nada para aplicar ainda.",
    unsupported_field: "Este campo ainda nao e suportado.",
    copied: "Resultado copiado.",
    copy_failed: "Falha ao copiar. Copie manualmente.",
    nothing_copy: "Nada para copiar ainda.",
    replaced: "Texto substituido.",
    ready: "",
    done_page: "Pronto. Revise o resultado abaixo e copie se precisar.",
    done_editable: "Pronto. Revise o resultado abaixo e clique em Substituir texto se estiver bom.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  ja: {
    title: "AIライティングツール",
    action_translate: "翻訳",
    action_grammar: "文法",
    action_improve: "改善",
    action_tone: "トーン",
    translate_to: "翻訳先",
    tone_to: "トーンを変更",
    tone_professional: "プロフェッショナル",
    tone_friendly: "フレンドリー",
    tone_confident: "自信のある",
    tone_warm: "あたたかい",
    tone_shorter: "短く",
    result: "結果",
    result_placeholder: "ここに結果が表示されます",
    copy: "コピー",
    reply: "返信",
    reply_to: "{language}で返信",
    reply_draft: "返信ドラフト",
    reply_placeholder: "あなたの言語で返信を書いてください",
    replace_text: "テキストを置換",
    tip_label: "ヒント",
    tip_inline_grammar_first: "翻訳の前に下書きを整えたいなら、まず文法を使ってください。",
    tip_inline_tone_general: "意味は合っているのに、文面の雰囲気だけがしっくりこないときにトーンが役立ちます。",
    tip_inline_replace: "テキストを置換は、チャット欄、メール作成画面、フォーム欄で最も使いやすいです。",
    tip_inline_translate_memory: "翻訳は、相手から来たメッセージの言語を記憶します。",
    tip_tone_context: "意味は合っているのに、表現が強すぎる、そっけない、長すぎると感じるときはトーンを試してください。",
    tip_translate_reply_memory: "受信メッセージをあなたの言語に翻訳した後、返信言語は自動的に記憶されます。",
    tip_copy_page: "通常のページテキストでは、結果を再利用するならコピーが最も安全です。",
    daily_limit_title: "本日の無料上限に達しました",
    daily_limit_text: "本日の無料結果 {limit} 件をすべて使い切りました。",
    buy_credits: "クレジットを購入",
    connect_provider: "AIプロバイダーを接続",
    leave_feedback: "フィードバックを送る",
    feedback_placeholder: "足りない点や使いにくい点を教えてください",
    send_feedback: "フィードバックを送信",
    close: "閉じる",
    preferred_badge: "推奨",
    language_help: "ここで主にやり取りする言語を選びます。あなたの言語のテキストでは会話相手の言語が提案され、会話相手の言語のテキストではあなたの言語が提案されます。",
    model_buy_next: "クレジット購入のオンボーディングは次のステップです。この購入シミュレーションでは、本日の無料上限がリセットされ、アプリを再び利用できます。",
    provider_next: "AIプロバイダー接続のオンボーディングは次のステップです。",
    feedback_saved: "ありがとうございます。フィードバックを保存しました。次に送信連携を追加します。",
    no_text: "テキストが選択されていません。",
    working: "処理中です...",
    nothing_apply: "まだ置き換える内容がありません。",
    unsupported_field: "このフィールドはまだ対応していません。",
    copied: "結果をコピーしました。",
    copy_failed: "コピーに失敗しました。手動でコピーしてください。",
    nothing_copy: "まだコピーする内容がありません。",
    replaced: "テキストを置き換えました。",
    ready: "",
    done_page: "完了しました。下の結果を確認し、必要ならコピーしてください。",
    done_editable: "完了しました。下の結果を確認し、問題なければ「テキストを置換」をクリックしてください。",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  ko: {
    title: "AI 글쓰기 도구",
    action_translate: "번역",
    action_grammar: "문법",
    action_improve: "개선",
    action_tone: "톤",
    translate_to: "번역할 언어",
    tone_to: "톤 변경",
    tone_professional: "전문적으로",
    tone_friendly: "친근하게",
    tone_confident: "자신감 있게",
    tone_warm: "따뜻하게",
    tone_shorter: "더 짧게",
    result: "결과",
    result_placeholder: "여기에 결과가 표시됩니다",
    copy: "복사",
    reply: "답장",
    reply_to: "{language}(으)로 답장",
    reply_draft: "답장 초안",
    reply_placeholder: "내 언어로 답장을 작성하세요",
    replace_text: "텍스트 바꾸기",
    tip_label: "팁",
    tip_inline_grammar_first: "번역 전에 초안을 더 깔끔하게 만들고 싶다면 먼저 문법을 사용하세요.",
    tip_inline_tone_general: "의미는 맞지만 메시지의 느낌이 어색할 때 톤 기능이 도움이 됩니다.",
    tip_inline_replace: "텍스트 바꾸기는 채팅창, 이메일 작성기, 입력 폼에서 가장 잘 작동합니다.",
    tip_inline_translate_memory: "번역은 상대방의 수신 메시지 언어를 기억합니다.",
    tip_tone_context: "의미는 맞지만 표현이 너무 강하거나 건조하거나 길게 느껴질 때 톤을 사용해 보세요.",
    tip_translate_reply_memory: "수신 메시지를 내 언어로 번역하면 답장 언어가 자동으로 기억됩니다.",
    tip_copy_page: "일반 페이지 텍스트에서는 결과를 다시 사용할 때 복사가 가장 안전합니다.",
    daily_limit_title: "오늘의 무료 한도에 도달했습니다",
    daily_limit_text: "오늘 무료 결과 {limit}개를 모두 사용했습니다.",
    buy_credits: "크레딧 구매",
    connect_provider: "AI 제공업체 연결",
    leave_feedback: "피드백 남기기",
    feedback_placeholder: "무엇이 부족한지 또는 무엇이 사용을 어렵게 하는지 알려주세요",
    send_feedback: "피드백 보내기",
    close: "닫기",
    preferred_badge: "선호",
    language_help: "여기에서 주요 대화 언어를 선택하세요. 내 언어의 텍스트는 대화 언어를 추천하고, 대화 언어의 텍스트는 내 언어를 추천합니다.",
    model_buy_next: "크레딧 온보딩은 다음 단계로 추가됩니다. 이 구매 시뮬레이션에서는 오늘의 무료 한도가 초기화되어 앱을 다시 사용할 수 있습니다.",
    provider_next: "AI 제공업체 온보딩은 다음 단계로 추가됩니다.",
    feedback_saved: "감사합니다. 피드백이 저장되었습니다. 다음으로 전송 기능을 연결하겠습니다.",
    no_text: "선택된 텍스트가 없습니다.",
    working: "작업 중입니다...",
    nothing_apply: "아직 적용할 내용이 없습니다.",
    unsupported_field: "이 필드는 아직 지원되지 않습니다.",
    copied: "결과가 복사되었습니다.",
    copy_failed: "복사에 실패했습니다. 수동으로 복사해 주세요.",
    nothing_copy: "아직 복사할 내용이 없습니다.",
    replaced: "텍스트가 바뀌었습니다.",
    ready: "",
    done_page: "완료되었습니다. 아래 결과를 확인하고 필요하면 복사하세요.",
    done_editable: "완료되었습니다. 아래 결과를 확인하고 괜찮으면 '텍스트 바꾸기'를 클릭하세요.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  zh: {
    title: "AI 写作工具",
    action_translate: "翻译",
    action_grammar: "语法",
    action_improve: "优化",
    action_tone: "语气",
    translate_to: "翻译为",
    tone_to: "调整语气为",
    tone_professional: "专业",
    tone_friendly: "友好",
    tone_confident: "自信",
    tone_warm: "温和",
    tone_shorter: "更简短",
    result: "结果",
    result_placeholder: "结果会显示在这里",
    copy: "复制",
    reply: "回复",
    reply_to: "回复为{language}",
    reply_draft: "回复草稿",
    reply_placeholder: "用你的语言写回复",
    replace_text: "替换文本",
    tip_label: "提示",
    tip_inline_grammar_first: "如果你想在翻译前先把草稿整理得更干净，先使用语法。",
    tip_inline_tone_general: "当意思是对的，但语气感觉不太对时，语气功能会很有帮助。",
    tip_inline_replace: "替换文本最适合在聊天框、邮件编辑器和表单字段中使用。",
    tip_inline_translate_memory: "翻译会记住对方来信的语言。",
    tip_tone_context: "如果意思没问题，但措辞显得太生硬、太平淡或太长，试试语气功能。",
    tip_translate_reply_memory: "当收到的消息被翻译成你的语言后，回复语言会被自动记住。",
    tip_copy_page: "在普通网页文本中，复制是复用结果最稳妥的方式。",
    daily_limit_title: "今日免费额度已用完",
    daily_limit_text: "你今天已经用完了全部 {limit} 次免费结果。",
    buy_credits: "购买额度",
    connect_provider: "连接 AI 提供商",
    leave_feedback: "留下反馈",
    feedback_placeholder: "告诉我们缺少什么，或者是什么让扩展难以使用",
    send_feedback: "发送反馈",
    close: "关闭",
    preferred_badge: "首选",
    language_help: "在这里选择你的主要沟通语言。你的语言文本会建议对话语言，对话语言文本会建议你的语言。",
    model_buy_next: "购买额度的引导将是下一步。在这次购买模拟中，今天的免费额度已重置，应用现在可以继续使用。",
    provider_next: "连接 AI 提供商的引导将是下一步。",
    feedback_saved: "谢谢，你的反馈已保存。下一步我们会接入发送功能。",
    no_text: "没有选中文本。",
    working: "正在处理中...",
    nothing_apply: "还没有可替换的内容。",
    unsupported_field: "该输入区域暂不支持。",
    copied: "结果已复制。",
    copy_failed: "复制失败。请手动复制文本。",
    nothing_copy: "还没有可复制的内容。",
    replaced: "文本已替换。",
    ready: "",
    done_page: "已完成。请查看下面的结果，并在需要时复制。",
    done_editable: "已完成。请查看下面的结果，如果合适就点击“替换文本”。",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  ru: {
    title: "AI-инструменты для текста",
    action_translate: "Перевод",
    action_grammar: "Грамматика",
    action_improve: "Улучшить",
    action_tone: "Тон",
    translate_to: "Перевести на",
    tone_to: "Изменить тон на",
    tone_professional: "Профессиональный",
    tone_friendly: "Дружелюбный",
    tone_confident: "Уверенный",
    tone_warm: "Теплый",
    tone_shorter: "Короче",
    result: "Результат",
    result_placeholder: "Результат появится здесь",
    copy: "Копировать",
    reply: "Ответить",
    reply_to: "Ответить на {language}",
    reply_draft: "Черновик ответа",
    reply_placeholder: "Напишите ответ на вашем языке",
    replace_text: "Заменить текст",
    tip_label: "Подсказка",
    tip_inline_grammar_first: "Сначала используйте Грамматику, если хотите сначала сделать черновик чище перед переводом.",
    tip_inline_tone_general: "Тон полезен, когда смысл правильный, но сама формулировка звучит неудачно.",
    tip_inline_replace: "Заменить текст лучше всего работает в чатах, email-редакторах и полях форм.",
    tip_inline_translate_memory: "Перевод запоминает язык собеседника после входящих сообщений.",
    tip_tone_context: "Попробуйте Тон, если смысл верный, но текст звучит слишком резко, сухо или длинно.",
    tip_translate_reply_memory: "После перевода входящего сообщения на ваш язык язык ответа запоминается автоматически.",
    tip_copy_page: "На обычном тексте страницы безопаснее всего использовать Копировать.",
    daily_limit_title: "Дневной бесплатный лимит исчерпан",
    daily_limit_text: "Вы использовали все {limit} бесплатных результатов на сегодня.",
    buy_credits: "Купить лимиты",
    connect_provider: "Подключить AI-провайдера",
    leave_feedback: "Оставить фидбек",
    feedback_placeholder: "Расскажите, чего не хватает или что мешает пользоваться расширением",
    send_feedback: "Отправить фидбек",
    close: "Закрыть",
    preferred_badge: "предпочтительный",
    language_help: "Здесь выбери основной язык переписки. Для текста на твоем языке будет предлагаться язык переписки, а для текста на языке переписки будет предлагаться твой язык.",
    model_buy_next: "Онбординг покупки лимитов будет следующим шагом. В этой эмуляции покупки дневной лимит сброшен, и приложение снова доступно.",
    provider_next: "Онбординг подключения AI-провайдера будет следующим шагом.",
    feedback_saved: "Спасибо, фидбек сохранен. Дальше подключим отправку.",
    no_text: "Текст не выбран.",
    working: "Обрабатываем...",
    nothing_apply: "Пока нечего применять.",
    unsupported_field: "Это поле пока не поддерживается.",
    copied: "Результат скопирован.",
    copy_failed: "Не удалось скопировать. Скопируйте текст вручную.",
    nothing_copy: "Пока нечего копировать.",
    replaced: "Текст заменен.",
    ready: "",
    done_page: "Готово. Проверь результат ниже и при необходимости скопируй его.",
    done_editable: "Готово. Проверь результат ниже и нажми «Заменить текст», если все в порядке.",
    onboarding_badge: "Первый вход",
    onboarding_title: "Привет!",
    onboarding_text: "Это приложение поможет вам переводить текст прямо в браузере, не переключая контекст.",
    onboarding_text_secondary: "Если вы ведете переписку на 2-3 языках в течение дня, приложение это поймет и предложит перевести ваш ответ на язык переписки.",
    onboarding_text_tertiary: "Вы также можете проверять грамматику, менять tone of voice и улучшать ваш текст. Нажми «Далее», чтобы быстро ознакомиться с приложением.",
    onboarding_button_next: "Далее",
    onboarding_button_skip: "Пропустить",
    onboarding_translate_title: "Перевести",
    onboarding_translate_text: "Здесь можно менять язык перевода, а затем копировать результат или сразу вставлять его вместо исходного текста.",
    onboarding_translate_note: "Если вы ведете переписку на 2-3 языках в течение дня, приложение поймет это и предложит перевести ваш ответ на язык переписки.",
    onboarding_translate_demo: "Привет, спасибо за твое сообщение.",
    onboarding_grammar_title: "Grammar",
    onboarding_grammar_text: "Эта вкладка помогает проверить грамматику написанного текста и работает с любым языком.",
    onboarding_grammar_note: "Подходит, когда мысль уже сформулирована, но хочется быстро убрать ошибки и сделать текст аккуратнее.",
    onboarding_improve_title: "Improve",
    onboarding_improve_text: "Помогает улучшить текст, если вы хотите сделать его более структурным, читабельным и ясным.",
    onboarding_improve_note: "Полезно для писем, ответов в мессенджерах и черновиков, которые хочется быстро усилить.",
    onboarding_tone_title: "Tone",
    onboarding_tone_text: "Позволяет менять тон текста под разные контексты общения: более дружелюбный, профессиональный и так далее.",
    onboarding_tone_note: "Выберите нужный стиль, и приложение перепишет формулировки под этот формат общения.",
    onboarding_button_done: "Завершить",
    language_prompt_title: "Выберите язык перевода по умолчанию",
    language_prompt_text: "Мы будем использовать его как предпочтительный язык, когда приложение подсказывает перевести ваш ответ обратно.",
    language_prompt_save: "Сохранить и продолжить",
    language_prompt_later: "Позже",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  uk: {
    title: "AI-інструменти для тексту",
    action_translate: "Переклад",
    action_grammar: "Граматика",
    action_improve: "Покращити",
    action_tone: "Тон",
    translate_to: "Перекласти на",
    tone_to: "Змінити тон на",
    tone_professional: "Професійний",
    tone_friendly: "Дружній",
    tone_confident: "Упевнений",
    tone_warm: "Теплий",
    tone_shorter: "Коротше",
    result: "Результат",
    result_placeholder: "Результат з'явиться тут",
    copy: "Копіювати",
    reply: "Відповісти",
    reply_to: "Відповісти {language}",
    reply_draft: "Чернетка відповіді",
    reply_placeholder: "Напишіть відповідь своєю мовою",
    replace_text: "Замінити текст",
    tip_label: "Підказка",
    tip_inline_grammar_first: "Спочатку використайте Граматику, якщо хочете зробити чернетку чистішою перед перекладом.",
    tip_inline_tone_general: "Тон корисний, коли зміст правильний, але саме формулювання звучить невдало.",
    tip_inline_replace: "Замінити текст найкраще працює в чатах, email-редакторах і полях форм.",
    tip_inline_translate_memory: "Переклад запам'ятовує мову співрозмовника після вхідних повідомлень.",
    tip_tone_context: "Спробуйте Тон, якщо зміст правильний, але текст звучить надто різко, сухо або довго.",
    tip_translate_reply_memory: "Після перекладу вхідного повідомлення вашою мовою мова відповіді запам'ятовується автоматично.",
    tip_copy_page: "На звичайному тексті сторінки найбезпечніше використовувати Копіювати.",
    daily_limit_title: "Денний безкоштовний ліміт вичерпано",
    daily_limit_text: "Ви використали всі {limit} безкоштовних результатів на сьогодні.",
    buy_credits: "Купити ліміти",
    connect_provider: "Підключити AI-провайдера",
    leave_feedback: "Залишити фідбек",
    feedback_placeholder: "Розкажіть, чого бракує або що заважає користуватися розширенням",
    send_feedback: "Надіслати фідбек",
    close: "Закрити",
    preferred_badge: "пріоритетний",
    language_help: "Тут обери основну мову листування. Для тексту твоєю мовою пропонуватиметься мова листування, а для тексту мовою листування пропонуватиметься твоя мова.",
    model_buy_next: "Онбординг покупки лімітів буде наступним кроком. У цій емуляції покупки денний ліміт скинуто, і застосунок знову доступний.",
    provider_next: "Онбординг підключення AI-провайдера буде наступним кроком.",
    feedback_saved: "Дякуємо, фідбек збережено. Далі підключимо відправку.",
    no_text: "Текст не вибрано.",
    working: "Працюємо над цим...",
    nothing_apply: "Поки нічого застосовувати.",
    unsupported_field: "Це поле поки не підтримується.",
    copied: "Результат скопійовано.",
    copy_failed: "Не вдалося скопіювати. Скопіюйте текст вручну.",
    nothing_copy: "Поки нічого копіювати.",
    replaced: "Текст замінено.",
    ready: "",
    done_page: "Готово. Перевірте результат нижче й за потреби скопіюйте його.",
    done_editable: "Готово. Перевірте результат нижче й натисніть «Замінити текст», якщо все підходить.",
    auto_to_russian: "",
    auto_to_preferred: ""
  }
}

const state = {
  selectedText: "",
  replyDraft: "",
  replyDraftMode: false,
  replyDraftVisible: false,
  replyDraftDirtySinceResult: false,
  transformedText: "",
  resultSourceText: "",
  preferredTargetLanguage: DEFAULT_TARGET_LANGUAGE,
  correspondenceLanguageByHost: {},
  targetLanguage: DEFAULT_TARGET_LANGUAGE,
  hasManualTargetLanguageOverride: false,
  appLanguage: DEFAULT_APP_LANGUAGE,
  tone: DEFAULT_TONE,
  currentAction: null,
  hasResult: false,
  selectionRange: null,
  activeElement: null,
  inputSelectionStart: null,
  inputSelectionEnd: null,
  selectionKind: null,
  status: "idle",
  isLoading: false,
  shouldShowOnboarding: false,
  onboardingStateLoaded: false,
  onboardingStep: null,
  hasLanguagePreference: false,
  shouldShowLanguagePreferencePrompt: false,
  pendingActionAfterLanguagePrompt: null,
  activeTransformRequestId: null,
  lastCompletedAction: null,
  analyticsSessionId: crypto.randomUUID(),
  transformStartedAt: 0,
  firstStreamChunkAt: 0,
  streamRenderText: "",
  streamRenderBuffer: "",
  streamRenderFrame: 0,
  lastTransformMetrics: null
}

const PANEL_WIDTH = 360
const PANEL_HEIGHT = 360
const ONBOARDING_PANEL_WIDTH = 520
const ONBOARDING_PANEL_HEIGHT = 520
const PANEL_MARGIN = 12
const TRIGGER_GAP = 4
const RESULT_MIN_HEIGHT = 110
const RESULT_MAX_HEIGHT = 280
const ONBOARDING_WALKTHROUGH_STEPS = ["translate", "grammar", "improve", "tone"]
let lastPointerAnchorRect = null
let lastPointerDownPoint = null
let googleDocsSelectionIntentUntil = 0
let lastShownTriggerRect = null

function renderAppLanguageOptions() {
  return APP_UI_LANGUAGES.map((language) => {
    const selected = language.value === DEFAULT_APP_LANGUAGE ? " selected" : ""
    return `<option value="${language.value}"${selected}>${language.label}</option>`
  }).join("")
}

function renderAppLanguageMenu() {
  return APP_UI_LANGUAGES.map((language) => {
    return `
      <button
        type="button"
        class="ai-writer-mvp-app-language-option"
        data-app-language="${language.value}"
      >
        <span class="ai-writer-mvp-app-language-option-flag">${getFlagEmoji(language.flag)}</span>
        <span class="ai-writer-mvp-app-language-option-label">${language.label}</span>
      </button>
    `
  }).join("")
}

function renderToneOptions() {
  return TONE_OPTIONS.map((tone) => {
    const selected = tone.value === DEFAULT_TONE ? " selected" : ""
    return `<option value="${tone.value}"${selected}>${t(tone.labelKey)}</option>`
  }).join("")
}

function getUiStrings() {
  return UI_STRINGS[state.appLanguage] || UI_STRINGS[DEFAULT_APP_LANGUAGE]
}

function t(key, variables = {}) {
  const activeStrings = getUiStrings()
  const fallbackStrings = UI_STRINGS[DEFAULT_APP_LANGUAGE]
  const template = activeStrings?.[key] || fallbackStrings?.[key] || key

  return template.replace(/\{(\w+)\}/g, (_, variableName) => {
    return Object.prototype.hasOwnProperty.call(variables, variableName)
      ? String(variables[variableName])
      : `{${variableName}}`
  })
}

function getFlagEmoji(countryCode) {
  return Array.from(countryCode).map((character) => {
    return String.fromCodePoint(127397 + character.charCodeAt(0))
  }).join("")
}

function getCurrentAppLanguageConfig() {
  return APP_UI_LANGUAGES.find((language) => language.value === state.appLanguage) || APP_UI_LANGUAGES[0]
}

const trigger = document.createElement("button")
trigger.id = "ai-writer-mvp-trigger"
const iconOnlyUrl = chrome.runtime.getURL("assets/writemate-icon-only.png")
const logoUrl = chrome.runtime.getURL("assets/writemate-logo.png")
trigger.innerHTML = `
  <img class="ai-writer-mvp-trigger-logo" src="${iconOnlyUrl}" alt="" />
`

const panel = document.createElement("div")
panel.id = "ai-writer-mvp-panel"
panel.innerHTML = `
  <div class="ai-writer-mvp-header">
    <div class="ai-writer-mvp-brand">
      <img class="ai-writer-mvp-brand-logo" src="${iconOnlyUrl}" alt="" />
      <span class="ai-writer-mvp-brand-text">WriteMate <span class="ai-writer-mvp-brand-accent">AI</span></span>
    </div>
    <div class="ai-writer-mvp-header-controls">
      <div class="ai-writer-mvp-app-language-picker">
        <button type="button" id="ai-writer-mvp-app-language-button" class="ai-writer-mvp-icon-button" aria-label="App language">
          <span id="ai-writer-mvp-app-language-flag"></span>
        </button>
        <div id="ai-writer-mvp-app-language-menu" class="ai-writer-mvp-app-language-menu" hidden>
          ${renderAppLanguageMenu()}
        </div>
      </div>
      <button type="button" id="ai-writer-mvp-close" class="ai-writer-mvp-icon-button" aria-label="Close panel">×</button>
    </div>
  </div>
  <div class="ai-writer-mvp-row">
    <div class="ai-writer-mvp-actions">
      <button type="button" data-action="translate">Translate</button>
      <button type="button" data-action="grammar">Grammar</button>
      <button type="button" data-action="improve">Improve</button>
      <button type="button" data-action="tone">Tone</button>
    </div>
  </div>
  <div id="ai-writer-mvp-language-row" class="ai-writer-mvp-row">
    <div id="ai-writer-mvp-language-section">
    <div class="ai-writer-mvp-label-row">
      <label class="ai-writer-mvp-label" for="ai-writer-mvp-language">Translate to</label>
      <button
        type="button"
        class="ai-writer-mvp-info-button"
        aria-label="Translation language help"
        data-help-target="language"
      >
        <svg class="ai-writer-mvp-info-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 10.4v5.1"></path>
          <path d="M12 7.8h.01"></path>
        </svg>
      </button>
    </div>
    <div class="ai-writer-mvp-select-wrap">
      <select id="ai-writer-mvp-language">${renderLanguageOptions()}</select>
      <span class="ai-writer-mvp-select-chevron" aria-hidden="true">
        <svg viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4"></path>
        </svg>
      </span>
    </div>
    <div id="ai-writer-mvp-language-hint" class="ai-writer-mvp-language-hint"></div>
    </div>
  </div>
  <div id="ai-writer-mvp-tone-row" class="ai-writer-mvp-row">
    <div id="ai-writer-mvp-tone-section">
      <div class="ai-writer-mvp-label-row">
        <label class="ai-writer-mvp-label" for="ai-writer-mvp-tone">Change tone to</label>
      </div>
      <div class="ai-writer-mvp-select-wrap">
        <select id="ai-writer-mvp-tone">${renderToneOptions()}</select>
        <span class="ai-writer-mvp-select-chevron" aria-hidden="true">
          <svg viewBox="0 0 16 16">
            <path d="M4 6l4 4 4-4"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div id="ai-writer-mvp-inline-tip" class="ai-writer-mvp-inline-tip" hidden></div>
  <div id="ai-writer-mvp-result-section" class="ai-writer-mvp-row">
    <div class="ai-writer-mvp-result-wrap">
      <textarea class="ai-writer-mvp-preview" id="ai-writer-mvp-preview" placeholder="Result will appear here"></textarea>
      <div id="ai-writer-mvp-diff-preview" class="ai-writer-mvp-diff-preview" hidden></div>
      <button type="button" id="ai-writer-mvp-preview-copy" class="ai-writer-mvp-field-copy" aria-label="Copy result" title="Copy result">
        <svg class="ai-writer-mvp-field-copy-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path>
          <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
      <div id="ai-writer-mvp-loader" class="ai-writer-mvp-loader" hidden>
        <div class="ai-writer-mvp-loader-spinner" aria-hidden="true"></div>
        <div class="ai-writer-mvp-loader-text">Working on it...</div>
      </div>
    </div>
  </div>
  <div id="ai-writer-mvp-reply-toggle-row" class="ai-writer-mvp-row" hidden>
    <button type="button" id="ai-writer-mvp-reply-toggle" class="ai-writer-mvp-reply-toggle">Reply</button>
  </div>
  <div id="ai-writer-mvp-reply-draft-row" class="ai-writer-mvp-row" hidden>
    <div class="ai-writer-mvp-label-row">
      <label class="ai-writer-mvp-label" for="ai-writer-mvp-reply-draft">Reply draft</label>
    </div>
    <div class="ai-writer-mvp-reply-draft-wrap">
      <textarea id="ai-writer-mvp-reply-draft" class="ai-writer-mvp-reply-draft" placeholder="Write your reply in your language"></textarea>
      <button type="button" id="ai-writer-mvp-reply-copy" class="ai-writer-mvp-field-copy" aria-label="Copy reply draft" title="Copy reply draft">
        <svg class="ai-writer-mvp-field-copy-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path>
          <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
    <div class="ai-writer-mvp-reply-draft-actions">
      <button type="button" id="ai-writer-mvp-reply-translate" class="ai-writer-mvp-reply-toggle">Translate</button>
    </div>
  </div>
  <div id="ai-writer-mvp-status" class="ai-writer-mvp-status"></div>
  <div id="ai-writer-mvp-footer" class="ai-writer-mvp-footer">
    <button type="button" id="ai-writer-mvp-apply">Replace text</button>
  </div>
  <button type="button" id="ai-writer-mvp-feedback-fab" class="ai-writer-mvp-feedback-fab" aria-label="Leave feedback" title="Leave feedback" hidden>Leave feedback</button>
`

document.documentElement.append(trigger, panel)

const helpPopover = document.createElement("div")
helpPopover.id = "ai-writer-mvp-help-popover"
helpPopover.className = "ai-writer-mvp-help-popover"
helpPopover.hidden = true
document.documentElement.append(helpPopover)

const onboardingPopover = document.createElement("div")
onboardingPopover.id = "ai-writer-mvp-onboarding-popover"
onboardingPopover.className = "ai-writer-mvp-onboarding-popover"
onboardingPopover.hidden = true
onboardingPopover.innerHTML = `
  <div id="ai-writer-mvp-onboarding-badge" class="ai-writer-mvp-onboarding-badge">First time here</div>
  <h4 id="ai-writer-mvp-onboarding-guide-title" class="ai-writer-mvp-onboarding-guide-title">Translate</h4>
  <p id="ai-writer-mvp-onboarding-guide-text" class="ai-writer-mvp-onboarding-guide-text"></p>
  <p id="ai-writer-mvp-onboarding-guide-note" class="ai-writer-mvp-onboarding-guide-note"></p>
  <p id="ai-writer-mvp-onboarding-guide-extra" class="ai-writer-mvp-onboarding-guide-note"></p>
  <div class="ai-writer-mvp-onboarding-actions">
    <button type="button" id="ai-writer-mvp-onboarding-guide-skip" class="ai-writer-mvp-onboarding-secondary">Skip</button>
    <button type="button" id="ai-writer-mvp-onboarding-guide-next" class="ai-writer-mvp-onboarding-dismiss">Next</button>
  </div>
`
document.documentElement.append(onboardingPopover)

const languagePromptPopover = document.createElement("div")
languagePromptPopover.id = "ai-writer-mvp-language-prompt-popover"
languagePromptPopover.className = "ai-writer-mvp-onboarding-popover ai-writer-mvp-language-prompt-popover"
languagePromptPopover.hidden = true
languagePromptPopover.innerHTML = `
  <h4 id="ai-writer-mvp-language-prompt-title" class="ai-writer-mvp-onboarding-guide-title">Choose your default reply language</h4>
  <p id="ai-writer-mvp-language-prompt-text" class="ai-writer-mvp-onboarding-guide-note"></p>
  <div class="ai-writer-mvp-onboarding-language-group">
    <div class="ai-writer-mvp-select-wrap">
      <select id="ai-writer-mvp-language-prompt-select">${renderLanguageOptions()}</select>
      <span class="ai-writer-mvp-select-chevron" aria-hidden="true">
        <svg viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4"></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="ai-writer-mvp-onboarding-actions">
    <button type="button" id="ai-writer-mvp-language-prompt-later" class="ai-writer-mvp-onboarding-secondary">Maybe later</button>
    <button type="button" id="ai-writer-mvp-language-prompt-save" class="ai-writer-mvp-onboarding-dismiss">Save and continue</button>
  </div>
`
document.documentElement.append(languagePromptPopover)

const limitModal = document.createElement("div")
limitModal.id = "ai-writer-mvp-limit-modal"
limitModal.className = "ai-writer-mvp-limit-modal"
limitModal.hidden = true
limitModal.innerHTML = `
  <div class="ai-writer-mvp-limit-card">
    <h3>Daily free limit reached</h3>
    <p id="ai-writer-mvp-limit-text">You have used all 20 free results for today.</p>
    <div class="ai-writer-mvp-limit-actions">
      <button type="button" id="ai-writer-mvp-buy-credits">Buy credits</button>
      <button type="button" id="ai-writer-mvp-open-feedback">Leave feedback</button>
    </div>
    <div id="ai-writer-mvp-buy-box" class="ai-writer-mvp-feedback-box" hidden>
      <div id="ai-writer-mvp-buy-placeholder" class="ai-writer-mvp-limit-placeholder"></div>
    </div>
    <div id="ai-writer-mvp-feedback-box" class="ai-writer-mvp-feedback-box" hidden>
      <textarea id="ai-writer-mvp-feedback-text" placeholder="Tell us what is missing or what makes the extension hard to use"></textarea>
      <button type="button" id="ai-writer-mvp-send-feedback">Send feedback</button>
    </div>
    <button type="button" id="ai-writer-mvp-limit-close" class="ai-writer-mvp-limit-dismiss">Close</button>
  </div>
`
document.documentElement.append(limitModal)

const languageSelect = panel.querySelector("#ai-writer-mvp-language")
const languageRow = panel.querySelector("#ai-writer-mvp-language-row")
const languageSection = panel.querySelector("#ai-writer-mvp-language-section")
const toneSelect = panel.querySelector("#ai-writer-mvp-tone")
const toneRow = panel.querySelector("#ai-writer-mvp-tone-row")
const toneSection = panel.querySelector("#ai-writer-mvp-tone-section")
const replyToggleRow = panel.querySelector("#ai-writer-mvp-reply-toggle-row")
const replyToggleButton = panel.querySelector("#ai-writer-mvp-reply-toggle")
const replyDraftRow = panel.querySelector("#ai-writer-mvp-reply-draft-row")
const replyDraftField = panel.querySelector("#ai-writer-mvp-reply-draft")
const replyTranslateButton = panel.querySelector("#ai-writer-mvp-reply-translate")
const appLanguageButton = panel.querySelector("#ai-writer-mvp-app-language-button")
const appLanguageFlag = panel.querySelector("#ai-writer-mvp-app-language-flag")
const appLanguageMenu = panel.querySelector("#ai-writer-mvp-app-language-menu")
const appLanguageOptions = panel.querySelectorAll("[data-app-language]")
const languageHint = panel.querySelector("#ai-writer-mvp-language-hint")
const inlineTip = panel.querySelector("#ai-writer-mvp-inline-tip")
const resultSection = panel.querySelector("#ai-writer-mvp-result-section")
const previewField = panel.querySelector("#ai-writer-mvp-preview")
const previewCopyButton = panel.querySelector("#ai-writer-mvp-preview-copy")
const diffPreview = panel.querySelector("#ai-writer-mvp-diff-preview")
const loader = panel.querySelector("#ai-writer-mvp-loader")
const loaderText = panel.querySelector(".ai-writer-mvp-loader-text")
const statusField = panel.querySelector("#ai-writer-mvp-status")
const footer = panel.querySelector("#ai-writer-mvp-footer")
const applyButton = panel.querySelector("#ai-writer-mvp-apply")
const feedbackFabButton = panel.querySelector("#ai-writer-mvp-feedback-fab")
const closeButton = panel.querySelector("#ai-writer-mvp-close")
const replyDraftCopyButton = panel.querySelector("#ai-writer-mvp-reply-copy")
const titleField = panel.querySelector(".ai-writer-mvp-title")
const translateLabel = panel.querySelector("label[for='ai-writer-mvp-language']")
const toneLabel = panel.querySelector("label[for='ai-writer-mvp-tone']")
const onboardingBadge = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-badge")
const onboardingGuideTitle = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-title")
const onboardingGuideText = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-text")
const onboardingGuideNote = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-note")
const onboardingGuideExtra = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-extra")
const onboardingGuideNextButton = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-next")
const onboardingGuideSkipButton = onboardingPopover.querySelector("#ai-writer-mvp-onboarding-guide-skip")
const languagePromptTitle = languagePromptPopover.querySelector("#ai-writer-mvp-language-prompt-title")
const languagePromptText = languagePromptPopover.querySelector("#ai-writer-mvp-language-prompt-text")
const languagePromptSelect = languagePromptPopover.querySelector("#ai-writer-mvp-language-prompt-select")
const languagePromptLaterButton = languagePromptPopover.querySelector("#ai-writer-mvp-language-prompt-later")
const languagePromptSaveButton = languagePromptPopover.querySelector("#ai-writer-mvp-language-prompt-save")
const limitText = limitModal.querySelector("#ai-writer-mvp-limit-text")
const limitTitle = limitModal.querySelector("h3")
const limitActions = limitModal.querySelector(".ai-writer-mvp-limit-actions")
const buyCreditsButton = limitModal.querySelector("#ai-writer-mvp-buy-credits")
const openFeedbackButton = limitModal.querySelector("#ai-writer-mvp-open-feedback")
const buyBox = limitModal.querySelector("#ai-writer-mvp-buy-box")
const buyPlaceholder = limitModal.querySelector("#ai-writer-mvp-buy-placeholder")
const feedbackBox = limitModal.querySelector("#ai-writer-mvp-feedback-box")
const feedbackText = limitModal.querySelector("#ai-writer-mvp-feedback-text")
const sendFeedbackButton = limitModal.querySelector("#ai-writer-mvp-send-feedback")
const limitCloseButton = limitModal.querySelector("#ai-writer-mvp-limit-close")
const infoButtons = panel.querySelectorAll(".ai-writer-mvp-info-button")
const actionButtons = panel.querySelectorAll("[data-action]")

languageSelect.value = state.targetLanguage
toneSelect.value = state.tone
languagePromptSelect.value = state.preferredTargetLanguage
refreshLanguageSelectOptions()
applyTranslations()
updateLanguageHint()
updateTranslateSectionVisibility()
updateToneSectionVisibility()
updateResultVisibility()
setStatus("", false)
void loadAppLanguagePreference()
void loadLanguagePreference()
void loadOnboardingState()

document.addEventListener("mouseup", handleSelectionChange)
document.addEventListener("keyup", handleSelectionChange)
document.addEventListener("selectionchange", handleSelectionChange)
document.addEventListener("mousedown", handlePointerStart)
if (IS_DEVELOPMENT_BUILD) {
  document.addEventListener("keydown", handleDebugShortcuts)
}
document.addEventListener("mousedown", handleOutsideClick)
chrome.runtime.onMessage.addListener(handleRuntimeMessage)
window.addEventListener("resize", syncLimitModalToPanel)
window.addEventListener("resize", syncOnboardingVisibility)
window.addEventListener("resize", () => {
  if (!languagePromptPopover.hidden) {
    showLanguagePreferencePrompt()
  }
})
trigger.addEventListener("mousedown", (event) => {
  event.preventDefault()
  preserveSelectionForTriggerClick()
  if (state.selectionKind === "google-docs") {
    void ensureGoogleDocsSelectionText()
  }
})
trigger.addEventListener("click", openPanel)
appLanguageButton.addEventListener("click", () => {
  const nextOpen = appLanguageMenu.hidden
  setAppLanguageMenuOpen(nextOpen)
})
appLanguageOptions.forEach((button) => {
  button.addEventListener("click", () => {
    state.appLanguage = button.getAttribute("data-app-language") || DEFAULT_APP_LANGUAGE
    setAppLanguageMenuOpen(false)
    saveAppLanguagePreference(state.appLanguage)
    applyTranslations()
  })
})
languageSelect.addEventListener("change", () => {
  state.targetLanguage = languageSelect.value
  state.preferredTargetLanguage = state.targetLanguage
  state.hasLanguagePreference = true
  state.hasManualTargetLanguageOverride = true
  saveLanguagePreference(state.preferredTargetLanguage)
  refreshLanguageSelectOptions()
  updateLanguageHint()
  if (state.currentAction === "translate" && hasTransformInput() && !state.isLoading) {
    void requestTransform("translate")
  }
})
toneSelect.addEventListener("change", () => {
  state.tone = toneSelect.value
  if (state.currentAction === "tone" && hasTransformInput() && !state.isLoading) {
    void requestTransform("tone")
  }
})
replyDraftField.addEventListener("input", () => {
  const nextDraft = replyDraftField.value
  state.replyDraftMode = Boolean(nextDraft.trim())
  state.replyDraftVisible = state.replyDraftVisible || state.replyDraftMode
  if (nextDraft !== state.replyDraft) {
    state.replyDraft = nextDraft
    if (state.resultSourceText || state.transformedText) {
      state.replyDraftDirtySinceResult = true
    }
  }
  if (!state.hasManualTargetLanguageOverride && state.replyDraftMode) {
    applySuggestedTargetLanguage()
  }
  updateActionAvailability()
})
replyToggleButton.addEventListener("click", () => {
  state.replyDraftVisible = true
  state.replyDraftMode = Boolean(getNormalizedReplyDraft())
  if (!state.hasManualTargetLanguageOverride) {
    const replyTargetLanguage = getReplyTargetLanguage()
    if (replyTargetLanguage) {
      state.targetLanguage = replyTargetLanguage
      languageSelect.value = replyTargetLanguage
    } else {
      applySuggestedTargetLanguage()
    }
  }
  updateReplyDraftVisibility()
  replyDraftField.focus()
})
replyTranslateButton.addEventListener("click", () => {
  state.replyDraftVisible = true
  state.replyDraftMode = Boolean(getNormalizedReplyDraft())
  if (!state.replyDraftMode || state.isLoading) {
    return
  }
  state.currentAction = "translate"
  void requestTransform("translate")
})
closeButton.addEventListener("click", hidePanel)
feedbackFabButton.addEventListener("click", () => {
  openFeedbackModal()
})
onboardingGuideNextButton.addEventListener("click", () => {
  void handleOnboardingNext()
})
onboardingGuideSkipButton.addEventListener("click", () => {
  void dismissOnboarding()
})
languagePromptSelect.addEventListener("change", () => {
  state.targetLanguage = languagePromptSelect.value
})
languagePromptSaveButton.addEventListener("click", () => {
  void saveLanguagePreferenceFromPrompt()
})
languagePromptLaterButton.addEventListener("click", () => {
  void continueAfterLanguagePreferencePrompt(false)
})
applyButton.addEventListener("click", applyTransformedText)
previewCopyButton.addEventListener("click", () => {
  void copyTextValue(previewField.value, "result_copied")
})
replyDraftCopyButton.addEventListener("click", () => {
  void copyTextValue(getNormalizedReplyDraft(), "reply_draft_copied")
})
buyCreditsButton.addEventListener("click", () => {
  void simulateLimitPurchase()
})

async function simulateLimitPurchase() {
  feedbackBox.hidden = true
  buyBox.hidden = false
  buyPlaceholder.textContent = t("model_buy_next")
  panel.classList.add("ai-writer-mvp-panel-limit-expanded")
  centerPanelInViewport()
  syncLimitModalToPanel()

  try {
    await chrome.storage.local.remove(DAILY_USAGE_STORAGE_KEY)
    void trackEvent(IS_DEVELOPMENT_BUILD ? "limit_purchase_simulated" : "limit_purchase_interest_clicked", {
      success: true,
      properties: {
        resetDailyUsage: true
      }
    })
  } catch (error) {
    void trackEvent(IS_DEVELOPMENT_BUILD ? "limit_purchase_simulated" : "limit_purchase_interest_clicked", {
      success: false,
      errorMessage: error instanceof Error ? error.message : "Daily limit reset failed."
    })
    setStatus("Purchase simulated, but the daily limit could not be reset.", true)
  }
}

openFeedbackButton.addEventListener("click", () => {
  buyBox.hidden = true
  feedbackBox.hidden = false
  panel.classList.add("ai-writer-mvp-panel-limit-expanded")
  centerPanelInViewport()
  syncLimitModalToPanel()
  feedbackText.focus()
})
sendFeedbackButton.addEventListener("click", async () => {
  const message = feedbackText.value.trim()
  if (!message) {
    return
  }

  sendFeedbackButton.disabled = true

  try {
    await submitFeedback(message)
    feedbackText.value = ""
    feedbackBox.hidden = true
    hideLimitModal()
    setStatus(t("feedback_saved"), false)
    void trackEvent("feedback_submitted", {
      success: true,
      properties: {
        messageLength: message.length
      }
    })
  } catch {
    setStatus(t("feedback_failed"), true)
  } finally {
    sendFeedbackButton.disabled = false
  }
})
limitCloseButton.addEventListener("click", hideLimitModal)
infoButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    showHelpPopover(button)
  })
  button.addEventListener("mouseleave", () => {
    hideHelpPopover()
  })
  button.addEventListener("focus", () => {
    showHelpPopover(button)
  })
  button.addEventListener("blur", () => {
    hideHelpPopover()
  })
})

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action")
    state.currentAction = action
    void trackEvent("action_clicked", {
      action,
      properties: {
        targetLanguage: state.targetLanguage,
        tone: state.tone
      }
    })
    updateTranslateSectionVisibility()
    updateToneSectionVisibility()
    updateInlineTip()
    if (action === "translate" && shouldOpenLanguagePreferencePrompt()) {
      openLanguagePreferencePrompt()
      return
    }
    void requestTransform(action)
  })
})

function handleSelectionChange(event) {
  if (event instanceof MouseEvent) {
    lastPointerAnchorRect = new DOMRect(event.clientX, event.clientY, 1, 1)
    if (
      isGoogleDocsDocumentPage() &&
      event.type === "mouseup" &&
      didLikelyCreateGoogleDocsSelection(event)
    ) {
      googleDocsSelectionIntentUntil = Date.now() + 500
    }
  }

  window.clearTimeout(handleSelectionChange.timeoutId)
  handleSelectionChange.timeoutId = window.setTimeout(() => {
    const inputSelection = readInputSelection(document.activeElement)
    if (inputSelection) {
      rememberInputSelection(inputSelection)
      showTriggerAtRect(inputSelection.rect)
      return
    }

    const editableSelection = readEditableSelection()
    if (editableSelection) {
      rememberEditableSelection(editableSelection)
      showTriggerAtRect(editableSelection.rect)
      return
    }

    const pageSelection = readPageSelection()
    if (pageSelection) {
      rememberPageSelection(pageSelection)
      showTriggerAtRect(pageSelection.rect)
      return
    }

    const googleDocsSelection = readGoogleDocsSelection()
    if (googleDocsSelection) {
      rememberPageSelection(googleDocsSelection)
      showTriggerAtRect(googleDocsSelection.rect)
      return
    }

    if (panel.style.display === "block" && state.selectedText) {
      return
    }

    if (isSelectionPreservedForTriggerClick()) {
      return
    }

    clearSelectionState()
    hideTrigger()
  }, 30)
}

handleSelectionChange.timeoutId = 0
handleSelectionChange.preserveUntil = 0

function handlePointerStart(event) {
  if (!(event instanceof MouseEvent)) {
    return
  }

  lastPointerDownPoint = {
    x: event.clientX,
    y: event.clientY
  }
}

function didLikelyCreateGoogleDocsSelection(event) {
  if (!(event instanceof MouseEvent)) {
    return false
  }

  if (event.detail >= 2) {
    return true
  }

  if (!lastPointerDownPoint) {
    return false
  }

  const deltaX = event.clientX - lastPointerDownPoint.x
  const deltaY = event.clientY - lastPointerDownPoint.y
  const dragDistance = Math.hypot(deltaX, deltaY)

  return dragDistance >= 6
}

function preserveSelectionForTriggerClick() {
  handleSelectionChange.preserveUntil = Date.now() + 300
}

function isSelectionPreservedForTriggerClick() {
  return Date.now() < handleSelectionChange.preserveUntil
}

function handleDebugShortcuts(event) {
  const hasDebugModifier = (event.metaKey || event.ctrlKey) && event.shiftKey
  const pressedKey = event.key.toLowerCase()

  if (hasDebugModifier && pressedKey === "l") {
    event.preventDefault()
    openLimitPreview()
    return
  }

  if (hasDebugModifier && pressedKey === "8") {
    event.preventDefault()
    void resetOnboardingPreview()
    return
  }

  if (hasDebugModifier && pressedKey === "9") {
    event.preventDefault()
    void resetTextFlowPreview()
    return
  }

  if (hasDebugModifier && pressedKey === "0") {
    event.preventDefault()
    void resetDailyLimit()
  }
}

async function openPanel() {
  handleSelectionChange.preserveUntil = 0
  if (state.selectionKind === "google-docs") {
    await ensureGoogleDocsSelectionText()
  }

  if (!state.selectedText) {
    const didRecoverText = await ensureGoogleDocsSelectionText()
    if (!didRecoverText) {
      return
    }
  }

  if (!state.selectedText) {
    return
  }

  await ensureOnboardingStateLoaded()

  const triggerRect = lastShownTriggerRect || trigger.getBoundingClientRect()
  panel.style.display = "block"
  replyDraftField.value = state.replyDraft
  previewField.value = state.shouldShowOnboarding ? "" : (state.transformedText || state.selectedText)
  updateResultPreview()
  syncResultViewport()
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateReplyDraftVisibility()
  updateInlineTip()
  updateResultVisibility()
  updateActionAvailability()
  if (state.shouldShowOnboarding) {
    centerPanelInViewport()
  } else {
    positionPanel(triggerRect)
  }
  syncOnboardingVisibility()
  ensurePanelInViewport()
  setStatus("", false)
  void trackEvent("panel_opened", {
    properties: {
      selectedTextLength: state.selectedText.length,
      hasExistingResult: state.hasResult
    }
  })
}

function openLimitPreview() {
  panel.style.display = "block"
  centerPanelInViewport()
  setStatus("", false)
  state.hasResult = false
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateReplyDraftVisibility()
  updateInlineTip()
  updateResultVisibility()
  showLimitModal({
    limit: 20,
    count: 20
  })
}

function hideTrigger() {
  googleDocsSelectionIntentUntil = 0
  lastShownTriggerRect = null
  trigger.style.display = "none"
}

function isGoogleDocsDocumentPage() {
  const referrer = document.referrer || ""
  const isDocsReferrer = referrer.startsWith(`https://${GOOGLE_DOCS_HOST}${GOOGLE_DOCS_DOCUMENT_PATH_PREFIX}`)

  return (
    (
      window.location.hostname === GOOGLE_DOCS_HOST &&
      window.location.pathname.startsWith(GOOGLE_DOCS_DOCUMENT_PATH_PREFIX)
    ) ||
    isDocsReferrer
  )
}

function getGoogleDocsFallbackRect() {
  if (!isGoogleDocsDocumentPage()) {
    return null
  }

  return lastPointerAnchorRect
}

function getGoogleDocsSelectionRect() {
  if (!isGoogleDocsDocumentPage()) {
    return null
  }

  const rects = GOOGLE_DOCS_SELECTION_SELECTORS
    .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    .filter((element) => element instanceof HTMLElement)
    .flatMap((element) => Array.from(element.getClientRects()))
    .filter((rect) => rect.width || rect.height)

  if (!rects.length) {
    return null
  }

  const sortedRects = rects.slice().sort((left, right) => {
    if (Math.abs(left.bottom - right.bottom) > 1) {
      return left.bottom - right.bottom
    }

    return left.right - right.right
  })

  return sortedRects[sortedRects.length - 1]
}

function getGoogleDocsSelectionText() {
  const directSelectionText = String(window.getSelection?.()?.toString?.() || "").trim()
  if (directSelectionText) {
    return directSelectionText
  }

  const textEventIframe = document.querySelector(".docs-texteventtarget-iframe")
  const iframeDocument = textEventIframe instanceof HTMLIFrameElement ? textEventIframe.contentDocument : null
  const iframeActiveElement = iframeDocument?.activeElement || null
  const iframeSelectionText = String(iframeDocument?.getSelection?.()?.toString?.() || "").trim()
  if (iframeSelectionText) {
    return iframeSelectionText
  }

  if (
    iframeActiveElement instanceof HTMLTextAreaElement ||
    (iframeActiveElement instanceof HTMLInputElement && supportsTextSelection(iframeActiveElement))
  ) {
    const start = iframeActiveElement.selectionStart
    const end = iframeActiveElement.selectionEnd

    if (start != null && end != null && end > start) {
      return String(iframeActiveElement.value.slice(start, end)).trim()
    }
  }

  const editableInIframe = iframeDocument?.querySelector("[contenteditable='true'], [contenteditable='plaintext-only'], textarea, input")
  if (
    editableInIframe instanceof HTMLTextAreaElement ||
    (editableInIframe instanceof HTMLInputElement && supportsTextSelection(editableInIframe))
  ) {
    const start = editableInIframe.selectionStart
    const end = editableInIframe.selectionEnd

    if (start != null && end != null && end > start) {
      return String(editableInIframe.value.slice(start, end)).trim()
    }
  }

  if (editableInIframe instanceof HTMLElement && editableInIframe.isContentEditable) {
    const editableText = String(editableInIframe.ownerDocument?.getSelection?.()?.toString?.() || editableInIframe.textContent || "").trim()
    if (editableText) {
      return editableText
    }
  }

  return ""
}

function readGoogleDocsSelection() {
  const selectedText = getGoogleDocsSelectionText()
  const hasRecentSelectionIntent = Date.now() < googleDocsSelectionIntentUntil
  const rect = getGoogleDocsSelectionRect() || ((selectedText || hasRecentSelectionIntent) ? getGoogleDocsFallbackRect() : null)
  if (!rect || (!rect.width && !rect.height)) {
    return null
  }

  return {
    kind: "google-docs",
    activeElement: null,
    selectedText,
    range: null,
    rect
  }
}

async function ensureGoogleDocsSelectionText() {
  if (state.selectionKind !== "google-docs") {
    return false
  }

  state.selectedText = state.selectedText.trim() || getGoogleDocsSelectionText()

  if (state.selectedText.trim()) {
    return true
  }

  const recoveredText = await recoverGoogleDocsSelectionText()
  if (!recoveredText) {
    setStatus(t("no_text"), true)
    return false
  }

  state.selectedText = recoveredText
  return true
}

async function recoverGoogleDocsSelectionText() {
  const eventCapturedText = await captureGoogleDocsCopyEventText()
  if (eventCapturedText) {
    return eventCapturedText
  }

  let previousClipboardText = null

  try {
    previousClipboardText = await navigator.clipboard.readText()
  } catch {
    previousClipboardText = null
  }

  let didCopy = false
  try {
    didCopy = Boolean(document.execCommand?.("copy"))
  } catch {
    didCopy = false
  }

  if (!didCopy) {
    return ""
  }

  await new Promise((resolve) => window.setTimeout(resolve, 40))

  let copiedText = ""
  try {
    copiedText = await navigator.clipboard.readText()
  } catch {
    copiedText = ""
  }

  if (
    previousClipboardText != null &&
    copiedText &&
    copiedText !== previousClipboardText
  ) {
    void navigator.clipboard.writeText(previousClipboardText).catch(() => {})
  }

  return copiedText.trim()
}

async function captureGoogleDocsCopyEventText() {
  const textEventIframe = document.querySelector(".docs-texteventtarget-iframe")
  const iframeDocument = textEventIframe instanceof HTMLIFrameElement ? textEventIframe.contentDocument : null
  const candidateDocuments = [document, iframeDocument].filter(Boolean)

  let capturedText = ""
  let cleanup = null

  try {
    const capturePromise = new Promise((resolve) => {
      const timeoutId = window.setTimeout(() => {
        resolve("")
      }, 120)

      const handleCopy = (event) => {
        const nextText = String(event.clipboardData?.getData("text/plain") || "").trim()
        if (nextText) {
          capturedText = nextText
          window.clearTimeout(timeoutId)
          resolve(nextText)
        }
      }

      candidateDocuments.forEach((candidateDocument) => {
        candidateDocument.addEventListener("copy", handleCopy, true)
        candidateDocument.addEventListener("copy", handleCopy, false)
      })

      cleanup = () => {
        window.clearTimeout(timeoutId)
        candidateDocuments.forEach((candidateDocument) => {
          candidateDocument.removeEventListener("copy", handleCopy, true)
          candidateDocument.removeEventListener("copy", handleCopy, false)
        })
      }
    })

    try {
      if (iframeDocument?.execCommand) {
        iframeDocument.execCommand("copy")
      } else {
        document.execCommand?.("copy")
      }
    } catch {
      // Fall through to clipboard-based recovery below.
    }

    const resolvedText = await capturePromise
    return String(resolvedText || capturedText).trim()
  } finally {
    cleanup?.()
  }
}

function resolveSelectionRect(range) {
  const directRect = getSelectionAnchorRect(range)
  if (directRect && (directRect.width || directRect.height)) {
    return directRect
  }

  return getGoogleDocsFallbackRect()
}

function hidePanel() {
  hideHelpPopover()
  hideLimitModal()
  hideOnboardingPopover()
  hideLanguagePreferencePrompt()
  setAppLanguageMenuOpen(false)
  state.replyDraft = ""
  state.replyDraftMode = false
  state.replyDraftVisible = false
  state.replyDraftDirtySinceResult = false
  replyDraftField.value = ""
  updateReplyDraftVisibility()
  panel.style.display = "none"
  syncOnboardingVisibility()
  updateActionAvailability()
}

function handleOutsideClick(event) {
  const target = event.target

  if (
    panel.contains(target) ||
    trigger.contains(target) ||
    limitModal.contains(target) ||
    onboardingPopover.contains(target) ||
    languagePromptPopover.contains(target)
  ) {
    return
  }

  hideHelpPopover()
  hidePanel()
}

function setAppLanguageMenuOpen(isOpen) {
  appLanguageMenu.hidden = !isOpen
  panel.classList.toggle("ai-writer-mvp-panel-language-open", isOpen)
  if (isOpen) {
    centerPanelInViewport()
  }
  ensurePanelInViewport()
}

async function requestTransform(action) {
  const inputText = getTransformInputText(action)

  if (!inputText) {
    setStatus(t("no_text"), true)
    return
  }

  const requestId = crypto.randomUUID()
  previewField.value = ""
  state.transformedText = ""
  resetStreamRenderingState()
  state.hasResult = false
  state.currentAction = action
  state.activeTransformRequestId = requestId
  state.transformStartedAt = performance.now()
  state.firstStreamChunkAt = 0
  state.lastTransformMetrics = null
  setLoaderMessage(action)
  setLoading(true)
  setStatus("", false)

  chrome.runtime.sendMessage(
    {
      type: "AI_TRANSFORM",
      payload: {
        requestId,
        sessionId: state.analyticsSessionId,
        action,
        text: inputText,
        targetLanguage: state.targetLanguage,
        tone: state.tone,
        selectionKind: state.selectionKind,
        pageHost: window.location.hostname || ""
      }
    },
    (response) => {
      if (chrome.runtime.lastError) {
        if (state.activeTransformRequestId === requestId) {
          state.activeTransformRequestId = null
          setLoading(false)
        }
        void trackEvent("transform_failed_client", {
          action,
          success: false,
          errorMessage: chrome.runtime.lastError.message,
          properties: {
            requestId
          }
        })
        setStatus(chrome.runtime.lastError.message, true)
        return
      }

      if (state.activeTransformRequestId !== requestId) {
        return
      }

      setLoading(false)

      if (!response?.ok) {
        state.activeTransformRequestId = null

        if (response?.code === "DAILY_LIMIT_REACHED") {
          showLimitModal(response?.details)
          setStatus("", false)
          return
        }

        void trackEvent("transform_failed_client", {
          action,
          success: false,
          errorCode: response?.code,
          errorMessage: response?.error || "Request failed.",
          properties: {
            requestId
          }
        })
        setStatus(response?.error || "Request failed.", true)
        return
      }

      flushStreamRenderBuffer()
      state.transformedText = response.result.text
      state.resultSourceText = inputText
      state.replyDraftDirtySinceResult = false
      syncCorrespondenceLanguage(action, response.result)
      state.hasResult = true
      state.activeTransformRequestId = null
      state.lastCompletedAction = action
      state.lastTransformMetrics = buildClientTransformMetrics(response.result.metrics)
      renderCompletedTransformText(state.transformedText)
      updateResultPreview()
      syncResultViewport()
      updateResultVisibility()
      updateActionAvailability()
      logTransformMetrics(state.lastTransformMetrics)
      void trackEvent("transform_rendered", {
        action,
        success: true,
        durationMs: state.lastTransformMetrics?.totalMs,
        properties: {
          requestId,
          resultLength: state.transformedText.length,
          metrics: state.lastTransformMetrics
        }
      })
      setStatus(getResultMessage(), false)
    }
  )
}

function getTransformInputText(action) {
  const normalizedReplyDraft = getNormalizedReplyDraft()

  if (state.replyDraftMode && state.replyDraftDirtySinceResult && normalizedReplyDraft) {
    return normalizedReplyDraft
  }

  if (action === state.lastCompletedAction && state.resultSourceText) {
    return state.resultSourceText
  }

  if (state.hasResult && state.transformedText) {
    return state.transformedText
  }

  if (state.replyDraftMode && normalizedReplyDraft) {
    return normalizedReplyDraft
  }

  return state.selectedText
}

function getNormalizedReplyDraft() {
  return String(state.replyDraft || "").trim()
}

function hasTransformInput() {
  return Boolean(getTransformInputText(state.currentAction || "translate"))
}

function applyTransformedText() {
  const nextText = previewField.value

  if (!nextText) {
    setStatus(t("nothing_apply"), true)
    return
  }

  if (replaceInInputLike(nextText)) {
    finishSuccessfulApply()
    return
  }

  if (replaceInContentEditable(nextText)) {
    finishSuccessfulApply()
    return
  }

  setStatus(t("unsupported_field"), true)
}

function replaceInInputLike(nextText) {
  const element = state.activeElement

  if (!element) {
    return false
  }

  if (element instanceof HTMLTextAreaElement || (element instanceof HTMLInputElement && supportsTextSelection(element))) {
    const start = state.inputSelectionStart
    const end = state.inputSelectionEnd

    if (start == null || end == null) {
      return false
    }

    const value = element.value
    element.value = `${value.slice(0, start)}${nextText}${value.slice(end)}`
    const caretPosition = start + nextText.length
    element.focus()
    element.setSelectionRange(caretPosition, caretPosition)
    element.dispatchEvent(new Event("input", { bubbles: true }))
    element.dispatchEvent(new Event("change", { bubbles: true }))
    return true
  }

  return false
}

function replaceInContentEditable(nextText) {
  const element = state.activeElement

  if (!(element instanceof HTMLElement) || !element.isContentEditable) {
    return false
  }

  const range = state.selectionRange ? state.selectionRange.cloneRange() : null
  if (!range) {
    return false
  }

  element.focus()
  const selection = window.getSelection()
  if (!selection) {
    return false
  }

  selection.removeAllRanges()
  selection.addRange(range)

  let inserted = false

  try {
    inserted = Boolean(document.execCommand?.("insertText", false, nextText))
  } catch {
    inserted = false
  }

  if (!inserted) {
    range.deleteContents()

    const fragment = document.createDocumentFragment()
    const lines = nextText.split("\n")
    lines.forEach((line, index) => {
      if (index > 0) {
        fragment.append(document.createElement("br"))
      }
      fragment.append(document.createTextNode(line))
    })

    range.insertNode(fragment)
    range.collapse(false)
    selection.removeAllRanges()
    selection.addRange(range)

    dispatchEditableInputEvent(element, "beforeinput", "insertReplacementText", nextText)
    dispatchEditableInputEvent(element, "input", "insertReplacementText", nextText)
    element.dispatchEvent(new Event("change", { bubbles: true }))
  }
  return true
}

function supportsTextSelection(element) {
  return ["text", "search", "url", "tel", "password", "email"].includes(element.type)
}

function dispatchEditableInputEvent(element, type, inputType, data) {
  try {
    element.dispatchEvent(new InputEvent(type, {
      bubbles: true,
      cancelable: type === "beforeinput",
      data,
      inputType
    }))
  } catch {
    element.dispatchEvent(new Event(type, {
      bubbles: true,
      cancelable: type === "beforeinput"
    }))
  }
}

function setStatus(message, isError) {
  statusField.textContent = message
  statusField.className = isError ? "ai-writer-mvp-error" : "ai-writer-mvp-status"
  statusField.style.display = message ? "block" : "none"
  ensurePanelInViewport()
}

function setLoading(isLoading) {
  state.isLoading = isLoading
  syncLoadingPresentation()
  actionButtons.forEach((button) => {
    button.disabled = isLoading
  })
  languageSelect.disabled = isLoading
  toneSelect.disabled = isLoading
  closeButton.disabled = isLoading
  updateResultVisibility()
  updateActionAvailability()
  ensurePanelInViewport()
}

function handleRuntimeMessage(message) {
  if (message?.type !== "AI_TRANSFORM_DELTA") {
    return false
  }

  if (!message.requestId || message.requestId !== state.activeTransformRequestId) {
    return false
  }

  if (typeof message.delta !== "string" || !message.delta) {
    return false
  }

  if (!state.firstStreamChunkAt) {
    state.firstStreamChunkAt = performance.now()
  }

  const nextText = getAppendableStreamText(message.delta)
  if (!nextText) {
    return false
  }

  state.transformedText += nextText
  state.hasResult = true
  queueStreamPreviewAppend(nextText)
  return false
}

function getAppendableStreamText(delta) {
  if (!state.transformedText || !delta.startsWith(state.transformedText)) {
    return delta
  }

  return delta.slice(state.transformedText.length)
}

function queueStreamPreviewAppend(text) {
  state.streamRenderBuffer += text

  if (state.streamRenderFrame) {
    return
  }

  state.streamRenderFrame = window.requestAnimationFrame(() => {
    flushStreamRenderBuffer()
  })
}

function flushStreamRenderBuffer() {
  if (state.streamRenderFrame) {
    window.cancelAnimationFrame(state.streamRenderFrame)
    state.streamRenderFrame = 0
  }

  if (!state.streamRenderBuffer) {
    return
  }

  appendPreviewText(state.streamRenderBuffer)
  state.streamRenderBuffer = ""
  updateStreamedResultPresentation()
}

function appendPreviewText(text) {
  const previousScrollTop = previewField.scrollTop

  if (previewField.value !== state.streamRenderText) {
    previewField.value = state.streamRenderText
  }

  previewField.setRangeText(text, previewField.value.length, previewField.value.length, "preserve")
  state.streamRenderText += text

  if (document.activeElement !== previewField) {
    previewField.scrollTop = previousScrollTop
  }
}

function renderCompletedTransformText(text) {
  if (state.streamRenderText && text.startsWith(state.streamRenderText)) {
    appendPreviewText(text.slice(state.streamRenderText.length))
  } else if (previewField.value !== text) {
    previewField.value = text
    state.streamRenderText = text
  }
}

function resetStreamRenderingState() {
  if (state.streamRenderFrame) {
    window.cancelAnimationFrame(state.streamRenderFrame)
  }

  state.streamRenderText = ""
  state.streamRenderBuffer = ""
  state.streamRenderFrame = 0
}

function updateStreamedResultPresentation() {
  updateResultPreview()
  syncResultViewport()
  syncLoadingPresentation()
  updateResultVisibility()
  updateActionAvailability()
}

function syncLoadingPresentation() {
  const showOverlayLoader = state.isLoading && !state.hasResult
  loader.hidden = !showOverlayLoader
  previewField.classList.toggle("ai-writer-mvp-preview-loading", showOverlayLoader)
  updateResultPreview()
  syncResultViewport()
}

function showLimitModal(details) {
  const limit = Number(details?.limit || 20)
  limitTitle.textContent = t("daily_limit_title")
  limitText.textContent = t("daily_limit_text", { limit })
  limitActions.hidden = false
  buyBox.hidden = true
  feedbackBox.hidden = true
  panel.classList.add("ai-writer-mvp-panel-limit-open")
  centerPanelInViewport()
  limitModal.hidden = false
  syncLimitModalToPanel()
  void trackEvent("limit_modal_opened", {
    success: false,
    properties: {
      limit,
      count: Number(details?.count || limit)
    }
  })
}

function openFeedbackModal() {
  limitTitle.textContent = ""
  limitText.textContent = ""
  limitActions.hidden = true
  buyBox.hidden = true
  feedbackBox.hidden = false
  panel.classList.add("ai-writer-mvp-panel-limit-open")
  panel.classList.add("ai-writer-mvp-panel-limit-expanded")
  centerPanelInViewport()
  limitModal.hidden = false
  syncLimitModalToPanel()
  feedbackText.focus()
  void trackEvent("feedback_modal_opened", {
    success: true,
    properties: {
      source: "floating_button"
    }
  })
}

function hideLimitModal() {
  panel.classList.remove("ai-writer-mvp-panel-limit-open")
  panel.classList.remove("ai-writer-mvp-panel-limit-expanded")
  limitActions.hidden = false
  buyBox.hidden = true
  feedbackBox.hidden = true
  feedbackText.value = ""
  limitModal.hidden = true
}

function syncLimitModalToPanel() {
  if (limitModal.hidden || panel.style.display !== "block") {
    return
  }

  const panelRect = panel.getBoundingClientRect()
  limitModal.style.top = `${panelRect.top}px`
  limitModal.style.left = `${panelRect.left}px`
  limitModal.style.width = `${panelRect.width}px`
  limitModal.style.height = `${panelRect.height}px`
}

function renderLanguageOptions() {
  return POPULAR_LANGUAGES.map((language) => {
    const selected = language === state.targetLanguage ? " selected" : ""
    const preferredSuffix = language === state.preferredTargetLanguage ? ` (${t("preferred_badge")})` : ""
    return `<option value="${language}"${selected}>${language}${preferredSuffix}</option>`
  }).join("")
}

function refreshLanguageSelectOptions() {
  const selectedTargetLanguage = state.targetLanguage
  const selectedPromptLanguage = state.preferredTargetLanguage

  languageSelect.innerHTML = renderLanguageOptions()
  languageSelect.value = selectedTargetLanguage

  languagePromptSelect.innerHTML = renderLanguageOptions()
  languagePromptSelect.value = selectedPromptLanguage
}

async function loadAppLanguagePreference() {
  try {
    const result = await chrome.storage.local.get(APP_LANGUAGE_STORAGE_KEY)
    const savedLanguage = result?.[APP_LANGUAGE_STORAGE_KEY]

    if (typeof savedLanguage === "string" && APP_UI_LANGUAGES.some((language) => language.value === savedLanguage)) {
      state.appLanguage = savedLanguage
    }
  } catch {
    state.appLanguage = DEFAULT_APP_LANGUAGE
  }

  applyTranslations()
}

async function loadOnboardingState() {
  try {
    const result = await chrome.storage.local.get(FIRST_RUN_ONBOARDING_KEY)
    state.shouldShowOnboarding = result?.[FIRST_RUN_ONBOARDING_KEY] !== true
  } catch {
    state.shouldShowOnboarding = true
  } finally {
    state.onboardingStep = state.shouldShowOnboarding ? "welcome" : null
    state.onboardingStateLoaded = true
  }
}

async function ensureOnboardingStateLoaded() {
  if (state.onboardingStateLoaded) {
    return
  }

  await loadOnboardingState()
}

async function dismissOnboarding() {
  state.shouldShowOnboarding = false
  state.onboardingStep = null
  state.currentAction = null
  if (!state.hasResult) {
    previewField.value = ""
  }
  syncOnboardingVisibility()
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateResultVisibility()
  updateActionAvailability()
  ensurePanelInViewport()

  try {
    await chrome.storage.local.set({
      [FIRST_RUN_ONBOARDING_KEY]: true
    })
  } catch {
    // Ignore storage errors and keep the session usable.
  }
}

async function handleOnboardingNext() {
  if (state.onboardingStep === "welcome") {
    startOnboardingWalkthrough()
    return
  }

  await advanceOnboardingWalkthrough()
}

function startOnboardingWalkthrough() {
  state.onboardingStep = ONBOARDING_WALKTHROUGH_STEPS[0]
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateResultVisibility()
  updateActionAvailability()
  centerPanelInViewport()
  syncOnboardingVisibility()
}

async function advanceOnboardingWalkthrough() {
  const currentIndex = ONBOARDING_WALKTHROUGH_STEPS.indexOf(state.onboardingStep)

  if (currentIndex === -1) {
    startOnboardingWalkthrough()
    return
  }

  const nextStep = ONBOARDING_WALKTHROUGH_STEPS[currentIndex + 1]
  if (!nextStep) {
    await dismissOnboarding()
    return
  }

  state.onboardingStep = nextStep
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateResultVisibility()
  updateActionAvailability()
  centerPanelInViewport()
  syncOnboardingVisibility()
}

function saveAppLanguagePreference(language) {
  void chrome.storage.local.set({
    [APP_LANGUAGE_STORAGE_KEY]: language
  })
}

async function loadLanguagePreference() {
  try {
    const result = await chrome.storage.local.get([
      LANGUAGE_PREFERENCE_KEY,
      CORRESPONDENCE_LANGUAGE_BY_HOST_KEY,
      LANGUAGE_PREFERENCE_PROMPT_KEY
    ])
    const savedLanguage = result?.[LANGUAGE_PREFERENCE_KEY]
    const correspondenceLanguageByHost = result?.[CORRESPONDENCE_LANGUAGE_BY_HOST_KEY]
    state.shouldShowLanguagePreferencePrompt = result?.[LANGUAGE_PREFERENCE_PROMPT_KEY] !== true
    state.correspondenceLanguageByHost = isLanguageMap(correspondenceLanguageByHost)
      ? correspondenceLanguageByHost
      : {}

    if (typeof savedLanguage !== "string" || !POPULAR_LANGUAGES.includes(savedLanguage)) {
      state.hasLanguagePreference = false
      applySuggestedTargetLanguage()
      return
    }

    state.hasLanguagePreference = true
    state.preferredTargetLanguage = savedLanguage
    refreshLanguageSelectOptions()
    applySuggestedTargetLanguage()
  } catch {
    state.hasLanguagePreference = false
    state.shouldShowLanguagePreferencePrompt = true
    applySuggestedTargetLanguage()
  }
}

function saveLanguagePreference(language) {
  void chrome.storage.local.set({
    [LANGUAGE_PREFERENCE_KEY]: language
  })
}

function saveCorrespondenceLanguageForCurrentHost(language) {
  if (!POPULAR_LANGUAGES.includes(language)) {
    return
  }

  const hostKey = getCorrespondenceHostKey()
  if (!hostKey) {
    return
  }

  state.correspondenceLanguageByHost = {
    ...state.correspondenceLanguageByHost,
    [hostKey]: language
  }

  void chrome.storage.local.set({
    [CORRESPONDENCE_LANGUAGE_BY_HOST_KEY]: state.correspondenceLanguageByHost
  })
}

function getCorrespondenceLanguageForCurrentHost() {
  const hostKey = getCorrespondenceHostKey()
  if (!hostKey) {
    return ""
  }

  const language = state.correspondenceLanguageByHost?.[hostKey]
  return POPULAR_LANGUAGES.includes(language) ? language : ""
}

function getCorrespondenceHostKey() {
  return window.location.hostname || ""
}

function isLanguageMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false
  }

  return Object.values(value).every((item) => typeof item === "string" && POPULAR_LANGUAGES.includes(item))
}

function shouldOpenLanguagePreferencePrompt() {
  return !state.hasLanguagePreference && state.shouldShowLanguagePreferencePrompt
}

function openLanguagePreferencePrompt() {
  state.pendingActionAfterLanguagePrompt = "translate"
  languagePromptSelect.value = state.targetLanguage
  languagePromptPopover.hidden = false
  showLanguagePreferencePrompt()
}

async function saveLanguagePreferenceFromPrompt() {
  const chosenLanguage = languagePromptSelect.value
  if (POPULAR_LANGUAGES.includes(chosenLanguage)) {
    state.preferredTargetLanguage = chosenLanguage
    state.targetLanguage = chosenLanguage
    state.hasLanguagePreference = true
    refreshLanguageSelectOptions()
    saveLanguagePreference(chosenLanguage)
  }

  await continueAfterLanguagePreferencePrompt(true)
}

async function continueAfterLanguagePreferencePrompt(markSeen) {
  const pendingAction = state.pendingActionAfterLanguagePrompt
  state.pendingActionAfterLanguagePrompt = null
  hideLanguagePreferencePrompt()

  if (markSeen) {
    state.shouldShowLanguagePreferencePrompt = false
    try {
      await chrome.storage.local.set({
        [LANGUAGE_PREFERENCE_PROMPT_KEY]: true
      })
    } catch {
      // Ignore storage errors and continue the flow.
    }
  } else {
    state.shouldShowLanguagePreferencePrompt = false
    void chrome.storage.local.set({
      [LANGUAGE_PREFERENCE_PROMPT_KEY]: true
    })
  }

  if (pendingAction) {
    void requestTransform(pendingAction)
  }
}

function showHelpPopover(button) {
  const target = button?.getAttribute("data-help-target")
  const content = getHelpContent(target)
  if (!content) {
    return
  }

  helpPopover.textContent = content
  helpPopover.hidden = false

  const buttonRect = button.getBoundingClientRect()
  const popoverRect = helpPopover.getBoundingClientRect()
  const top = window.scrollY + buttonRect.bottom + 10
  const minLeft = window.scrollX + 12
  const maxLeft = window.scrollX + window.innerWidth - popoverRect.width - 12
  const centeredLeft = window.scrollX + buttonRect.left + (buttonRect.width / 2) - (popoverRect.width / 2)
  const left = clamp(centeredLeft, minLeft, maxLeft)

  helpPopover.style.top = `${top}px`
  helpPopover.style.left = `${left}px`
}

function hideHelpPopover() {
  helpPopover.hidden = true
}

function hideOnboardingPopover() {
  onboardingPopover.hidden = true
}

function hideLanguagePreferencePrompt() {
  languagePromptPopover.hidden = true
}

async function resetDailyLimit() {
  try {
    await chrome.storage.local.remove(DAILY_USAGE_STORAGE_KEY)
    hideLimitModal()
    setStatus("Admin: daily limit reset.", false)
  } catch {
    setStatus("Admin reset failed.", true)
  }
}

async function resetOnboardingPreview() {
  let storageFailed = false

  try {
    await chrome.storage.local.remove([FIRST_RUN_ONBOARDING_KEY, LANGUAGE_PREFERENCE_PROMPT_KEY])
  } catch {
    storageFailed = true
  }

  state.shouldShowOnboarding = true
  state.onboardingStateLoaded = true
  state.onboardingStep = "welcome"
  state.currentAction = null
  state.pendingActionAfterLanguagePrompt = null
  state.shouldShowLanguagePreferencePrompt = true
  hideLanguagePreferencePrompt()
  hideOnboardingPopover()
  panel.style.display = "block"
  centerPanelInViewport()
  syncOnboardingVisibility()
  ensurePanelInViewport()
  setStatus(storageFailed ? "Admin onboarding reset failed." : "Admin: onboarding reset.", storageFailed)
}

async function resetTextFlowPreview() {
  let storageFailed = false

  try {
    await chrome.storage.local.remove([
      LANGUAGE_PREFERENCE_KEY,
      CORRESPONDENCE_LANGUAGE_BY_HOST_KEY,
      LANGUAGE_PREFERENCE_PROMPT_KEY,
      FIRST_RUN_ONBOARDING_KEY
    ])
  } catch {
    storageFailed = true
  }

  state.preferredTargetLanguage = DEFAULT_TARGET_LANGUAGE
  state.targetLanguage = DEFAULT_TARGET_LANGUAGE
  state.correspondenceLanguageByHost = {}
  state.hasLanguagePreference = false
  state.hasManualTargetLanguageOverride = false
  state.shouldShowLanguagePreferencePrompt = true
  state.shouldShowOnboarding = true
  state.onboardingStateLoaded = true
  state.onboardingStep = "welcome"
  state.pendingActionAfterLanguagePrompt = null
  languagePromptSelect.value = DEFAULT_TARGET_LANGUAGE
  refreshLanguageSelectOptions()
  updateLanguageHint()
  hideLanguagePreferencePrompt()
  hideOnboardingPopover()
  clearSelectionState()
  hideTrigger()
  panel.style.display = "block"
  centerPanelInViewport()
  syncOnboardingVisibility()
  ensurePanelInViewport()
  setStatus(storageFailed ? "Admin text-flow reset failed." : "Admin: text-flow reset.", storageFailed)
}

function getHelpContent(target) {
  if (target === "language") {
    return t("language_help")
  }

  return null
}

function updateTranslateSectionVisibility() {
  if (!languageRow || !languageSection) {
    return
  }

  const isTranslate = state.currentAction === "translate"
  languageRow.style.display = isTranslate ? "block" : "none"
  languageSection.style.display = isTranslate ? "block" : "none"
  ensurePanelInViewport()
}

function updateToneSectionVisibility() {
  if (!toneRow || !toneSection) {
    return
  }

  const isTone = state.currentAction === "tone"
  toneRow.style.display = isTone ? "block" : "none"
  toneSection.style.display = isTone ? "block" : "none"
  ensurePanelInViewport()
}

function updateResultVisibility() {
  const shouldShow = state.isLoading || state.hasResult
  const canApply = state.selectionKind === "input" || state.selectionKind === "contenteditable"
  const shouldShowFeedbackFab = Boolean(state.hasResult && state.transformedText.trim())

  if (resultSection) {
    resultSection.style.display = shouldShow ? "block" : "none"
  }

  if (replyToggleRow) {
    replyToggleRow.hidden = !state.hasResult
  }

  if (feedbackFabButton) {
    feedbackFabButton.hidden = !shouldShowFeedbackFab
    feedbackFabButton.style.display = shouldShowFeedbackFab ? "inline-flex" : "none"
  }

  if (footer) {
    footer.style.display = shouldShow && canApply ? "flex" : "none"
  }

  ensurePanelInViewport()
}

function updateReplyDraftVisibility() {
  if (!replyDraftRow || !replyToggleRow) {
    return
  }

  const shouldShowDraft = state.replyDraftVisible || Boolean(getNormalizedReplyDraft())
  replyDraftRow.hidden = !shouldShowDraft
  replyToggleRow.hidden = !state.hasResult
  replyToggleButton.textContent = getReplyToggleLabel()
  ensurePanelInViewport()
}

function getReplyToggleLabel() {
  const replyTargetLanguage = getReplyTargetLanguage()
  if (replyTargetLanguage) {
    return t("reply_to", { language: replyTargetLanguage })
  }

  return t("reply")
}

function updateResultPreview() {
  const showDiffPreview = shouldShowDiffPreview()
  previewField.hidden = showDiffPreview
  diffPreview.hidden = !showDiffPreview

  if (!showDiffPreview) {
    diffPreview.innerHTML = ""
    return
  }

  diffPreview.innerHTML = renderDiffPreviewHtml(state.resultSourceText || state.selectedText, state.transformedText)
}

function syncResultViewport() {
  syncPreviewFieldHeight()
  syncDiffPreviewHeight()
  ensurePanelInViewport()
}

function syncPreviewFieldHeight() {
  previewField.style.height = "auto"
  const nextHeight = clamp(previewField.scrollHeight, RESULT_MIN_HEIGHT, RESULT_MAX_HEIGHT)
  previewField.style.height = `${nextHeight}px`
  previewField.style.overflowY = previewField.scrollHeight > RESULT_MAX_HEIGHT ? "auto" : "hidden"
}

function syncDiffPreviewHeight() {
  const nextHeight = clamp(diffPreview.scrollHeight, RESULT_MIN_HEIGHT, RESULT_MAX_HEIGHT)
  diffPreview.style.height = `${nextHeight}px`
  diffPreview.style.overflowY = diffPreview.scrollHeight > RESULT_MAX_HEIGHT ? "auto" : "hidden"
}

function shouldShowDiffPreview() {
  return (
    state.currentAction === "grammar" ||
    state.currentAction === "improve" ||
    state.currentAction === "tone"
  ) && Boolean(state.transformedText)
}

function renderDiffPreviewHtml(originalText, nextText) {
  const originalTokens = tokenizeDiffText(originalText)
  const nextTokens = tokenizeDiffText(nextText)
  const lcsMatrix = buildLcsMatrix(originalTokens, nextTokens)
  const segments = buildDiffSegments(originalTokens, nextTokens, lcsMatrix)

  return segments.map((segment) => {
    const escapedText = escapeHtml(segment.value)
    return segment.added
      ? `<span class="ai-writer-mvp-diff-added">${escapedText}</span>`
      : escapedText
  }).join("")
}

function tokenizeDiffText(text) {
  return String(text || "").match(/\S+|\s+/g) || []
}

function buildLcsMatrix(sourceTokens, targetTokens) {
  const rows = sourceTokens.length + 1
  const cols = targetTokens.length + 1
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0))

  for (let sourceIndex = sourceTokens.length - 1; sourceIndex >= 0; sourceIndex -= 1) {
    for (let targetIndex = targetTokens.length - 1; targetIndex >= 0; targetIndex -= 1) {
      if (sourceTokens[sourceIndex] === targetTokens[targetIndex]) {
        matrix[sourceIndex][targetIndex] = matrix[sourceIndex + 1][targetIndex + 1] + 1
      } else {
        matrix[sourceIndex][targetIndex] = Math.max(
          matrix[sourceIndex + 1][targetIndex],
          matrix[sourceIndex][targetIndex + 1]
        )
      }
    }
  }

  return matrix
}

function buildDiffSegments(sourceTokens, targetTokens, lcsMatrix) {
  const segments = []
  let sourceIndex = 0
  let targetIndex = 0

  while (sourceIndex < sourceTokens.length && targetIndex < targetTokens.length) {
    if (sourceTokens[sourceIndex] === targetTokens[targetIndex]) {
      appendDiffSegment(segments, targetTokens[targetIndex], false)
      sourceIndex += 1
      targetIndex += 1
      continue
    }

    if (lcsMatrix[sourceIndex + 1][targetIndex] >= lcsMatrix[sourceIndex][targetIndex + 1]) {
      sourceIndex += 1
      continue
    }

    appendDiffSegment(segments, targetTokens[targetIndex], true)
    targetIndex += 1
  }

  while (targetIndex < targetTokens.length) {
    appendDiffSegment(segments, targetTokens[targetIndex], true)
    targetIndex += 1
  }

  return segments
}

function appendDiffSegment(segments, value, added) {
  if (!value) {
    return
  }

  const previousSegment = segments[segments.length - 1]
  if (previousSegment && previousSegment.added === added) {
    previousSegment.value += value
    return
  }

  segments.push({ value, added })
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function syncOnboardingVisibility() {
  if (!onboardingPopover) {
    return
  }

  const shouldShow = panel.style.display === "block" && state.shouldShowOnboarding
  const isWelcomeStep = shouldShow && state.onboardingStep === "welcome"
  const isWalkthroughStep = shouldShow && ONBOARDING_WALKTHROUGH_STEPS.includes(state.onboardingStep)

  if (isWelcomeStep) {
    onboardingBadge.hidden = false
    onboardingGuideTitle.textContent = t("onboarding_title")
    onboardingGuideText.textContent = t("onboarding_text")
    onboardingGuideNote.textContent = t("onboarding_text_secondary")
    onboardingGuideExtra.textContent = t("onboarding_text_tertiary")
    onboardingGuideNextButton.textContent = t("onboarding_button_next")
    showOnboardingPopover()
  } else if (isWalkthroughStep) {
    onboardingBadge.hidden = true
    onboardingGuideTitle.textContent = t(`onboarding_${state.onboardingStep}_title`)
    onboardingGuideText.textContent = t(`onboarding_${state.onboardingStep}_text`)
    onboardingGuideNote.textContent = t(`onboarding_${state.onboardingStep}_note`)
    onboardingGuideExtra.textContent = ""
    onboardingGuideNextButton.textContent = state.onboardingStep === ONBOARDING_WALKTHROUGH_STEPS[ONBOARDING_WALKTHROUGH_STEPS.length - 1]
      ? t("onboarding_button_done")
      : t("onboarding_button_next")
    showOnboardingPopover()
  } else {
    hideOnboardingPopover()
  }

  actionButtons.forEach((button) => {
    const action = button.getAttribute("data-action")
    const isTarget = isWalkthroughStep && action === state.onboardingStep
    button.classList.toggle("ai-writer-mvp-onboarding-target", isTarget)
  })
}

function showLanguagePreferencePrompt() {
  languagePromptTitle.textContent = t("language_prompt_title")
  languagePromptText.textContent = t("language_prompt_text")
  languagePromptSaveButton.textContent = t("language_prompt_save")
  languagePromptLaterButton.textContent = t("language_prompt_later")
  languagePromptPopover.hidden = false

  const target = languageSection || languageSelect
  if (!target) {
    return
  }

  const targetRect = target.getBoundingClientRect()
  const popoverRect = languagePromptPopover.getBoundingClientRect()
  const gap = 12
  const minLeft = window.scrollX + 12
  const maxLeft = window.scrollX + window.innerWidth - popoverRect.width - 12
  const preferredLeft = window.scrollX + targetRect.left + (targetRect.width / 2) - (popoverRect.width / 2)
  let left = clamp(preferredLeft, minLeft, maxLeft)
  let top = window.scrollY + targetRect.bottom + gap

  const maxTop = window.scrollY + window.innerHeight - popoverRect.height - 12
  if (top > maxTop) {
    top = window.scrollY + targetRect.top - popoverRect.height - gap
  }

  top = Math.max(window.scrollY + 12, top)
  languagePromptPopover.style.left = `${left}px`
  languagePromptPopover.style.top = `${top}px`
}

function showOnboardingPopover() {
  const target = getOnboardingPopoverTarget()
  if (!target) {
    hideOnboardingPopover()
    return
  }

  onboardingPopover.hidden = false

  const targetRect = target.getBoundingClientRect()
  const popoverRect = onboardingPopover.getBoundingClientRect()
  const gap = 12
  const minLeft = window.scrollX + 12
  const maxLeft = window.scrollX + window.innerWidth - popoverRect.width - 12
  const preferredLeft = window.scrollX + targetRect.left + (targetRect.width / 2) - (popoverRect.width / 2)
  let left = clamp(preferredLeft, minLeft, maxLeft)
  let top = window.scrollY + targetRect.bottom + gap

  const maxTop = window.scrollY + window.innerHeight - popoverRect.height - 12
  if (top > maxTop) {
    top = window.scrollY + targetRect.top - popoverRect.height - gap
  }

  top = Math.max(window.scrollY + 12, top)
  onboardingPopover.style.left = `${left}px`
  onboardingPopover.style.top = `${top}px`
}

function getOnboardingPopoverTarget() {
  if (!state.onboardingStep) {
    return null
  }

  if (state.onboardingStep === "welcome") {
    return titleField || panel
  }

  return panel.querySelector(`[data-action="${state.onboardingStep}"]`)
}

function applySuggestedTargetLanguage() {
  if (state.replyDraftMode) {
    state.targetLanguage = getReplyTargetLanguage()
    languageSelect.value = state.targetLanguage
    updateLanguageHint()
    return
  }

  state.targetLanguage = suggestTargetLanguage(getLanguageSuggestionSourceText())
  languageSelect.value = state.targetLanguage
  updateLanguageHint()
}

function getLanguageSuggestionSourceText() {
  if (state.replyDraftMode) {
    return getNormalizedReplyDraft()
  }

  return state.selectedText
}

function suggestTargetLanguage(text) {
  if (looksLikeRussianText(text)) {
    const correspondenceLanguage = getCorrespondenceLanguageForCurrentHost()
    if (correspondenceLanguage && correspondenceLanguage !== RUSSIAN_LANGUAGE) {
      return correspondenceLanguage
    }

    return state.preferredTargetLanguage
  }

  return state.preferredTargetLanguage
}

function looksLikeRussianText(text) {
  const lettersOnly = Array.from(text || "").filter((character) => /\p{L}/u.test(character))
  if (!lettersOnly.length) {
    return false
  }

  const cyrillicLetters = lettersOnly.filter((character) => /\p{Script=Cyrillic}/u.test(character))
  if (!cyrillicLetters.length) {
    return false
  }

  const russianSpecificLetters = cyrillicLetters.filter((character) => /[ЁёЫыЭэЪъ]/.test(character))
  if (russianSpecificLetters.length > 0) {
    return true
  }

  return cyrillicLetters.length / lettersOnly.length > 0.55
}

function inferCorrespondenceLanguageFromText(text) {
  const value = String(text || "").trim()
  if (!value) {
    return ""
  }

  if (looksLikeRussianText(value)) {
    return RUSSIAN_LANGUAGE
  }

  if (/[ěščřžýáíéůúťďňó]/iu.test(value)) {
    return "Czech"
  }

  if (/\b(ahoj|dobry|dekuji|dekuj|prosim|muzu|muze|proc|vecer|sam|sama|sport|spolecnost|odpocinout|plan)\b/iu.test(value)) {
    return "Czech"
  }

  return ""
}

function getSelectionSourceLanguage() {
  const inferredLanguage = normalizeCorrespondenceLanguage(inferCorrespondenceLanguageFromText(state.selectedText))
  if (inferredLanguage) {
    return inferredLanguage
  }

  return getCorrespondenceLanguageForCurrentHost()
}

function getReplyTargetLanguage() {
  return getSelectionSourceLanguage() || state.preferredTargetLanguage
}

function updateLanguageHint() {
  if (!languageHint) {
    return
  }
  languageHint.textContent = ""
  languageHint.style.display = "none"
}

function updateInlineTip() {
  if (!inlineTip) {
    return
  }

  if (panel.style.display !== "block" || Math.random() >= 0.35) {
    inlineTip.hidden = true
    inlineTip.textContent = ""
    ensurePanelInViewport()
    return
  }

  inlineTip.textContent = `${t("tip_label")}: ${getContextualTip()}`
  inlineTip.hidden = false
  ensurePanelInViewport()
}

function getContextualTip() {
  if (state.currentAction === "tone") {
    return t("tip_tone_context")
  }

  if (state.currentAction === "translate" && looksLikeRussianText(state.selectedText)) {
    return t("tip_translate_reply_memory")
  }

  if (state.selectionKind === "page") {
    return t("tip_copy_page")
  }

  const inlineTips = [
    t("tip_inline_grammar_first"),
    t("tip_inline_tone_general"),
    t("tip_inline_replace"),
    t("tip_inline_translate_memory")
  ]
  return inlineTips[Math.floor(Math.random() * inlineTips.length)]
}

function readInputSelection(element) {
  if (element instanceof HTMLElement && panel.contains(element)) {
    return null
  }

  if (!(element instanceof HTMLTextAreaElement) && !(element instanceof HTMLInputElement && supportsTextSelection(element))) {
    return null
  }

  const start = element.selectionStart
  const end = element.selectionEnd

  if (start == null || end == null || start === end) {
    return null
  }

  const selectedText = element.value.slice(start, end)
  if (!selectedText) {
    return null
  }

  const rect = getInputSelectionRect(element, start, end)

  return {
    kind: "input",
    activeElement: element,
    selectedText,
    start,
    end,
    rect
  }
}

function getInputSelectionRect(element, start, end) {
  try {
    const computedStyle = window.getComputedStyle(element)
    const mirror = document.createElement("div")
    const marker = document.createElement("span")
    const elementRect = element.getBoundingClientRect()
    const beforeSelection = element.value.slice(0, end)

    mirror.setAttribute("aria-hidden", "true")
    mirror.style.position = "absolute"
    mirror.style.visibility = "hidden"
    mirror.style.pointerEvents = "none"
    mirror.style.whiteSpace = element instanceof HTMLTextAreaElement ? "pre-wrap" : "pre"
    mirror.style.wordBreak = "break-word"
    mirror.style.overflowWrap = "break-word"
    mirror.style.top = "0"
    mirror.style.left = "0"
    mirror.style.width = `${element.clientWidth}px`
    mirror.style.minHeight = `${element.clientHeight}px`
    mirror.style.boxSizing = computedStyle.boxSizing
    mirror.style.font = computedStyle.font
    mirror.style.fontFamily = computedStyle.fontFamily
    mirror.style.fontSize = computedStyle.fontSize
    mirror.style.fontWeight = computedStyle.fontWeight
    mirror.style.fontStyle = computedStyle.fontStyle
    mirror.style.letterSpacing = computedStyle.letterSpacing
    mirror.style.lineHeight = computedStyle.lineHeight
    mirror.style.textTransform = computedStyle.textTransform
    mirror.style.textIndent = computedStyle.textIndent
    mirror.style.textRendering = computedStyle.textRendering
    mirror.style.paddingTop = computedStyle.paddingTop
    mirror.style.paddingRight = computedStyle.paddingRight
    mirror.style.paddingBottom = computedStyle.paddingBottom
    mirror.style.paddingLeft = computedStyle.paddingLeft
    mirror.style.borderTopWidth = computedStyle.borderTopWidth
    mirror.style.borderRightWidth = computedStyle.borderRightWidth
    mirror.style.borderBottomWidth = computedStyle.borderBottomWidth
    mirror.style.borderLeftWidth = computedStyle.borderLeftWidth

    mirror.textContent = beforeSelection
    marker.textContent = "\u200b"
    mirror.append(marker)
    document.body.append(mirror)

    const mirrorRect = mirror.getBoundingClientRect()
    const markerRect = marker.getBoundingClientRect()
    mirror.remove()

    if (markerRect.width || markerRect.height) {
      return new DOMRect(
        elementRect.left + (markerRect.left - mirrorRect.left) - element.scrollLeft,
        elementRect.top + (markerRect.top - mirrorRect.top) - element.scrollTop,
        Math.max(markerRect.width, 1),
        Math.max(markerRect.height, Number.parseFloat(computedStyle.lineHeight) || 16)
      )
    }
  } catch {
    // Fall through to the input box rect below.
  }

  return element.getBoundingClientRect()
}

function readEditableSelection() {
  const selection = window.getSelection()
  const text = selection ? selection.toString() : ""

  if (!selection || !text.trim() || selection.rangeCount === 0) {
    return null
  }

  const range = selection.getRangeAt(0)
  const editableElement = (
    findEditableContainer(range.commonAncestorContainer) ||
    findEditableContainer(selection.anchorNode) ||
    findEditableContainer(document.activeElement)
  )
  if (!editableElement) {
    return null
  }

  const rect = resolveSelectionRect(range)

  if (!rect || (!rect.width && !rect.height)) {
    return null
  }

  return {
    kind: "contenteditable",
    activeElement: editableElement,
    selectedText: text,
    range: range.cloneRange(),
    rect
  }
}

function readPageSelection() {
  const selection = window.getSelection()
  const text = selection ? selection.toString() : ""

  if (!selection || !text.trim() || selection.rangeCount === 0) {
    return null
  }

  const range = selection.getRangeAt(0)
  const editableElement = findEditableContainer(range.commonAncestorContainer)
  if (editableElement) {
    return null
  }

  const rect = resolveSelectionRect(range)
  if (!rect || (!rect.width && !rect.height)) {
    return null
  }

  return {
    kind: "page",
    activeElement: null,
    selectedText: text,
    range: null,
    rect
  }
}

function rememberInputSelection(selection) {
  const isSameSelection = (
    state.selectedText === selection.selectedText &&
    state.selectionKind === selection.kind &&
    state.activeElement === selection.activeElement &&
    state.inputSelectionStart === selection.start &&
    state.inputSelectionEnd === selection.end
  )

  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = selection.activeElement
  state.inputSelectionStart = selection.start
  state.inputSelectionEnd = selection.end
  state.selectionRange = null
  state.selectionKind = selection.kind
  if (!isSameSelection) {
    state.replyDraftMode = false
    state.replyDraftVisible = false
    resetTransformChain()
    state.hasManualTargetLanguageOverride = false
  }
  if (!state.hasManualTargetLanguageOverride) {
    applySuggestedTargetLanguage()
  } else {
    languageSelect.value = state.targetLanguage
  }
}

function rememberEditableSelection(selection) {
  const isSameSelection = (
    state.selectedText === selection.selectedText &&
    state.selectionKind === selection.kind &&
    state.activeElement === selection.activeElement &&
    areRangesEquivalent(state.selectionRange, selection.range)
  )

  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = selection.activeElement
  state.selectionRange = selection.range
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = selection.kind
  if (!isSameSelection) {
    state.replyDraftMode = false
    state.replyDraftVisible = false
    resetTransformChain()
    state.hasManualTargetLanguageOverride = false
  }
  if (!state.hasManualTargetLanguageOverride) {
    applySuggestedTargetLanguage()
  } else {
    languageSelect.value = state.targetLanguage
  }
}

function rememberPageSelection(selection) {
  const isSameSelection = (
    state.selectedText === selection.selectedText &&
    state.selectionKind === selection.kind
  )

  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = null
  state.selectionRange = null
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = selection.kind
  if (!isSameSelection) {
    state.replyDraftMode = false
    state.replyDraftVisible = false
    resetTransformChain()
    state.hasManualTargetLanguageOverride = false
  }
  if (!state.hasManualTargetLanguageOverride) {
    applySuggestedTargetLanguage()
  } else {
    languageSelect.value = state.targetLanguage
  }
}

function areRangesEquivalent(left, right) {
  if (!left || !right) {
    return false
  }

  return (
    left.startContainer === right.startContainer &&
    left.startOffset === right.startOffset &&
    left.endContainer === right.endContainer &&
    left.endOffset === right.endOffset
  )
}

function resetTransformChain() {
  state.resultSourceText = ""
  state.lastCompletedAction = null
}

function getSelectionAnchorRect(range) {
  const caretRect = getRangeEndCaretRect(range)
  if (caretRect) {
    return caretRect
  }

  const clientRects = Array.from(range.getClientRects()).filter((rect) => rect.width || rect.height)

  if (!clientRects.length) {
    return range.getBoundingClientRect()
  }

  // Anchor the trigger to the last visible fragment of the selection instead of
  // the full union box, which can drift far to the right on wrapped selections.
  const sortedRects = clientRects.slice().sort((left, right) => {
    if (Math.abs(left.bottom - right.bottom) > 1) {
      return left.bottom - right.bottom
    }

    return left.right - right.right
  })

  return sortedRects[sortedRects.length - 1]
}

function getRangeEndCaretRect(range) {
  try {
    const caretRange = range.cloneRange()
    caretRange.collapse(false)

    const caretRects = Array.from(caretRange.getClientRects()).filter((rect) => rect.width || rect.height)
    if (caretRects.length) {
      return caretRects[caretRects.length - 1]
    }

    const caretRect = caretRange.getBoundingClientRect()
    if (caretRect.width || caretRect.height) {
      return caretRect
    }
  } catch {
    // Fall back to the full selection rect below.
  }

  return null
}

function clearSelectionState() {
  googleDocsSelectionIntentUntil = 0
  state.selectedText = ""
  state.transformedText = ""
  resetStreamRenderingState()
  state.resultSourceText = ""
  state.currentAction = null
  state.hasResult = false
  state.hasManualTargetLanguageOverride = false
  state.replyDraftVisible = false
  state.selectionRange = null
  state.activeElement = null
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = null
  state.lastCompletedAction = null
  applySuggestedTargetLanguage()
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateResultVisibility()
}

function showTriggerAtRect(rect) {
  lastShownTriggerRect = new DOMRect(rect.left, rect.top, rect.width, rect.height)
  positionTrigger(rect)
  trigger.style.display = "inline-flex"
}

function finishSuccessfulApply() {
  void trackEvent("result_applied", {
    success: true,
    durationMs: state.lastTransformMetrics?.totalMs,
    properties: {
      resultLength: previewField.value.length
    }
  })
  setStatus(t("replaced"), false)
  clearSelectionState()
  hidePanel()
  hideTrigger()
}

function findEditableContainer(node) {
  let current = node instanceof Element ? node : node?.parentElement

  while (current) {
    if (current instanceof HTMLElement && current.matches("[contenteditable=''], [contenteditable='true'], [contenteditable='plaintext-only']")) {
      return current
    }

    if (current.parentElement) {
      current = current.parentElement
      continue
    }

    const root = current.getRootNode?.()
    if (root instanceof ShadowRoot) {
      current = root.host instanceof HTMLElement ? root.host : null
      continue
    }

    current = null
  }

  return null
}

function positionTrigger(rect) {
  trigger.style.display = "inline-flex"

  const triggerRect = trigger.getBoundingClientRect()
  const triggerWidth = triggerRect.width || 68
  const triggerHeight = triggerRect.height || 32

  let left = window.scrollX + rect.right + TRIGGER_GAP
  let top = window.scrollY + rect.top - 4

  const minLeft = window.scrollX + PANEL_MARGIN
  const maxLeft = window.scrollX + window.innerWidth - triggerWidth - PANEL_MARGIN
  const minTop = window.scrollY + PANEL_MARGIN
  const maxTop = window.scrollY + window.innerHeight - triggerHeight - PANEL_MARGIN

  left = clamp(left, minLeft, maxLeft)
  top = clamp(top, minTop, maxTop)

  trigger.style.left = `${left}px`
  trigger.style.top = `${top}px`
}

function positionPanel(triggerRect) {
  const { width: panelWidth, height: panelHeight } = getPanelMetrics()

  let left = window.scrollX + triggerRect.left
  let top = window.scrollY + triggerRect.bottom + TRIGGER_GAP

  const minLeft = window.scrollX + PANEL_MARGIN
  const maxLeft = window.scrollX + window.innerWidth - panelWidth - PANEL_MARGIN
  const minTop = window.scrollY + PANEL_MARGIN
  const maxTop = window.scrollY + window.innerHeight - panelHeight - PANEL_MARGIN

  left = clamp(left, minLeft, maxLeft)

  if (top > maxTop) {
    top = window.scrollY + triggerRect.top - panelHeight - TRIGGER_GAP
  }

  top = clamp(top, minTop, maxTop)

  panel.style.left = `${left}px`
  panel.style.top = `${top}px`
}

function centerPanelInViewport() {
  const { width: panelWidth, height: panelHeight } = getPanelMetrics()

  const left = window.scrollX + Math.max(PANEL_MARGIN, (window.innerWidth - panelWidth) / 2)
  const top = window.scrollY + Math.max(PANEL_MARGIN, (window.innerHeight - panelHeight) / 2)

  panel.style.left = `${left}px`
  panel.style.top = `${top}px`
}

function ensurePanelInViewport() {
  if (panel.style.display !== "block") {
    return
  }

  const panelRect = panel.getBoundingClientRect()
  const { width: panelWidth, height: panelHeight } = getPanelMetrics()
  const minLeft = window.scrollX + PANEL_MARGIN
  const maxLeft = window.scrollX + window.innerWidth - panelWidth - PANEL_MARGIN
  const minTop = window.scrollY + PANEL_MARGIN
  const maxTop = window.scrollY + window.innerHeight - panelHeight - PANEL_MARGIN
  const currentLeft = Number.parseFloat(panel.style.left || `${window.scrollX + panelRect.left}`)
  const currentTop = Number.parseFloat(panel.style.top || `${window.scrollY + panelRect.top}`)

  panel.style.left = `${clamp(currentLeft, minLeft, maxLeft)}px`
  panel.style.top = `${clamp(currentTop, minTop, maxTop)}px`
}

function getPanelMetrics() {
  const panelRect = panel.getBoundingClientRect()

  return {
    width: panelRect.width || PANEL_WIDTH,
    height: panelRect.height || PANEL_HEIGHT
  }
}

function clamp(value, min, max) {
  if (max < min) {
    return min
  }

  return Math.min(Math.max(value, min), max)
}

async function copyTextValue(text, eventName) {
  const nextText = typeof text === "string" ? text : ""
  if (!nextText.trim()) {
    setStatus(t("nothing_copy"), true)
    return
  }

  try {
    await navigator.clipboard.writeText(nextText)
    setStatus(t("copied"), false)
    void trackEvent(eventName, {
      success: true,
      durationMs: state.lastTransformMetrics?.totalMs,
      properties: {
        resultLength: nextText.length
      }
    })
  } catch {
    setStatus(t("copy_failed"), true)
  }
}

async function submitFeedback(message) {
  await new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      type: "SUBMIT_FEEDBACK",
      payload: {
        message,
        appLanguage: state.appLanguage,
        currentAction: state.currentAction,
        targetLanguage: state.targetLanguage,
        tone: state.tone,
        browserLanguage: navigator.language || "",
        pageHost: window.location.hostname || "",
        selectionKind: state.selectionKind,
        extensionVersion: chrome.runtime.getManifest().version
      }
    }, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message))
        return
      }

      if (!response?.ok) {
        reject(new Error(response?.error || "Feedback request failed"))
        return
      }

      resolve(response.result)
    })
  })
}

async function trackEvent(eventName, options = {}) {
  try {
    await new Promise((resolve) => {
      chrome.runtime.sendMessage({
        type: "TRACK_EVENT",
        payload: {
          event_name: eventName,
          session_id: state.analyticsSessionId,
          page_host: window.location.hostname || "",
          action: options.action ?? state.currentAction,
          selection_kind: state.selectionKind,
          success: typeof options.success === "boolean" ? options.success : null,
          duration_ms: options.durationMs ?? null,
          error_code: options.errorCode ?? null,
          error_message: options.errorMessage ?? null,
          properties: options.properties || null
        }
      }, () => {
        resolve()
      })
    })
  } catch {
    // Ignore analytics failures so the editor stays responsive.
  }
}

function updateActionAvailability() {
  const canApply = state.selectionKind === "input" || state.selectionKind === "contenteditable"
  const isLoading = state.isLoading
  const hasReplyDraft = Boolean(getNormalizedReplyDraft())
  const hasPreviewText = Boolean(previewField.value)
  applyButton.disabled = isLoading || !canApply
  applyButton.hidden = !canApply
  previewCopyButton.disabled = isLoading || !hasPreviewText
  previewCopyButton.hidden = !hasPreviewText
  replyDraftCopyButton.disabled = isLoading || !hasReplyDraft
  replyDraftCopyButton.hidden = !hasReplyDraft
  replyTranslateButton.disabled = isLoading || !hasReplyDraft
}

function getReadyMessage() {
  return t("ready")
}

function getLoadingMessage(action) {
  if (action && getUiStrings()?.[`loading_${action}`]) {
    return t(`loading_${action}`)
  }

  return t("working")
}

function setLoaderMessage(action) {
  loaderText.textContent = getLoadingMessage(action)
}

function buildClientTransformMetrics(metrics) {
  const totalMs = performance.now() - state.transformStartedAt
  const firstChunkMs = state.firstStreamChunkAt
    ? state.firstStreamChunkAt - state.transformStartedAt
    : 0

  return {
    totalMs: roundDuration(totalMs),
    firstChunkMs: roundDuration(firstChunkMs),
    stages: metrics || null
  }
}

function logTransformMetrics(metrics) {
  if (!metrics) {
    return
  }

  console.info("[AI Writer] Client transform metrics", metrics)
}

function getResultMessage() {
  return ""
}

function roundDuration(value) {
  return Number((Number(value) || 0).toFixed(1))
}

function syncCorrespondenceLanguage(action, result) {
  if (action !== "translate") {
    return
  }

  const sourceLanguage = typeof result?.sourceLanguage === "string" ? result.sourceLanguage : ""
  const inferredSourceLanguage = inferCorrespondenceLanguageFromText(state.resultSourceText || state.selectedText)
  const correspondenceLanguage = normalizeCorrespondenceLanguage(inferredSourceLanguage || sourceLanguage)
  if (correspondenceLanguage) {
    saveCorrespondenceLanguageForCurrentHost(correspondenceLanguage)
  }
}

function normalizeCorrespondenceLanguage(language) {
  return POPULAR_LANGUAGES.includes(language) ? language : ""
}

function applyTranslations() {
  translateLabel.textContent = t("translate_to")
  toneLabel.textContent = t("tone_to")
  refreshLanguageSelectOptions()
  toneSelect.innerHTML = renderToneOptions()
  toneSelect.value = state.tone
  onboardingBadge.textContent = t("onboarding_badge")
  onboardingGuideSkipButton.textContent = t("onboarding_button_skip")
  languagePromptTitle.textContent = t("language_prompt_title")
  languagePromptText.textContent = t("language_prompt_text")
  languagePromptSaveButton.textContent = t("language_prompt_save")
  languagePromptLaterButton.textContent = t("language_prompt_later")
  previewField.placeholder = t("result_placeholder")
  previewCopyButton.setAttribute("aria-label", t("copy"))
  previewCopyButton.setAttribute("title", t("copy"))
  replyDraftCopyButton.setAttribute("aria-label", t("copy"))
  replyDraftCopyButton.setAttribute("title", t("copy"))
  const replyDraftLabel = panel.querySelector('label[for="ai-writer-mvp-reply-draft"]')
  if (replyDraftLabel) {
    replyDraftLabel.textContent = t("reply_draft")
  }
  replyDraftField.placeholder = t("reply_placeholder")
  feedbackFabButton.setAttribute("aria-label", t("leave_feedback"))
  feedbackFabButton.setAttribute("title", t("leave_feedback"))
  setLoaderMessage(state.currentAction)
  applyButton.textContent = t("replace_text")
  replyToggleButton.textContent = getReplyToggleLabel()
  replyTranslateButton.textContent = t("action_translate")
  buyCreditsButton.textContent = t("buy_credits")
  openFeedbackButton.textContent = t("leave_feedback")
  buyPlaceholder.textContent = t("model_buy_next")
  feedbackText.placeholder = t("feedback_placeholder")
  sendFeedbackButton.textContent = t("send_feedback")
  limitCloseButton.textContent = t("close")
  closeButton.setAttribute("aria-label", t("close"))
  const appLanguage = getCurrentAppLanguageConfig()
  appLanguageFlag.textContent = getFlagEmoji(appLanguage.flag)
  appLanguageButton.setAttribute("aria-label", `App language: ${appLanguage.label}`)
  appLanguageOptions.forEach((button) => {
    const value = button.getAttribute("data-app-language")
    const isSelected = value === state.appLanguage
    button.classList.toggle("is-selected", isSelected)
    button.setAttribute("aria-pressed", String(isSelected))
  })
  actionButtons.forEach((button) => {
    const action = button.getAttribute("data-action")
    if (!action) {
      return
    }

    button.textContent = t(`action_${action}`)
  })
  syncOnboardingVisibility()
  updateInlineTip()
  updateLanguageHint()
  if (!limitModal.hidden) {
    const currentLimitText = limitText.textContent.match(/\d+/)
    const limit = currentLimitText ? Number(currentLimitText[0]) : 20
    limitTitle.textContent = t("daily_limit_title")
    limitText.textContent = t("daily_limit_text", { limit })
  }
}
