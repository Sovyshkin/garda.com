// src/i18n/index.js
import { createI18n } from "vue-i18n";

const messages = {
  RU: {
    contacts: 'Контакты',
    blog: 'Блог',
    about_us: 'О нас',
    open_wallet: 'Открыть кошелёк',
    block_1_text_h1: 'Плати криптой по Qr-коду в кино, магазинах и ресторанах',
    block_1_text_p: 'Начните внедрять криптовалюту в свою жизнь уже сегодня, не используя банковские карты и обменники.',
    block_1_create_wallet: 'Создать свой крипто кошелёк легко',
    about_company: 'О компании',
    block_2_text_h1: 'Современные технологии под надежной защитой',
    block_2_text_p: 'Для входа в аккаунт и создания кошелька мы используем подтверждение через Telegram бота. Все операции на вывод средств также проходят через подтверждение в боте',
    block_3_text_h2_tg: 'Авторизация через Telegram',
    block_3_text_p_tg: 'Для входа в аккаунт и создания кошелька мы используем подтверждение через Telegram бота. Все операции на вывод средств также проходят через подтверждение в боте.',
    block_3_text_h2_aml: 'AML–проверка',
    block_3_text_p_aml: 'Каждая транзакция пополнения и вывода средств проходит обязательную AML-проверку, чтобы в нашей системе была только чистая криптовалюта.',
    block_3_text_h2_safe: 'Безопасный вход',
    block_3_text_p_safe: 'Вы можете установить код-пароль для входа в приложение или использовать Face-iD, а также функцию отпечатка пальца.',
    pay_shopping: 'Оплата покупки',
    block_4_text_h1: 'Оплата покупок криптовалютой через QR-код',
    block_4_text_p: 'Совершайте привычные действия, будто оплачиваете рублями.',
    block_5_text_h3_1: 'Оплата покупок криптовалютой через QR-код',
    block_5_text_p_1: "Совершайте привычные действия, будто оплачиваете рублями.",
    block_5_text_h3_2: 'Отсутствие работ с картами и обменниками',
    block_5_text_p_2: "Вы никогда не столкнётесь с мошенничеством, а также сэкономите время на обмене.",
    block_5_text_h3_3: 'Быстрые транзакции',
    block_5_text_p_3: "Среднее время оплаты покупки по QR-коду составляет 8 секунд с момента сканирования.",
    block_7_text_h1: 'под надежной защитой',
    block_7_text_p: 'Для входа в аккаунт и создания кошелька мы используем подтверждение через Telegram бота. Все операции на вывод средств также проходят через подтверждение в боте',
    block_7_text_h3_1: 'Открытие в мире крипты, которое доступно каждому',
    block_7_text_p_1: "Совершайте привычные действия, будто оплачиваете рублями.",
    block_7_text_h3_2: 'Интерфейс поймет даже твоя бабушка',
    block_7_text_p_2: "Вы никогда не столкнётесь с мошенничеством, а также сэкономите время на обмене.",
    block_7_text_h3_3: 'Пополнить кошелек элементарно – переведи USDT в TON или TRC-20',
    block_7_text_p_3: "Среднее время оплаты покупки по QR-коду составляет 8 секунд с момента сканирования.",
    block_8_text_h1: "Вопрос-ответ",
    block_8_text_p: 'Все операции на вывод средств также проходят через подтверждение в боте',
    block_8_text_p_2: 'Для входа в аккаунт и создания кошелька мы используем подтверждение через Telegram бота. Все операции на вывод средств также проходят через подтверждение в боте.',
    block_9_text_h1: 'БЛОГ И НОВОСТИ',
    block_10_text_h1: 'КОНТАКТЫ',
    block_10_text_p: 'По всем интересующим вопросам вы можете обращаться в нашу круглосуточную службу поддержки или присылать письмо на почту.',
    license: 'Лицензия',
    terms_of_use: 'Условия использования',
    privacy_policy: 'Политика конфиденциальности',
    policy_aml: 'Политика AML',
    policy_cookie: 'Политика Cookie',
    footer_text_1: 'Instagram и Facebook (принадлежат компании Meta, признанной экстремистской и запрещённой на территории РФ)',
    footer_text_2: '* использование таких слов как "Оплата" и близких ему по смыслу подразумевает собой процесс, когда один участник сделки оплачивает товар или услугу, а в обмен получает криптовалюту.',
    documents: "Документы",
    company: "Компания",
    messengers: 'Соц. сети'
  },
  EN: {
    
  }
};

const i18n = createI18n({
 legacy: false,
  locale: localStorage.getItem('lang') || 'RU',
  fallbackLocale: 'RU',
  messages,
});

export default i18n;
