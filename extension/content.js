const DEFAULT_TARGET_LANGUAGE = "Spanish"
const LANGUAGE_PREFERENCE_KEY = "preferredTargetLanguage"
const APP_LANGUAGE_STORAGE_KEY = "appLanguage"
const RUSSIAN_LANGUAGE = "Russian"
const DEFAULT_MODEL_TIER = "nano"
const DEFAULT_APP_LANGUAGE = "en"
const DEFAULT_TONE = "professional"
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
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "confident", label: "Confident" },
  { value: "warm", label: "Warm" },
  { value: "shorter", label: "Shorter" }
]
const INLINE_TIPS = [
  "Use Grammar first if you want a cleaner draft before translation.",
  "Tone is helpful when the meaning is right but the message feels off.",
  "Replace text works best in chat boxes, email composers, and form fields.",
  "Translate remembers the other person's language after incoming messages."
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
    result: "Result",
    result_placeholder: "Result will appear here",
    copy: "Copy",
    replace_text: "Replace text",
    tip_label: "Tip",
    daily_limit_title: "Daily free limit reached",
    daily_limit_text: "You have used all {limit} free results for today.",
    buy_credits: "Buy access for $2",
    leave_feedback: "Leave feedback",
    feedback_placeholder: "Tell us what is missing or what makes the extension hard to use",
    send_feedback: "Send feedback",
    close: "Close",
    model_help: "This is the model choice. Mini usually answers faster, but it is about 5x more expensive by token limits.",
    language_help: "Pick your main correspondence language here. Russian text will suggest that language, and other languages will suggest Russian.",
    model_buy_next: "Thanks for your interest. This $2 access flow is not live yet, and no money has been charged. I will count this click as purchase intent for the upcoming paid option.",
    feedback_saved: "Thanks, your feedback was sent.",
    feedback_failed: "Feedback could not be sent yet. Please check the feedback webhook setup.",
    no_text: "No text selected.",
    working: "Working on it...",
    nothing_apply: "Nothing to apply yet.",
    unsupported_field: "This field is not supported yet.",
    copied: "Result copied.",
    copy_failed: "Copy failed. Please copy the text manually.",
    nothing_copy: "Nothing to copy yet.",
    replaced: "Text replaced.",
    ready: "",
    done_page: "Done. Review the result below and copy it if needed.",
    done_editable: "Done. Review the result below and click Replace text if it looks right.",
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  es: {
    title: "Herramientas de escritura con IA",
    action_translate: "Traducir",
    action_grammar: "Gramatica",
    action_improve: "Mejorar",
    translate_to: "Traducir a",
    result: "Resultado",
    result_placeholder: "El resultado aparecera aqui",
    copy: "Copiar",
    replace_text: "Reemplazar texto",
    daily_limit_title: "Limite diario gratuito alcanzado",
    daily_limit_text: "Has usado los {limit} resultados gratuitos de hoy.",
    buy_credits: "Comprar creditos",
    connect_provider: "Conectar proveedor de IA",
    leave_feedback: "Dejar feedback",
    feedback_placeholder: "Cuentanos que falta o que dificulta usar la extension",
    send_feedback: "Enviar feedback",
    close: "Cerrar",
    model_help: "Esta es la eleccion del modelo. Mini suele responder mas rapido, pero cuesta unas 5 veces mas por limites de tokens.",
    language_help: "Elige aqui tu idioma principal de correspondencia. El texto en ruso sugerira ese idioma y otros idiomas sugeriran ruso.",
    model_buy_next: "El onboarding de creditos sera el siguiente paso.",
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
    translate_to: "Ubersetzen in",
    result: "Ergebnis",
    result_placeholder: "Das Ergebnis erscheint hier",
    copy: "Kopieren",
    replace_text: "Text ersetzen",
    daily_limit_title: "Tagliches Freikontingent erreicht",
    daily_limit_text: "Du hast heute alle {limit} kostenlosen Ergebnisse genutzt.",
    buy_credits: "Credits kaufen",
    connect_provider: "KI-Anbieter verbinden",
    leave_feedback: "Feedback senden",
    feedback_placeholder: "Sag uns, was fehlt oder was die Nutzung erschwert",
    send_feedback: "Feedback senden",
    close: "Schliessen",
    model_help: "Das ist die Modellauswahl. Mini antwortet meist schneller, kostet aber etwa 5x mehr nach Token-Limits.",
    language_help: "Wahle hier deine Hauptsprache fur Korrespondenz. Russischer Text schlagt diese Sprache vor, andere Sprachen schlagen Russisch vor.",
    model_buy_next: "Das Credits-Onboarding ist der nachste Schritt.",
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
    translate_to: "Traduire en",
    result: "Resultat",
    result_placeholder: "Le resultat apparaitra ici",
    copy: "Copier",
    replace_text: "Remplacer le texte",
    daily_limit_title: "Limite quotidienne gratuite atteinte",
    daily_limit_text: "Vous avez utilise les {limit} resultats gratuits d'aujourd'hui.",
    buy_credits: "Acheter des credits",
    connect_provider: "Connecter un fournisseur IA",
    leave_feedback: "Laisser un retour",
    feedback_placeholder: "Dites-nous ce qui manque ou ce qui rend l'extension difficile a utiliser",
    send_feedback: "Envoyer le retour",
    close: "Fermer",
    model_help: "Ceci est le choix du modele. Mini repond generalement plus vite, mais coute environ 5x plus selon les limites de tokens.",
    language_help: "Choisissez ici votre langue principale de correspondance. Le texte russe suggerera cette langue, et les autres langues suggereront le russe.",
    model_buy_next: "L'onboarding des credits sera la prochaine etape.",
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
    translate_to: "Traduzir para",
    result: "Resultado",
    result_placeholder: "O resultado aparecera aqui",
    copy: "Copiar",
    replace_text: "Substituir texto",
    daily_limit_title: "Limite diario gratuito atingido",
    daily_limit_text: "Voce usou todos os {limit} resultados gratuitos de hoje.",
    buy_credits: "Comprar creditos",
    connect_provider: "Conectar provedor de IA",
    leave_feedback: "Deixar feedback",
    feedback_placeholder: "Conte o que esta faltando ou o que dificulta usar a extensao",
    send_feedback: "Enviar feedback",
    close: "Fechar",
    model_help: "Esta e a escolha do modelo. Mini geralmente responde mais rapido, mas custa cerca de 5x mais nos limites de tokens.",
    language_help: "Escolha aqui seu idioma principal de correspondencia. Texto em russo sugerira esse idioma, e outros idiomas sugerirao russo.",
    model_buy_next: "O onboarding de creditos sera o proximo passo.",
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
    translate_to: "翻訳先",
    result: "結果",
    result_placeholder: "ここに結果が表示されます",
    copy: "コピー",
    replace_text: "テキストを置換",
    daily_limit_title: "本日の無料上限に達しました",
    daily_limit_text: "本日の無料結果 {limit} 件をすべて使い切りました。",
    buy_credits: "クレジットを購入",
    connect_provider: "AIプロバイダーを接続",
    leave_feedback: "フィードバックを送る",
    feedback_placeholder: "足りない点や使いにくい点を教えてください",
    send_feedback: "フィードバックを送信",
    close: "閉じる",
    model_help: "これはモデルの選択です。Mini は通常より速く応答しますが、トークン上限の消費は約 5 倍です。",
    language_help: "ここで主にやり取りする言語を選びます。ロシア語のテキストではその言語が提案され、それ以外の言語ではロシア語が提案されます。",
    model_buy_next: "クレジット購入のオンボーディングは次のステップです。",
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
    translate_to: "번역할 언어",
    result: "결과",
    result_placeholder: "여기에 결과가 표시됩니다",
    copy: "복사",
    replace_text: "텍스트 바꾸기",
    daily_limit_title: "오늘의 무료 한도에 도달했습니다",
    daily_limit_text: "오늘 무료 결과 {limit}개를 모두 사용했습니다.",
    buy_credits: "크레딧 구매",
    connect_provider: "AI 제공업체 연결",
    leave_feedback: "피드백 남기기",
    feedback_placeholder: "무엇이 부족한지 또는 무엇이 사용을 어렵게 하는지 알려주세요",
    send_feedback: "피드백 보내기",
    close: "닫기",
    model_help: "이것은 모델 선택입니다. Mini는 보통 더 빠르게 응답하지만 토큰 한도 기준으로 약 5배 더 비쌉니다.",
    language_help: "여기에서 주요 대화 언어를 선택하세요. 러시아어 텍스트는 그 언어를 추천하고, 다른 언어 텍스트는 러시아어를 추천합니다.",
    model_buy_next: "크레딧 온보딩은 다음 단계로 추가됩니다.",
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
    translate_to: "翻译为",
    result: "结果",
    result_placeholder: "结果会显示在这里",
    copy: "复制",
    replace_text: "替换文本",
    daily_limit_title: "今日免费额度已用完",
    daily_limit_text: "你今天已经用完了全部 {limit} 次免费结果。",
    buy_credits: "购买额度",
    connect_provider: "连接 AI 提供商",
    leave_feedback: "留下反馈",
    feedback_placeholder: "告诉我们缺少什么，或者是什么让扩展难以使用",
    send_feedback: "发送反馈",
    close: "关闭",
    model_help: "这是模型选择。Mini 通常响应更快，但按 token 限额计算大约贵 5 倍。",
    language_help: "在这里选择你的主要沟通语言。俄语文本会建议该语言，其他语言文本会建议俄语。",
    model_buy_next: "购买额度的引导将是下一步。",
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
    translate_to: "Перевести на",
    result: "Результат",
    result_placeholder: "Результат появится здесь",
    copy: "Копировать",
    replace_text: "Заменить текст",
    daily_limit_title: "Дневной бесплатный лимит исчерпан",
    daily_limit_text: "Вы использовали все {limit} бесплатных результатов на сегодня.",
    buy_credits: "Купить лимиты",
    connect_provider: "Подключить AI-провайдера",
    leave_feedback: "Оставить фидбек",
    feedback_placeholder: "Расскажите, чего не хватает или что мешает пользоваться расширением",
    send_feedback: "Отправить фидбек",
    close: "Закрыть",
    model_help: "Это выбор модели. Mini обычно отвечает быстрее, но примерно в 5 раз дороже по токенным лимитам.",
    language_help: "Здесь выбери основной язык переписки. Для русского текста будет предлагаться этот язык, а для других языков будет предлагаться русский.",
    model_buy_next: "Онбординг покупки лимитов будет следующим шагом.",
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
    auto_to_russian: "",
    auto_to_preferred: ""
  },
  uk: {
    title: "AI-інструменти для тексту",
    action_translate: "Переклад",
    action_grammar: "Граматика",
    action_improve: "Покращити",
    translate_to: "Перекласти на",
    result: "Результат",
    result_placeholder: "Результат з'явиться тут",
    copy: "Копіювати",
    replace_text: "Замінити текст",
    daily_limit_title: "Денний безкоштовний ліміт вичерпано",
    daily_limit_text: "Ви використали всі {limit} безкоштовних результатів на сьогодні.",
    buy_credits: "Купити ліміти",
    connect_provider: "Підключити AI-провайдера",
    leave_feedback: "Залишити фідбек",
    feedback_placeholder: "Розкажіть, чого бракує або що заважає користуватися розширенням",
    send_feedback: "Надіслати фідбек",
    close: "Закрити",
    model_help: "Це вибір моделі. Mini зазвичай відповідає швидше, але приблизно у 5 разів дорожча за токенними лімітами.",
    language_help: "Тут обери основну мову листування. Для російського тексту буде пропонуватися ця мова, а для інших мов буде пропонуватися російська.",
    model_buy_next: "Онбординг покупки лімітів буде наступним кроком.",
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
  transformedText: "",
  preferredTargetLanguage: DEFAULT_TARGET_LANGUAGE,
  targetLanguage: DEFAULT_TARGET_LANGUAGE,
  appLanguage: DEFAULT_APP_LANGUAGE,
  modelTier: DEFAULT_MODEL_TIER,
  tone: DEFAULT_TONE,
  currentAction: null,
  hasResult: false,
  selectionRange: null,
  activeElement: null,
  inputSelectionStart: null,
  inputSelectionEnd: null,
  selectionKind: null,
  status: "idle"
}

const PANEL_WIDTH = 360
const PANEL_MARGIN = 12
const TRIGGER_GAP = 8

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
    return `<option value="${tone.value}"${selected}>${tone.label}</option>`
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
trigger.textContent = "AI edit"

const panel = document.createElement("div")
panel.id = "ai-writer-mvp-panel"
panel.innerHTML = `
  <div class="ai-writer-mvp-header">
    <span class="ai-writer-mvp-title">AI Writing Tools</span>
    <div class="ai-writer-mvp-header-controls">
      <div class="ai-writer-mvp-app-language-picker">
        <button type="button" id="ai-writer-mvp-app-language-button" class="ai-writer-mvp-icon-button" aria-label="App language">
          <span id="ai-writer-mvp-app-language-flag"></span>
        </button>
        <div id="ai-writer-mvp-app-language-menu" class="ai-writer-mvp-app-language-menu" hidden>
          ${renderAppLanguageMenu()}
        </div>
      </div>
      <div class="ai-writer-mvp-inline-control ai-writer-mvp-inline-control-compact">
        <select id="ai-writer-mvp-model" aria-label="Model choice">
          <option value="nano">Nano</option>
          <option value="mini">Mini</option>
        </select>
        <button
          type="button"
          class="ai-writer-mvp-info-button"
          aria-label="Model speed help"
          data-help-target="model"
        >
          i
        </button>
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
        i
      </button>
    </div>
    <select id="ai-writer-mvp-language">${renderLanguageOptions()}</select>
    <div id="ai-writer-mvp-language-hint" class="ai-writer-mvp-language-hint"></div>
    </div>
  </div>
  <div id="ai-writer-mvp-tone-row" class="ai-writer-mvp-row">
    <div id="ai-writer-mvp-tone-section">
      <div class="ai-writer-mvp-label-row">
        <label class="ai-writer-mvp-label" for="ai-writer-mvp-tone">Change tone to</label>
      </div>
      <select id="ai-writer-mvp-tone">${renderToneOptions()}</select>
    </div>
  </div>
  <div id="ai-writer-mvp-inline-tip" class="ai-writer-mvp-inline-tip" hidden></div>
  <div id="ai-writer-mvp-result-section" class="ai-writer-mvp-row">
    <span class="ai-writer-mvp-label">Result</span>
    <div class="ai-writer-mvp-result-wrap">
      <textarea class="ai-writer-mvp-preview" id="ai-writer-mvp-preview" placeholder="Result will appear here"></textarea>
      <div id="ai-writer-mvp-loader" class="ai-writer-mvp-loader" hidden>
        <div class="ai-writer-mvp-pixel-stage">
          <div class="ai-writer-mvp-pixel-dancer">
            <span class="ai-writer-mvp-pixel-head"></span>
            <span class="ai-writer-mvp-pixel-torso"></span>
            <span class="ai-writer-mvp-pixel-arm ai-writer-mvp-pixel-arm-left"></span>
            <span class="ai-writer-mvp-pixel-arm ai-writer-mvp-pixel-arm-right"></span>
            <span class="ai-writer-mvp-pixel-leg ai-writer-mvp-pixel-leg-left"></span>
            <span class="ai-writer-mvp-pixel-leg ai-writer-mvp-pixel-leg-right"></span>
          </div>
        </div>
        <div class="ai-writer-mvp-loader-text">I'm already coming, yeah, baby.</div>
      </div>
    </div>
  </div>
  <div id="ai-writer-mvp-status" class="ai-writer-mvp-status"></div>
  <div id="ai-writer-mvp-footer" class="ai-writer-mvp-footer">
    <button type="button" id="ai-writer-mvp-copy">Copy</button>
    <button type="button" id="ai-writer-mvp-apply">Replace text</button>
  </div>
`

document.documentElement.append(trigger, panel)

const helpPopover = document.createElement("div")
helpPopover.id = "ai-writer-mvp-help-popover"
helpPopover.className = "ai-writer-mvp-help-popover"
helpPopover.hidden = true
document.documentElement.append(helpPopover)

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
const appLanguageButton = panel.querySelector("#ai-writer-mvp-app-language-button")
const appLanguageFlag = panel.querySelector("#ai-writer-mvp-app-language-flag")
const appLanguageMenu = panel.querySelector("#ai-writer-mvp-app-language-menu")
const appLanguageOptions = panel.querySelectorAll("[data-app-language]")
const modelSelect = panel.querySelector("#ai-writer-mvp-model")
const languageHint = panel.querySelector("#ai-writer-mvp-language-hint")
const inlineTip = panel.querySelector("#ai-writer-mvp-inline-tip")
const resultSection = panel.querySelector("#ai-writer-mvp-result-section")
const previewField = panel.querySelector("#ai-writer-mvp-preview")
const loader = panel.querySelector("#ai-writer-mvp-loader")
const loaderText = panel.querySelector(".ai-writer-mvp-loader-text")
const statusField = panel.querySelector("#ai-writer-mvp-status")
const footer = panel.querySelector("#ai-writer-mvp-footer")
const applyButton = panel.querySelector("#ai-writer-mvp-apply")
const closeButton = panel.querySelector("#ai-writer-mvp-close")
const copyButton = panel.querySelector("#ai-writer-mvp-copy")
const titleField = panel.querySelector(".ai-writer-mvp-title")
const translateLabel = panel.querySelector("label[for='ai-writer-mvp-language']")
const toneLabel = panel.querySelector("label[for='ai-writer-mvp-tone']")
const resultLabel = panel.querySelector("#ai-writer-mvp-result-section .ai-writer-mvp-label")
const limitText = limitModal.querySelector("#ai-writer-mvp-limit-text")
const limitTitle = limitModal.querySelector("h3")
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
modelSelect.value = state.modelTier
toneSelect.value = state.tone
applyTranslations()
updateLanguageHint()
updateTranslateSectionVisibility()
updateToneSectionVisibility()
updateResultVisibility()
setStatus("", false)
void loadAppLanguagePreference()
void loadLanguagePreference()

document.addEventListener("mouseup", handleSelectionChange)
document.addEventListener("keyup", handleSelectionChange)
document.addEventListener("keydown", handleDebugShortcuts)
document.addEventListener("mousedown", handleOutsideClick)
window.addEventListener("resize", syncLimitModalToPanel)
trigger.addEventListener("click", openPanel)
appLanguageButton.addEventListener("click", () => {
  const nextHidden = !appLanguageMenu.hidden
  appLanguageMenu.hidden = nextHidden
})
appLanguageOptions.forEach((button) => {
  button.addEventListener("click", () => {
    state.appLanguage = button.getAttribute("data-app-language") || DEFAULT_APP_LANGUAGE
    appLanguageMenu.hidden = true
  saveAppLanguagePreference(state.appLanguage)
  applyTranslations()
  })
})
modelSelect.addEventListener("change", () => {
  state.modelTier = modelSelect.value
})
languageSelect.addEventListener("change", () => {
  state.targetLanguage = languageSelect.value
  if (state.targetLanguage !== RUSSIAN_LANGUAGE) {
    state.preferredTargetLanguage = state.targetLanguage
    saveLanguagePreference(state.preferredTargetLanguage)
  }
  updateLanguageHint()
})
toneSelect.addEventListener("change", () => {
  state.tone = toneSelect.value
})
closeButton.addEventListener("click", hidePanel)
applyButton.addEventListener("click", applyTransformedText)
copyButton.addEventListener("click", () => {
  void copyResult()
})
buyCreditsButton.addEventListener("click", () => {
  feedbackBox.hidden = true
  buyBox.hidden = false
  buyPlaceholder.textContent = t("model_buy_next")
  panel.classList.add("ai-writer-mvp-panel-limit-expanded")
  centerPanelInViewport()
  syncLimitModalToPanel()
})
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
    updateTranslateSectionVisibility()
    updateToneSectionVisibility()
    updateInlineTip()
    void requestTransform(action)
  })
})

