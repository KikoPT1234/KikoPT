$(document).ready(() => {
    $("button").click(e => {
        e.preventDefault()
        const server = $(".server").hide()
        const name: any = $("input").val()
        const header = server.children(".header")
        const main = server.children(".main")
        main.empty()
        header.children(".name").empty()
        header.children(".id").empty()
        $(".error").empty()
        if (!name || name.length < 4 || name.match(/ /)) return $(".error").text("Please provide a name of at least 4 characters with no spaces.")
        fetch(`${window.location.origin}/api/server/${name}${name.length === 24 ? "" : "?byName=true"}`).then(res => {
            load(res)
        }, e => $(".error").text("There was an error."))
    })
})

function load(res: Response) {
    if (res.status === 502) return $(".error").text("Server not found.")
    if (res.status !== 200) return $(".error").text("There was an error.")
    
    res.json().then((info) => {
        const server = $(".server").show()
        const header = server.children(".header")
        const main = server.children(".main")
        header.children(".name").text(info.name)
        header.children(".id").text(info._id)
        main.append(getBody(info))
    })
}

function getBody(info: any) {
    let body = ""
    Object.keys(info).forEach(i => {
        if (i === "name" || i === "_id") return;
        let html: string
        switch (i) {
            case ("owner"):
                html = getField("Owner UUID", info[i])
                break
            case ("name_lower"):
                html = getField("Lowercase Name", info[i])
                break
            case ("creation"):
                html = getField("Created (mm/dd/yyyy)", new Date(info[i]).toLocaleString())
                break
            case ("last_online"):
                html = getField("Last Online", new Date(info[i]).toLocaleString())
                break
            case ("visibility"):
                html = getField("Is Visible", info[i])
                break
            case ("__v"):
                html = getField("v", info[i])
                break
            case ("motd"):
                html  = getField("MOTD", info[i].replace(/\n/g, "<br>"))
                break
            case ("port"):
                html = getField("Port", info[i] === -1 ? "None (Offline)" : info[i])
                break
            case ("maxPlayers"):
                html = getField("Max Player Count", info[i])
                break
            case ("playerCount"):
                html = getField("Player Count", info[i])
                break
            case ("offer"):
                if (typeof info[i] !== "string") return
                let offer = info[i].split("gb")
                offer[0] += " GB RAM, "
                offer[1] = offer[1].replace("slots", "") + " Player Slots"
                offer = offer.join("")
                html = getField("Offer", offer)
                break
            case ("server-properties"):
                html = getField("Properties", info[i])
                break
            case ("platform"):
                return
            case ("plugins"):
                html = getField("Plugins", info[i])
                break
            default:
                html = getField(i.split("_").map(w => w.charAt(0).toUpperCase().concat(w.substring(1, w.length))).join(" "), typeof info[i] === "string" ? info[i].split("_").map((w: any) => w.charAt(0).toUpperCase().concat(w.substring(1, w.length))).join(" ") : info[i])
                break
        }
        body += html
    })
    return body
}

function getField(key: any, value: any) {
    if (typeof value === "object" && !Array.isArray(value)) {
        value = `<ul class="properties">${Object.keys(value).map(prop => {
            if (!value[prop] && typeof value[prop] !== "boolean" && typeof value[prop] !== "number") value[prop] = "Not provided"
            return `<li class="property"><div class=pkey>${prop.replace(/(^.|_.)/g, e => ` ${e[e.length - 1].toUpperCase()}`)}</div><div class="pvalue">${value[prop]}</div></li>`
        }).join("")}</ul>`
        return `<div class="info props"><div class="key">${key}</div><div class="value">${value}</div></div>`
    }
    else if (typeof value === "object" && Array.isArray(value)) {
        value = `<ul class="properties">${value.map(p => `<li class="properties list">${p}</li>`).join("")}`
    }
    if (typeof value === "boolean") value = value ? "True" : "False"
    return `<div class="info"><div class="key">${key}</div><div class="value">${value}</div></div>`
}