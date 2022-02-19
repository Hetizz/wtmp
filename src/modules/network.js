/**
 * Fetches (GET) json data from ...
 *
 * @param {string} url - api endpoint url
 * @param {string} useProxy - optional proxy
 */
const fetchData = async (url, useProxy) => {
  if (useProxy === 'allorigins') {
    url = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  } else if (useProxy === 'fazer-php') {
    const url2 = url.split('menu/')[1];
    url = `https://users.metropolia.fi/~hetahu/wtm/proxy/fazer-proxy.php/${url2}`;
  }
  let jsonData;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    jsonData = await response.json();
    // allorigins returns data.contents
    if (useProxy === 'allorigins') {
      jsonData = JSON.parse(jsonData.contents);
    }
  } catch (error) {
    console.error('fetchdata error', error);
    jsonData = {};
  }
  return jsonData;
};

export {fetchData};
