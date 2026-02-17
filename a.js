$.ajax({
    url: "https://scsapps.ups.com/api/ufhapp/v1/auth/request",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        emailId: "coolbug1@yopmail.com",
        note: "Exp",
        permissions: [{
            id: 2,
            isSelected: !0
        }, {
            id: 1,
            isSelected: !0
        }, {
            id: 3,
            isSelected: !0
        }, {
            id: 5,
            isSelected: !0,
            serviceLevel: 1,
            serviceTypes: null
        }]
    }),
    headers: {
        "X-Xsrf-Token": document.cookie.replace(/(?:(?:^|.*;\s*)SCS-XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1")
    },
    xhrFields: {
        withCredentials: !0
    },
    success: e => console.log("Success:", e),
    error: e => console.log("Error:", e)
});