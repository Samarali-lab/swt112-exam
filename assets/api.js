async function apiGet(path, params = {}) {
  const url = new URL(window.APP_CONFIG.API_BASE);
  url.searchParams.set("path", path);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), { method: "GET" });
  return res.json();
}

async function apiPost(path, body = {}) {
  const url = new URL(window.APP_CONFIG.API_BASE);
  url.searchParams.set("path", path);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}