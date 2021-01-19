let baseUrl = ''
if (!window.location.hostname.includes("localhost")) {
    baseUrl = 'https://api.esftunisie.com'
}

export {baseUrl}