---
title: "MetaCheck — Support & Legal"
lang: en
layout_kind: home
---

<section class="hero">
<span class="eyebrow">Photo privacy · on-device</span>
<h1>See what your photos <span>reveal</span>. Remove it before you send.</h1>
<p>MetaCheck shows the location, camera, author and AI labels hidden in an image, scores the privacy risk and saves a clean copy. Everything happens on your phone.</p>
<p><a href="#ru">Русская версия ↓</a></p>
</section>

<div class="grid">
<div class="tile"><span class="ico">◎</span><b>Privacy score</b><p>0–100 and the exact values a recipient would see: coordinates, serial number, author, capture time.</p></div>
<div class="tile"><span class="ico">↗</span><b>Send without metadata</b><p>Pick it in the Share menu of any app and the photo goes out already cleaned.</p></div>
<div class="tile"><span class="ico">◈</span><b>AI labels in the file</b><p>Content Credentials (C2PA), IPTC and generation parameters. The picture itself is not analyzed.</p></div>
</div>

<h2 class="section-title">Documents</h2>
<div class="grid docs">
<a class="tile" href="PRIVACY_POLICY_EN.html"><span class="ico">▤</span><b>Privacy Policy</b><p>What stays on your device and what leaves it, and only on your action.</p></a>
<a class="tile" href="TERMS_EN.html"><span class="ico">§</span><b>Terms of Use</b><p>Free and Pro, payments, limits of the analysis.</p></a>
</div>

<h2 class="section-title">Frequently asked questions</h2>

<details class="faq"><summary>Does MetaCheck detect AI from the picture itself?</summary>
<p>No. It reads labels inside the file: C2PA, IPTC, generation parameters and generator names. Social networks and messengers strip these labels, so for such images the app says there is no data. Missing labels do not prove a photo is real, and a C2PA signature is not verified.</p></details>

<details class="faq"><summary>Does MetaCheck upload my photos?</summary>
<p>No. Images are processed on your device. Data leaves the phone only through your own actions: the map loads after you press its button (the map provider, MapTiler, sees your IP address and the location of the point shown on the map), address search uses your phone's system geocoder, "Send without metadata" passes a cleaned copy to the app you choose, and a JSON report goes only to a server you configured yourself.</p></details>

<details class="faq"><summary>Why is GPS not shown?</summary>
<p>Photos from messengers usually have location removed. Open the original from your camera and allow "Access to media location" when Android asks — without it Android 10+ hides the coordinates from apps. On some phones location tagging must be enabled in the camera settings.</p></details>

<details class="faq"><summary>Why does a cleaned image look different?</summary>
<p>Full cleaning re-encodes the pixels: JPEG stays JPEG at high quality, other formats are saved as PNG, very large images are downscaled and GIF animation is lost. Removing only GPS from a JPEG does not re-compress it. The original file is not changed.</p></details>

<details class="faq"><summary>Why can't I write my name in Cyrillic into EXIF?</summary>
<p>Text EXIF fields (author, camera, copyright, description) are ASCII by the standard, so non-Latin letters would turn into "?". Use Latin letters and write "(c)" instead of "©".</p></details>

<details class="faq"><summary>What is free and what is Pro?</summary>
<p>Free: analysis of photos and videos, metadata viewer, privacy score, GPS Privacy Shield, cleaning and editing up to 10 photos per day (UTC), the last 10 reports in history. Pro (one-time purchase, no subscription): no daily limit, cleaning videos (MP4, MOV) without re-encoding, batch cleaning of up to 50 photos, PDF and JSON export, 50 reports in history, sending a report to your own API.</p></details>

<details class="faq"><summary>How do I restore Pro or get a refund?</summary>
<p>Open the Pro screen while signed in to the Google Play account used for the purchase; Pro is restored automatically. Refunds are handled by Google Play under its rules, through the order history of your Google account. Never send passwords or card details to support.</p></details>

<details class="faq"><summary>How do I delete my data?</summary>
<p>Reports are stored only on your phone, encrypted. Clear history in the app settings or uninstall the app. Temporary cleaned copies are deleted within a day; the map cache is cleared with the app cache.</p></details>

<div class="card contact" style="margin-top:18px;padding:16px 18px">
<div><b>Support</b><br><span style="color:var(--muted)">Include the app version, phone model, Android version and the steps. Don't send private photos unless needed.</span></div>
<a class="btn" href="mailto:werk9886@gmail.com">werk9886@gmail.com</a>
</div>

<section class="hero" id="ru" lang="ru" style="margin-top:34px">
<span class="eyebrow">Приватность фото · на телефоне</span>
<h1>Что <span>выдаёт</span> ваше фото. И как убрать это до отправки.</h1>
<p>MetaCheck показывает место съёмки, камеру, автора и метки ИИ внутри изображения, оценивает риск для приватности и сохраняет очищенную копию. Всё происходит на вашем телефоне.</p>
</section>

