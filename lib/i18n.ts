export type Lang = "uk" | "en";

export function localizedPath(lang: Lang, path: string) {
  if (lang === "uk") {
    return path;
  }

  if (path === "/") {
    return "/en";
  }

  return `/en${path}`;
}

export function alternateLang(lang: Lang): Lang {
  return lang === "uk" ? "en" : "uk";
}
