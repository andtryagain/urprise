import b64_not_found_image from '../base64_files'

export default class Service {
  // __proxy = process.env.REACT_APP_PROXY_URL
  __proxy = 'http://localhost:3001/'

  addPrefixToBase64Data = (data) => {
    switch (data.charAt(0)) {
      case '/':
        return 'data:image/jpeg;base64,'+ data
      case 'i':
        return 'data:image/png;base64,'+ data
      case 'R':
        return 'data:image/gif;base64,'+ data
      case 'U':
        return 'data:image/webp;base64,'+ data
      default:
        return 'data:image/png;base64,'+ data
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
    const { __proxy, addPrefixToBase64Data } = this
    const url = __proxy + imageUrl

    const data = await fetch(url)
      .then(res => res.json())
      .then(json => json.base64)
      .then(data => {
        return addPrefixToBase64Data(data)
        // return found b64 image via proxy
      })
      .catch(() => {
        return addPrefixToBase64Data(b64_not_found_image)
        // return b64_not_found_image
      })
    
    return data
  }
}
