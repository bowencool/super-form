export default (url, method, body) => fetch(url, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
