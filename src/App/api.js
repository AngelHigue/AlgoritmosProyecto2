const BASE_URL = "";

async function callApi(endpoint, options = {}) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  juegos: {
    insert(params) {
      return callApi(`/insert`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
    search(params) {
      return callApi(`/search`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
    update(params) {
      return callApi(`/update`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  },
};

export default api;