function handleSelectionChange() {
  window.setTimeout(() => {
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

    if (panel.style.display === "block" && state.selectedText) {
      return
    }

    clearSelectionState()
    hideTrigger()
  }, 10)
}

function handleDebugShortcuts(event) {
  if (event.metaKey && event.shiftKey && event.key.toLowerCase() === "l") {
    event.preventDefault()
    openLimitPreview()
    return
  }

  if (event.metaKey && event.shiftKey && event.key === "0") {
    event.preventDefault()
    void resetDailyLimit()
  }
}

function openPanel() {
  if (!state.selectedText) {
    return
  }

  const triggerRect = trigger.getBoundingClientRect()
  panel.style.display = "block"
  positionPanel(triggerRect)
  previewField.value = state.transformedText || state.selectedText
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateInlineTip()
  updateResultVisibility()
  updateActionAvailability()
  ensurePanelInViewport()
  setStatus("", false)
}

function openLimitPreview() {
  panel.style.display = "block"
  centerPanelInViewport()
  setStatus("", false)
  state.hasResult = false
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateInlineTip()
  updateResultVisibility()
  showLimitModal({
    limit: 20,
    count: 20
  })
}

function hideTrigger() {
  trigger.style.display = "none"
}

function hidePanel() {
  hideHelpPopover()
  hideLimitModal()
  appLanguageMenu.hidden = true
  panel.style.display = "none"
  updateActionAvailability()
}

