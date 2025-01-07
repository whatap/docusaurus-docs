module.exports = function () {
    return {
        name: 'whatap-plugin-browser',
        injectHtmlTags() {
            return {
              headTags: [
                {
                    tagName: 'script',
                    innerHTML: `(function (w, h, _a, t, a, b) {
                        w = w[a] = w[a] || {
                          config: {
                            projectAccessKey: "x4t5020boh2ln-z6pi7d91ds6c1a-z7t4b2lrgnub4o",
                            pcode: 29856,
                            sampleRate: 100,
                            sessionReplaySampleRate: 100,
                            ignorePageUrls: [/^.*localhost.*$/i, /^.*ngrok-free.app.*$/i, /^.*whatap.github.io.*$/i],
                            collectUserClick: true
                          },
                        };
                        a = h.createElement(_a);
                        a.async = 1;
                        a.src = t;
                        t = h.getElementsByTagName(_a)[0];
                        t.parentNode.insertBefore(a, t);
                      })(window, document, 'script', 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');`
                },
                {
                  tagName: 'script',
                  innerHTML: `let curLang = document.documentElement.lang.split('-')[0];
                  CRISP_RUNTIME_CONFIG = {locale : curLang};
                  window.$crisp=[];window.CRISP_WEBSITE_ID="9a0c342f-a5b1-4c4a-a22f-92c7b4b9b477";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
                }
              ]
            };
        },
    };
};