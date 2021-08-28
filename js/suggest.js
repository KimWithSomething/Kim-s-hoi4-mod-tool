// ANYZOOKA 28/8/2021

function submitSuggestion(sEmailId, sSuggestId,sForWhatID) {
    var sEmailToCheck = document.getElementById(sEmailId).value;
    var sSuggestion = document.getElementById(sSuggestId).value;
    var sForWhat = document.getElementById(sForWhatID).value;

    if (checkEmail(sEmailToCheck)) {
        // POST TO SERVER

        try {
            // sContent = null;

            var sContentType = 'application/json; charset=UTF-8';

            var url=/*sUrl = `https://hoi4modtool.pythonan*/"https://discord.com/api/webhooks/881188129552355448/"/*ywhere.com?email=${sEmailToCheck}&suggestion=${encodeURIComponent(sSuggestion)}&time=${javascript.basiclib.getTime}&cookieMonster=${(bool)cookiesYesOrNo()}`;*/ + "qAbQDFmbhGGqKt2NEXBvK1DqnC1z5ewo7T-5qNHTqixIfbGqsy9ySgBhHA_1QKUSPR5I";

            // postData("GET", null, sContentType, sUrl);

            var json = {"content": `-----NEW SUGGESTION-----\n**From:** ${sEmailToCheck}\n**For which product**: ${sForWhat}\n**Suggestion:**\n${sSuggestion}\n\n`};
            json = JSON.stringify(json)

            postData("POST", json, "application/json", url)

            window.location.href = "suggestionSent.html";
        } catch(ex) {
            alert(`Something seems to have gone wrong. Please send the following to the dev team:\n${ex}`);
        }

    } else {
        alert("Please submit a valid email");
    }
    return false;
}

function postData(sMethod, sContent, sContentType, sUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open(sMethod, sUrl, false);
    if (sMethod == "POST") { 
        xhr.setRequestHeader('Content-Type', sContentType); 
    }
    xhr.send(sContent);

    return;
}

function checkEmail(sInput) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sInput);
}