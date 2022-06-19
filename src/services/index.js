import b64_not_found_image from '../base64_files'

export default class Service {
  // __proxy = process.env.REACT_APP_PROXY_URL
  __proxy = 'http://localhost:3001/'

  getDataBase64Prefix = (b64) => {
    switch (b64.charAt(0)) {
      case '/':
        return 'data:image/jpeg;base64,'
      case 'i':
        return 'data:image/png;base64,'
      case 'R':
        return 'data:image/gif;base64,'
      case 'U':
        return 'data:image/webp;base64,'
      default:
        return 'data:image/png;base64,'
    }
  }

  blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob);
    })
  }

  getImage = async (imageUrl) => {
    const { __proxy, getDataBase64Prefix } = this
    const url = __proxy + imageUrl

    const data = await fetch(url)
      .then(res => res.json())
      .then(json => json.base64)
      .then(data => {
        const prefix = getDataBase64Prefix(data)
        return prefix + data
        // return found b64 image via proxy
      })
      .catch(() => {
        const prefix = getDataBase64Prefix(b64_not_found_image)
        return prefix + b64_not_found_image
        // return b64_not_found_image
      })
    
    return data;
  }
}