function handleOutsideClick(event) {
  const target = event.target

  if (panel.contains(target) || trigger.contains(target) || limitModal.contains(target)) {
    return
  }

  hideHelpPopover()
  hidePanel()
}

async function requestTransform(action) {
  if (!state.selectedText) {
    setStatus(t("no_text"), true)
    return
  }

  previewField.value = ""
  state.hasResult = false
  setLoading(true)
  setStatus("", false)

  chrome.runtime.sendMessage(
    {
      type: "AI_TRANSFORM",
      payload: {
        action,
        text: state.selectedText,
        targetLanguage: state.targetLanguage,
        tone: state.tone,
        modelTier: state.modelTier
      }
    },
    (response) => {
      setLoading(false)

      if (chrome.runtime.lastError) {
        setStatus(chrome.runtime.lastError.message, true)
        return
      }

      if (!response?.ok) {
        if (response?.code === "DAILY_LIMIT_REACHED") {
          showLimitModal(response?.details)
          setStatus("", false)
          return
        }

        setStatus(response?.error || "Request failed.", true)
        return
      }

      state.transformedText = response.result.text
      syncCorrespondenceLanguage(action, response.result)
      state.hasResult = true
      previewField.value = state.transformedText
      updateResultVisibility()
      updateActionAvailability()
      setStatus(getResultMessage(), false)
    }
  )
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
  loader.hidden = !isLoading
  previewField.classList.toggle("ai-writer-mvp-preview-loading", isLoading)
  actionButtons.forEach((button) => {
    button.disabled = isLoading
  })
  modelSelect.disabled = isLoading
  languageSelect.disabled = isLoading
  toneSelect.disabled = isLoading
  closeButton.disabled = isLoading
  updateResultVisibility()
  updateActionAvailability()
  ensurePanelInViewport()
}

