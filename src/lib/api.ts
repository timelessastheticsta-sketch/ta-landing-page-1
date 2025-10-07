// Prefer environment variable; fallback to hosted backend URL (never localhost in builds)
const BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL)
  || 'https://ta-landing-page-backend-1-1.onrender.com';

export async function apiPost<TBody extends object, TResponse = unknown>(
  path: string,
  body: TBody
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }

  return res.json() as Promise<TResponse>;
}

export async function apiGet<TResponse = unknown>(path: string): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`);

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }

  return res.json() as Promise<TResponse>;
}

export async function apiPut<TBody extends object, TResponse = unknown>(
  path: string,
  body: TBody
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<TResponse>;
}

export async function apiDelete<TResponse = unknown>(path: string): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, { method: 'DELETE' });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<TResponse>;
}

export async function apiUpload<TResponse = unknown>(path: string, formData: FormData): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<TResponse>;
}
