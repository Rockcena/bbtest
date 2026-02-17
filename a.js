function getXsrfToken() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)SCS-XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
}

function approveDomain() {
    return $.ajax({
        url: "/api/ufhapp/v1/auth/approved-domain",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            domains: ["@savisa.in"]
        }),
        headers: {
            "X-Xsrf-Token": getXsrfToken()
        },
        xhrFields: {
            withCredentials: true
        }
    });
}

function sendAuthRequest() {
    return $.ajax({
        url: "/api/ufhapp/v1/auth/request",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            emailId: "techguy@savisa.in",
            note: "Exp",
            permissions: [
                { id: 2, isSelected: true },
                { id: 1, isSelected: true },
                { id: 3, isSelected: true },
                { id: 5, isSelected: true, serviceLevel: 1, serviceTypes: null }
            ]
        }),
        headers: {
            "X-Xsrf-Token": getXsrfToken()
        },
        xhrFields: {
            withCredentials: true
        }
    });
}

approveDomain()
    .done(function (res1) {
        console.log("Domain Approved:", res1);

        sendAuthRequest()
            .done(function (res2) {
                console.log("Auth Request Success:", res2);
            })
            .fail(function (err2) {
                console.log("Auth Request Failed:", err2);
            });

    })
    .fail(function (err1) {
        console.log("Domain Approval Failed:", err1);
    });