function showLimitModal(details) {
  const limit = Number(details?.limit || 20)
  limitTitle.textContent = t("daily_limit_title")
  limitText.textContent = t("daily_limit_text", { limit })
  panel.classList.add("ai-writer-mvp-panel-limit-open")
  centerPanelInViewport()
  limitModal.hidden = false
  syncLimitModalToPanel()
}

function hideLimitModal() {
  panel.classList.remove("ai-writer-mvp-panel-limit-open")
  panel.classList.remove("ai-writer-mvp-panel-limit-expanded")
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
    const selected = language === DEFAULT_TARGET_LANGUAGE ? " selected" : ""
    return `<option${selected}>${language}</option>`
  }).join("")
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

function saveAppLanguagePreference(language) {
  void chrome.storage.local.set({
    [APP_LANGUAGE_STORAGE_KEY]: language
  })
}

async function loadLanguagePreference() {
  try {
    const result = await chrome.storage.local.get(LANGUAGE_PREFERENCE_KEY)
    const savedLanguage = result?.[LANGUAGE_PREFERENCE_KEY]

    if (typeof savedLanguage !== "string" || !POPULAR_LANGUAGES.includes(savedLanguage)) {
      applySuggestedTargetLanguage()
      return
    }

    state.preferredTargetLanguage = savedLanguage
    applySuggestedTargetLanguage()
  } catch {
    applySuggestedTargetLanguage()
  }
}

