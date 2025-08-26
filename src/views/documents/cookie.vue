```vue
<script setup>
import DocumentHeader from '@/components/DocumentHeader.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    })
  }
})
</script>

<template>
  <DocumentHeader />
  <div class="info">
    <section data-aos="fade-up" class="policy-section">
      <h2>1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
      <p>Платформа Garda Wallet LLC (далее -- «Платформа», «мы», «наш», «нас») предупреждает Пользователя (далее -- «Вы», «Вашего», «Вас») об использовании файлов Cookie, с целью повышения эффективности работы Платформы, а также для повышения Вашего комфорта при использовании. Мы можем размещать файлы Cookie на вашем ПК, личном устройстве и мобильном устройстве в соответствии с вашими предпочтениями, установленными в нашем центре настроек электронных файлов Cookie.</p>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>2. ЧТО ТАКОЕ ФАЙЛЫ COOKIE</h2>
      <p>Файлы Cookie - это небольшие текстовые файлы, которые загружаются на Ваше устройство при посещении Платформы и идентифицируют Ваш браузер или устройство. При последующем посещении Платформы он распознает файлы Cookie, а также Ваше устройство, и отправляет эту информацию обратно на Платформу, который изначально создал файлы Cookie, или на другой сайт или приложение, которое их распознает.</p>
      <p>Настоящая Политика обработки файлов Cookie является неотъемлемой частью нашей Политики конфиденциальности, доступной в разделе «Политика конфиденциальности».</p>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>3. ДЛЯ ЧЕГО МЫ СОБИРАЕМ ФАЙЛЫ COOKIE</h2>
      <p>Cookie-файлы нам необходимы в следующих целях:</p>
      <ul>
        <li>Регистрация на Платформе</li>
        <li>Улучшение взаимодействия Пользователя с нашей Платформой</li>
        <li>Анализ статистики использования Платформы</li>
        <li>Обеспечение информационной безопасности</li>
      </ul>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>4. ТИПЫ ФАЙЛОВ COOKIE</h2>
      <p>Мы используем следующие типы файлов Сookie на платформе:</p>
      
      <div class="cookie-type" data-aos="zoom-in-right" data-aos-delay="100">
        <h3>Строго необходимые файлы Сookie.</h3>
        <p>Эти файлы Cookie необходимы, чтобы Платформа работала корректно, они позволят Вам использовать возможности Платформы. Эти файлы не идентифицируют Пользователей как личность. Если Вы не согласны использовать данный тип файлов, это может оказать влияние на производительность Платформы или его компонентов.</p>
      </div>

      <div class="cookie-type" data-aos="zoom-in-right" data-aos-delay="150">
        <h3>Файлы Сookie, относящиеся к производительности, эффективности и аналитике.</h3>
        <p>Эти файлы помогают понять нам, как Пользователи взаимодействуют с Платформой, предоставляя информацию о тех областях, которые Вы посетили, и количестве времени, которое Вы провели на Сайте, так же эти файлы показывают проблемы в работе интернет-ресурса, например, сообщения об ошибках. Это помогает улучшить нашу работу.</p>
      </div>

      <div class="cookie-type" data-aos="zoom-in-right" data-aos-delay="200">
        <h3>Файлы Сookie, относящиеся к аналитике.</h3>
        <p>Эти файлы помогают измерять эффективность информационных, в том числе рекламных кампаний и оптимизировать содержание сайтов для тех, кого заинтересовала информация/реклама. Данный тип файлов Cookie не может быть использован для идентификации Пользователя. Вся информация, которая собирается и анализируется, полностью анонимна.</p>
      </div>

      <div class="cookie-type" data-aos="zoom-in-right" data-aos-delay="250">
        <h3>Функциональные файлы Cookie.</h3>
        <p>Эти файлы Cookie служат для того, чтобы опознавать Пользователей, возвращающихся на Сайт. Они позволяют индивидуально подбирать содержание Платформы для Пользователей. Если Вы блокируете этот тип файлов, то это может повлиять на производительность и функциональность Платформы и может ограничить доступ к контенту.</p>
      </div>

      <div class="cookie-type" data-aos="zoom-in-right" data-aos-delay="300">
        <h3>Рекламные файлы Cookie.</h3>
        <p>В эти файлы Сookie записываются сведения о действиях Пользователей в Интернете, в том числе о посещении сайтов (страниц), а также данные о ссылках и рекламе, которые Пользователь выбирал для просмотра.</p>
      </div>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>5. ВАШЕ СОГЛАСИЕ</h2>
      <p>При первом посещении Платформы мы показываем Вам баннер согласия на использование файлов Cookie, который позволяет принять или отклонить применение необязательных файлов Cookie.</p>
      <p>Вы можете отключить сохранение файлов Сookie, ограничить их создание конкретными веб-сайтами или установить уведомление об отправке файлов Сookie в своем браузере. Вы также можете в любой момент удалить файлы Сookie с жесткого диска своего компьютера/устройства. В таком случае отображение страниц и руководство по использованию сайтов будут ограниченными.</p>
      <p>Большинство браузеров позволяют в той или иной степени контролировать большинство файлов Сookie через настройки браузера.</p>
      <p>Вы можете изменить настройки таким образом, чтобы браузер блокировал файлы Сookie или предупреждал, когда файлы данного типа будут отправлены на устройство. Пользователю рекомендовано обратиться к инструкции браузера для того, чтобы узнать больше о том, как скорректировать или изменить настройки браузера.</p>
      <p>Отключив файлы Сookie, Пользователь не сможет пользоваться некоторыми функциями, сервисами, инструментами и возможностями Сайта.</p>
      <p>Если отключить файлы Cookie, это может повлиять на работу Пользователя в Интернете. Если Пользователь использует различные устройства для просмотра и доступа к Сайту (например, компьютер, смартфон, планшет и т.д.), он должен убедиться, что каждый браузер на каждом устройстве настроен в соответствии с предпочтениями Пользователя на работу с файлами Сookie.</p>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>6. ФАЙЛЫ COOKIE ТРЕТЬИХ ЛИЦ</h2>
      <p>При посещении Платформы создаются файлы Cookie, не относящиеся к Платформе. При посещении страницы с контентом, вставленном на Платформе, данные поставщики услуг могут создавать собственные файлы Cookie в Вашем браузере. Garda Wallet LLC не контролирует использование этих файлов Cookie и мы не можем получить к ним доступ в силу особенностей работы файлов Cookie - доступ к ним имеет лишь то лицо, которое создавало их изначально. Более подробная информация об этих файлах Cookie размещается на веб-сайтах данных третьих лиц.</p>
    </section>

    <section data-aos="fade-up" class="policy-section">
      <h2>7. ОБНОВЛЕНИЯ ПОЛИТИКИ ОБРАБОТКИ ФАЙЛОВ COOKIE</h2>
      <p>Мы можем периодически обновлять Политику обработки файлов Cookie. О внесении изменений в Политику мы сообщим, обновив раздел «Дата вступления в силу» выше. Продолжение использования Сайта после внесения изменений в настоящую Политику означает ваше согласие с Политикой и всеми внесенными в нее изменениями. Мы можем уведомлять вас об обновлениях Политики, в том числе по электронной почте. Тем не менее, такие уведомления не отменяют и не ограничивают Вашу обязанность регулярно проверять настоящую Политику на предмет внесения изменений.</p>
    </section>
  </div>
</template>
<style scoped>
.info {
    padding: 40px;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.policy-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 30px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.policy-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

h2 {
    font-size: 32px;
    line-height: 30px;
    color: #2c3e50;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e8eff5;
    position: relative;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #DEEC51;
    border-radius: 2px;
}

h3 {
    font-size: 20px;
    color: #34495e;
    font-weight: 600;
    margin-bottom: 12px;
}

h4 {
    font-size: 18px;
    color: #2c3e50;
    font-weight: 500;
    margin-bottom: 8px;
}

p {
    color: #5C5C5C;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 8px;
}

ul {
    padding-left: 25px;
    margin: 15px 0;
}

li {
    color: #5C5C5C;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 8px;
    position: relative;
}

li::before {
    content: '•';
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

/* Стили для терминов */
.term-item {
    padding: 20px;
    background: #f8fafc;
    border-left: 4px solid #3498db;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: transform 0.3s ease, background 0.3s ease;
}

.term-item:hover {
    transform: translateX(5px);
    background: #edf2f7;
}

/* Стили для карточек целей */
.goal-card {
    padding: 25px;
    background: linear-gradient(135deg, #f8fafc 0%, #e8eff5 100%);
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    margin-bottom: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goal-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Стили для прав и обязанностей */
.rights-section, .obligations-section {
    margin: 25px 0;
}

.right-item, .obligation-item {
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.right-item {
    background: linear-gradient(135deg, #e8f4fd 0%, #d1e9fa 100%);
    border-left: 4px solid #2980b9;
}

.obligation-item {
    background: linear-gradient(135deg, #f0f9eb 0%, #e2f4d7 100%);
    border-left: 4px solid #27ae60;
}

.right-item:hover, .obligation-item:hover {
    transform: translateX(8px);
}

/* Анимации для AOS */
[data-aos] {
    opacity: 0;
    transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-aos].aos-animate {
    opacity: 1;
}

/* Адаптивность */
@media (max-width: 768px) {
    .info {
        padding: 20px;
        padding-top: 10vh;
        gap: 25px;
    }
    
    .policy-section {
        padding: 20px;
        gap: 20px;
    }
    
    h2 {
        font-size: 26px;
    }
    
    h3 {
        font-size: 18px;
    }
    
    h4 {
        font-size: 16px;
    }
    
    .goal-card, .term-item, .right-item, .obligation-item {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .info {
        padding: 15px;
        padding-top: 10vh;
    }
    
    .policy-section {
        padding: 15px;
    }
    
    h2 {
        font-size: 22px;
    }
    
    h2::after {
        width: 40px;
    }
}
</style>