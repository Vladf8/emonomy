"use strict";

(function main(){

    const _$ = _attr => {
        return document.querySelectorAll(_attr);
    }

    const sponsoredTexts = [
        "Sponsored",
        "مُموَّل", // Arabic
        "赞助内容", // Chinese (Simplified)
        "贊助", // Chinese (Traditional)
        "Sponzorováno", // Czech
        "Gesponsord", // Dutch
        "May Sponsor", // Filipino
        "Commandité", // French (Canada)
        "Sponsorisé", // French
        "Gesponsert", // German
        "Χορηγούμενη", // Greek
        "ממומן", // Hebrew
        "प्रायोजित", // Hindi
        "Hirdetés", // Hungarian
        "Bersponsor", // Indonesian
        "Sponsorizzato", // Italian
        "広告", // Japanese
        "Sponsorowane", // Polish
        "Patrocinado", // Portuguese (Brazil)
        "Sponsorizat", // Romanian
        "Реклама", // Russian
        "Sponzorované", // Slovak
        "Publicidad", // Spanish
        "Sponsrad", // Swedish
        "ได้รับการสนับสนุน", // Thai
        "Sponsorlu", // Turkish
        "Được tài trợ", // Vietnamese
      ];

    const addAlreadyCheckedClass = elem => {
        elem.classList.add("checked-sponsor");
    }

    const changeSponsoredAds = () => {
        let spans = Array.from(_$('span'))
        let match = spans.find(el => {
                return el.textContent.toLowerCase().includes("Sponsored".toLowerCase()) && el.className.indexOf("checked-sponsor") >= 0;
              });
        if(match.className.indexOf("checked-sponsor") >= 0){
            let image = match.querySelector('img')
            $.get('/get/image', function (data, textStatus, jqXHR) {
                image.src = data.path;
            });
            addAlreadyCheckedClass(match)
        }
    }

    window.addEventListener('DOMContentLoaded', changeSponsoredAds);
    window.addEventListener('load', changeSponsoredAds);
    window.addEventListener('scroll', changeSponsoredAds)

})();