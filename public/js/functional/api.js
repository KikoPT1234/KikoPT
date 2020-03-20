let documentation;
$(document).ready(() => {
    $("main").append(`<div class=documentation></div>`);
    fetch(`${window.location.href}/json`)
        .then(r => r.json())
        .then(docs);
    $("#api-search").keyup((e) => {
        const search = $("#api-search").val();
        let number = 0;
        $(".doc").each((i, doc) => {
            let name = $(doc).attr("id").replace(/-[A-Z]+/g, "").replace(/[{}]+/g, "");
            if (name.includes(search)) {
                $(doc).show();
                number++;
            }
            else
                $(doc).hide();
        });
        if (number === 0)
            $("#not-found").show();
        else
            $("#not-found").hide();
    });
});
function docs(d) {
    documentation = d;
    for (let i in d) {
        const doc = d[i];
        let request = "";
        let response = "";
        try {
            if (doc.request)
                request = JSON.stringify(JSON.parse(doc.request), null, "  ").replace(/\n+/g, "<br>").replace(/\s/gi, "&nbsp;");
        }
        catch (e) {
            request = doc.request;
        }
        try {
            if (doc.response)
                response = JSON.stringify(JSON.parse(doc.response), null, "  ").replace(/\n+/g, "<br>").replace(/\s/gi, "&nbsp;");
        }
        catch (e) {
            console.log(e);
            response = doc.response;
        }
        let html = `<div class="doc" id="${i}">
                <div class="header">
                    <span class="method code">${doc.method}</span>
                    <a class="name" href="${doc.endpoint.replace(/[{}]+/g, "")}">${doc.endpoint.replace("https://api.minehut.com", `https://api.minehut.com<span class="useful">`).replace(/{/g, `<span class="code">`).replace(/}/g, `</span>`).concat("</span>")}</a>
                </div>
                <div class="main">
                    ${(function () {
            let main = "";
            if (doc.request)
                main += `<div class="request info"><p>Request Body Example<p>${request.startsWith("{") ? `<pre class="atom-one-dark"><code class="atom-one-dark json">${request}</code></pre>` : request}</div>`;
            if (doc.response)
                main += `<div class="response info"><p>Response Example<p>${response.startsWith("{") ? `<pre class="atom-one-dark"><code class="atom-one-dark json">${response}</code></pre>` : response}</div>`;
            doc.description.forEach((desc) => main += `<div class="info description">${desc.replace(/{/g, `<span class="code">`).replace(/}/g, `</span>`)}${desc.endsWith(".") ? "" : "."}</div>`);
            const headers = ["Content-Type"];
            if (doc.authorization)
                headers.push("Authorization", "X-Session-Id");
            main += `<ul class="info headers"><p>Required Headers</p>`;
            headers.forEach(h => main += `<li class="code">${h}</li>`);
            main += `</ul>`;
            return main;
        })()}
                </div>
            </div>`;
        $(".documentation").append(html);
        // @ts-ignore
        if (doc.request && doc.request.startsWith("{"))
            hljs.highlightBlock(document.getElementById(i).querySelector(".request pre code"));
        // @ts-ignore
        if (doc.response && doc.response.startsWith("{"))
            hljs.highlightBlock(document.getElementById(i).querySelector(".response pre code"));
    }
    $(".documentation").append(`<h1 style="display: none" id="not-found">No endpoints found :/</h1>`);
}