<div class="grid" lang="ru">
<div class="tile"><span class="ico">◎</span><b>Индекс приватности</b><p>0–100 и точные значения, которые увидит получатель: координаты, серийный номер, автор, время съёмки.</p></div>
<div class="tile"><span class="ico">↗</span><b>Отправить без метаданных</b><p>Выберите пункт в меню «Поделиться» любого приложения, и фото уйдёт уже очищенным.</p></div>
<div class="tile"><span class="ico">◈</span><b>Метки ИИ в файле</b><p>Content Credentials (C2PA), IPTC и параметры генерации. Сама картинка не анализируется.</p></div>
</div>

<h2 class="section-title" lang="ru">Документы</h2>
<div class="grid docs" lang="ru">
<a class="tile" href="PRIVACY_POLICY_RU.html"><span class="ico">▤</span><b>Политика конфиденциальности</b><p>Что остаётся на устройстве и что уходит с него — только по вашему действию.</p></a>
<a class="tile" href="TERMS_RU.html"><span class="ico">§</span><b>Условия использования</b><p>Free и Pro, оплата, ограничения анализа.</p></a>
</div>

<h2 class="section-title" lang="ru">Частые вопросы</h2>
<div lang="ru">

<details class="faq"><summary>Определяет ли MetaCheck ИИ по самой картинке?</summary>
<p>Нет. Приложение читает метки внутри файла: C2PA, IPTC, параметры генерации и названия генераторов. Соцсети и мессенджеры стирают метки, поэтому для таких картинок приложение скажет, что данных нет. Отсутствие меток не доказывает, что фото настоящее, а подпись C2PA не проверяется.</p></details>

<details class="faq"><summary>Загружает ли MetaCheck мои фото?</summary>
<p>Нет. Изображения обрабатываются на устройстве. Данные уходят с телефона только по вашему действию: карта загружается после нажатия кнопки (поставщик карты MapTiler видит ваш IP-адрес и место точки, показанной на карте), поиск адреса использует системный геокодер, «Отправить без метаданных» передаёт очищенную копию выбранному вами приложению, а JSON-отчёт уходит только на сервер, который вы указали сами.</p></details>

<details class="faq"><summary>Почему не показывается GPS?</summary>
<p>Фото из мессенджеров обычно уже без геометок. Откройте оригинал с камеры и разрешите «Доступ к местоположению в медиафайлах», когда Android спросит: без этого Android 10+ скрывает координаты от приложений. На некоторых телефонах геометки нужно включить в настройках камеры.</p></details>

<details class="faq"><summary>Почему очищенное фото выглядит иначе?</summary>
<p>Полная очистка пересохраняет пиксели: JPEG остаётся JPEG в высоком качестве, остальные форматы сохраняются в PNG, очень большие изображения уменьшаются, анимация GIF пропадает. Удаление только GPS из JPEG выполняется без пережатия. Исходный файл не меняется.</p></details>

<details class="faq"><summary>Почему в EXIF нельзя записать имя кириллицей?</summary>
<p>Текстовые поля EXIF (автор, камера, права, описание) по стандарту хранятся в ASCII, и кириллица превратилась бы в «?». Пишите латиницей, вместо «©» используйте «(c)».</p></details>

<details class="faq"><summary>Что бесплатно, а что в Pro?</summary>
<p>Бесплатно: анализ фото и видео, просмотр метаданных, индекс приватности, GPS Privacy Shield, очистка и правка до 10 фото в сутки (UTC), в истории видны 10 последних отчётов. Pro (разовая покупка, без подписки): без дневного лимита, очистка видео (MP4, MOV) без пережатия, пакетная очистка до 50 фото, экспорт PDF и JSON, 50 отчётов в истории, отправка отчёта в ваш API.</p></details>

<details class="faq"><summary>Как восстановить Pro или вернуть деньги?</summary>
<p>Откройте экран Pro, войдя в тот аккаунт Google Play, с которого покупали: Pro восстановится сам. Возвраты оформляются через Google Play по его правилам, в истории заказов аккаунта Google. Не присылайте в поддержку пароли и данные карт.</p></details>

<details class="faq"><summary>Как удалить мои данные?</summary>
<p>Отчёты хранятся только на телефоне в зашифрованном виде. Очистите историю в настройках или удалите приложение. Временные очищенные копии удаляются в течение суток, кэш карты — вместе с кэшем приложения.</p></details>

</div>

<div class="card contact" lang="ru" style="margin-top:18px;padding:16px 18px">
<div><b>Поддержка</b><br><span style="color:var(--muted)">Укажите версию приложения, модель телефона, версию Android и шаги. Не присылайте личные фото без необходимости.</span></div>
<a class="btn" href="mailto:werk9886@gmail.com">werk9886@gmail.com</a>
</div>
