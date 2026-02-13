export type Role = "ADMIN" | "PARTNER" | "PROVIDER" | "SEEKER";

export type MockUser = {
  name: string;
  email: string;
  role: Role;
  location: string; // Calabarzon default
};

const KEY = "kiro_user_v1";

export function getUser(): MockUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as MockUser) : null;
}

export function setUser(user: MockUser) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function signOut() {
  localStorage.removeItem(KEY);
}
