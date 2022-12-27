export async function fetchImages(animal) {
    const response = await fetch(
      `https://shibe.online/api/${animal}?count=12&urls=true&httpsUrls=true`
    );
    const data = await response.json();
    return data;
  }