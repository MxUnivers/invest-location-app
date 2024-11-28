

export const baseurl = {
    url: process.env.REACT_APP_BASE_URL,
    token: process.env.REACT_APP_TOKEN,
    TypeToken: process.env.REACT_APP_TYPE_TOKEN,
    cloudinaryUploadPreset: process.env.REACT_APP_CLOUNDIANRY_UPLOAD_PRESET,
    cloudinaryCloudName: process.env.REACT_APP_CLOUNDIANRY_NAME,
    ApiKeyGoogle: process.env.REACT_APP_API_KEY_GOOGLE,
}


export const checkWordInURL = (word) => {
    const url = window.location.href;  // Récupère l'URL actuelle
    return url.includes(word);         // Vérifie si le mot est dans l'URL
}
