export default class Service {
  __proxy = process.env.REACT_APP_PROXY_URL;
  // __proxy = 'http://localhost:3001/'

  blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  getImage = async (imageUrl) => {
    const response = await fetch(`${this.__proxy}${imageUrl}`)
    return await response.json()
  };
};
