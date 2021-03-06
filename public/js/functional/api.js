let documentation;
$(document).ready(() => {
    // @ts-ignore
    hljs.configure({
        tabReplace: "  "
    });
    $("main").append(`<div class=documentation></div>`);
    fetch(`${window.location.href.split("#")[0]}/json`)
        .then(r => r.json())
        .then(docs);
    $("#api-search").keyup((e) => {
        const search = $("#api-search").val().toString().toLowerCase();
        let number = 0;
        $(".doc").each((i, doc) => {
            let name = "/" + $(doc).attr("id").replace(/-[A-Z]+/g, "").replace(/[{}]+/g, "");
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
            console.log(e);
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
                    <div class="copy-buttons">
                        <button class="copy">Copy Link</button>
                        <button class="copy-doc">Copy Documentation Link</button>
                    </div>
                </div>
                <div class="main">
                    ${(function () {
            let main = "";
            const headers = ["Content-Type"];
            if (doc.authorization)
                headers.push("Authorization", "X-Session-Id");
            doc.description.forEach((desc) => main += `<div class="info description">${desc.replace(/{/g, `<span class="code">`).replace(/}/g, `</span>`)}${desc.endsWith(".") ? "" : "."}</div>`);
            if (doc.request)
                main += `<div class="request info"><p>Request Body Example</p>${(request.startsWith("{") || response.startsWith("[")) ? `<pre><code class="json">${request}</code></pre>` : request}</div>`;
            if (doc.response)
                main += `<div class="response info"><p>Response Body Example</p>${(response.startsWith("{") || response.startsWith("[")) ? `<pre><code class="json">${response}</code></pre>` : response}</div>`;
            let example = `fetch("${doc.endpoint.replace(/{.+}/g, "5d0fae466242a640a28e3506")}", {
    method: "${doc.method}",
    headers: {\n${headers.map(header => {
                if (header === "Content-Type")
                    return `        "${header}": "application/json"`;
                else if (header === "Authorization")
                    return `\n        "${header}": "5af836a8-60f8-4df3-91fa-040618671818"`;
                else if (header === "X-Session-Id")
                    return `\n        "${header}": "dd665cd1-a0b5-4e2e-bef8-6706a413a83c"`;
            })}\n    }${doc.request ? `,
    body: ${doc.request.startsWith("{") || doc.request.startsWith("[") ? `JSON.stringify(${doc.request})` : "\"REQUEST HERE\""}` : ""}\n})
.then(response => response.json())
.then(response => console.log(response))`;
            main += `<ul class="info headers"><p>Required Headers</p>`;
            headers.forEach(h => main += `<li class="code">${h}</li>`);
            main += `</ul>`;
            main += `<div class="example info"><p>JavaScript Example Code</p><pre><code class="javascript">${example}</code></pre></div>`;
            return main;
        })()}
                </div>
            </div>`;
        $(".documentation").append(html);
        // @ts-ignore
        hljs.highlightBlock(document.getElementById(i).querySelector(".example pre code"));
        // @ts-ignore
        if (doc.request && (doc.request.startsWith("{") || doc.request.startsWith("[")))
            hljs.highlightBlock(document.getElementById(i).querySelector(".request pre code"));
        // @ts-ignore
        if (doc.response && (doc.response.startsWith("{") || doc.response.startsWith("[")))
            hljs.highlightBlock(document.getElementById(i).querySelector(".response pre code"));
    }
    $(".documentation").append(`<h1 style="display: none" id="not-found">No endpoints found :/</h1>`);
    if (window.location.href.includes("#")) {
        const id = window.location.href.replace(/%7B+/g, "{").replace(/%7D+/g, "}").split("#")[1];
        let el = document.getElementById(id);
        if (el) {
            el = el.getBoundingClientRect();
            window.scrollTo(0, el.top + $(window).scrollTop() - 130);
        }
    }
    $(".copy").click(function () {
        const name = $(this).parent().siblings(".name").text();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(name);
        }
        else {
            $("body").append(`<textarea>${name}</textarea>`);
            $("textarea").css("height", "0");
            $("textarea")[0].focus();
            // @ts-ignore
            $("textarea")[0].select();
            document.execCommand("copy");
            $("textarea").remove();
        }
    });
    $(".copy-doc").click(function () {
        const name = window.location.href.split("#")[0] + "#" + $(this).parent().parent().parent().attr("id");
        if (navigator.clipboard) {
            navigator.clipboard.writeText(name);
        }
        else {
            $("body").append(`<textarea>${name}</textarea>`);
            $("textarea").css("height", "0");
            $("textarea")[0].focus();
            // @ts-ignore
            $("textarea")[0].select();
            document.execCommand("copy");
            $("textarea").remove();
        }
    });
}