function saveLanguagePreference(language) {
  void chrome.storage.local.set({
    [LANGUAGE_PREFERENCE_KEY]: language
  })
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

async function resetDailyLimit() {
  try {
    await chrome.storage.local.remove("dailyFreeUsage")
    hideLimitModal()
    setStatus("Admin: daily limit reset.", false)
  } catch {
    setStatus("Admin reset failed.", true)
  }
}

function getHelpContent(target) {
  if (target === "model") {
    return t("model_help")
  }

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
  const shouldShow = !loader.hidden || state.hasResult

  if (resultSection) {
    resultSection.style.display = shouldShow ? "block" : "none"
  }

  if (footer) {
    footer.style.display = shouldShow ? "flex" : "none"
  }

  ensurePanelInViewport()
}

function applySuggestedTargetLanguage() {
  state.targetLanguage = suggestTargetLanguage(state.selectedText)
  languageSelect.value = state.targetLanguage
  updateLanguageHint()
}

function suggestTargetLanguage(text) {
  if (looksLikeRussianText(text)) {
    return state.preferredTargetLanguage
  }

  return RUSSIAN_LANGUAGE
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
    return "Try Tone when the meaning is right but the wording feels too harsh, too dry, or too long."
  }

  if (state.currentAction === "translate" && looksLikeRussianText(state.selectedText)) {
    return "After an incoming message is translated to Russian, the reply language is remembered automatically."
  }

  if (state.selectionKind === "page") {
    return "On regular page text, Copy is the safest way to reuse the result."
  }

  return INLINE_TIPS[Math.floor(Math.random() * INLINE_TIPS.length)]
}

