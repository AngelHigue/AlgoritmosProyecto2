const BASE_URL = "http://localhost:8000";

async function callApi(endpoint, options = {}) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  juegos: {
    insert(params) {
      return callApi(`/neo/new`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
    search(params) {
      return callApi(`/neo/search`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  },
};

export default api;
