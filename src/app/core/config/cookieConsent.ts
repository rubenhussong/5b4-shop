import { NgcCookieConsentConfig, NgcCookieConsentService, NgcCookieTheme, } from 'ngx-cookieconsent';

export const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
        domain: 'localhost' // change to 5b4.shop
    },
    type: 'opt-out',
    position: 'bottom-right',
    theme: "classic", // block, classic, edgeless, (cc-theme-5b4)
    palette: {
        popup: {
            background: 'rgb(220, 175, 135)',
            link: "#fff"
        },
        button: {
            background: '#fff',
            border: 'rgb(220, 175, 135)',
            text: 'rgb(220, 175, 135)'
        },
        highlight: {
            background: "transparent",
            border: '#fff'
        },
    },
    content: {
        message: "Wir futtern Deine Cookies und spülen die Krümel mit einem tiefen Schluck runter.",
        allow: "Mampf!",
        deny: "Bääh!",
        link: "", // Kekse?
        href: "https://cookiesandyou.com",
        policy: "Kekse"
    }
};