let baseUrl = ''
if (!window.location.hostname.includes("localhost")) {
    baseUrl = 'https://api.a5e39e5f.nip.io'
}

export {baseUrl}