function readInputSelection(element) {
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

  const rect = element.getBoundingClientRect()

  return {
    kind: "input",
    activeElement: element,
    selectedText,
    start,
    end,
    rect
  }
}

function readEditableSelection() {
  const selection = window.getSelection()
  const text = selection ? selection.toString() : ""

  if (!selection || !text.trim() || selection.rangeCount === 0) {
    return null
  }

  const range = selection.getRangeAt(0)
  const editableElement = findEditableContainer(range.commonAncestorContainer)
  if (!editableElement) {
    return null
  }

  const rect = range.getBoundingClientRect()

  if (!rect.width && !rect.height) {
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

  const rect = range.getBoundingClientRect()
  if (!rect.width && !rect.height) {
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
  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = selection.activeElement
  state.inputSelectionStart = selection.start
  state.inputSelectionEnd = selection.end
  state.selectionRange = null
  state.selectionKind = selection.kind
  applySuggestedTargetLanguage()
}

function rememberEditableSelection(selection) {
  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = selection.activeElement
  state.selectionRange = selection.range
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = selection.kind
  applySuggestedTargetLanguage()
}

function rememberPageSelection(selection) {
  state.selectedText = selection.selectedText
  state.transformedText = ""
  state.activeElement = null
  state.selectionRange = null
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = selection.kind
  applySuggestedTargetLanguage()
}

function clearSelectionState() {
  state.selectedText = ""
  state.transformedText = ""
  state.currentAction = null
  state.hasResult = false
  state.selectionRange = null
  state.activeElement = null
  state.inputSelectionStart = null
  state.inputSelectionEnd = null
  state.selectionKind = null
  applySuggestedTargetLanguage()
  updateTranslateSectionVisibility()
  updateToneSectionVisibility()
  updateResultVisibility()
}

function showTriggerAtRect(rect) {
  positionTrigger(rect)
  trigger.style.display = "block"
}

function finishSuccessfulApply() {
  setStatus(t("replaced"), false)
  clearSelectionState()
  hidePanel()
  hideTrigger()
}

function findEditableContainer(node) {
  const element = node instanceof Element ? node : node?.parentElement
  if (!element) {
    return null
  }

  const editable = element.closest("[contenteditable=''], [contenteditable='true'], [contenteditable='plaintext-only']")
  return editable instanceof HTMLElement ? editable : null
}

function positionTrigger(rect) {
  trigger.style.display = "block"

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
  const panelRect = panel.getBoundingClientRect()
  const panelWidth = panelRect.width || PANEL_WIDTH
  const panelHeight = panelRect.height || 260

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
  const panelRect = panel.getBoundingClientRect()
  const panelWidth = panelRect.width || PANEL_WIDTH
  const panelHeight = panelRect.height || 360

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
  const panelWidth = panelRect.width || PANEL_WIDTH
  const panelHeight = panelRect.height || 360
  const minLeft = window.scrollX + PANEL_MARGIN
  const maxLeft = window.scrollX + window.innerWidth - panelWidth - PANEL_MARGIN
  const minTop = window.scrollY + PANEL_MARGIN
  const maxTop = window.scrollY + window.innerHeight - panelHeight - PANEL_MARGIN
  const currentLeft = Number.parseFloat(panel.style.left || `${window.scrollX + panelRect.left}`)
  const currentTop = Number.parseFloat(panel.style.top || `${window.scrollY + panelRect.top}`)

  panel.style.left = `${clamp(currentLeft, minLeft, maxLeft)}px`
  panel.style.top = `${clamp(currentTop, minTop, maxTop)}px`
}

function clamp(value, min, max) {
  if (max < min) {
    return min
  }

  return Math.min(Math.max(value, min), max)
}

async function copyResult() {
  const nextText = previewField.value
  if (!nextText) {
    setStatus(t("nothing_copy"), true)
    return
  }

  try {
    await navigator.clipboard.writeText(nextText)
    setStatus(t("copied"), false)
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
        modelTier: state.modelTier,
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

function updateActionAvailability() {
  const canApply = state.selectionKind === "input" || state.selectionKind === "contenteditable"
  const isLoading = !loader.hidden
  applyButton.disabled = isLoading || !canApply
  copyButton.disabled = isLoading || !previewField.value
}

function getReadyMessage() {
  return t("ready")
}

function getResultMessage() {
  if (state.selectionKind === "page") {
    return t("done_page")
  }

  return t("done_editable")
}

function syncCorrespondenceLanguage(action, result) {
  if (action !== "translate") {
    return
  }

  const sourceLanguage = typeof result?.sourceLanguage === "string" ? result.sourceLanguage : ""
  const targetLanguage = typeof result?.targetLanguage === "string" ? result.targetLanguage : state.targetLanguage

  if (sourceLanguage && sourceLanguage !== RUSSIAN_LANGUAGE && targetLanguage === RUSSIAN_LANGUAGE) {
    state.preferredTargetLanguage = sourceLanguage
    saveLanguagePreference(sourceLanguage)
    return
  }

  if (targetLanguage && targetLanguage !== RUSSIAN_LANGUAGE && looksLikeRussianText(state.selectedText)) {
    state.preferredTargetLanguage = targetLanguage
    saveLanguagePreference(targetLanguage)
  }
}

function applyTranslations() {
  titleField.textContent = t("title")
  translateLabel.textContent = t("translate_to")
  toneLabel.textContent = t("tone_to")
  resultLabel.textContent = t("result")
  previewField.placeholder = t("result_placeholder")
  loaderText.textContent = "I'm already coming, yeah, baby."
  copyButton.textContent = t("copy")
  applyButton.textContent = t("replace_text")
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
  modelSelect.setAttribute("aria-label", "Model choice")
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
  updateInlineTip()
  updateLanguageHint()
  if (!limitModal.hidden) {
    const currentLimitText = limitText.textContent.match(/\d+/)
    const limit = currentLimitText ? Number(currentLimitText[0]) : 20
    limitTitle.textContent = t("daily_limit_title")
    limitText.textContent = t("daily_limit_text", { limit })
  }
}
