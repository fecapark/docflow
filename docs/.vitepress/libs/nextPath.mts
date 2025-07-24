function nextPath(to: "en" | "ko", path: string): string {
  if (path === "/" || path === "/en/" || path === "/ko/") {
    return to === "en" ? "/en/" : "/";
  }

  return to === "en"
    ? path.replace(/^\/ko(?=\/|$)/, "/en")
    : path.replace(/^\/en(?=\/|$)/, "/ko");
}

export function fixLangLinks(pathname: string) {
  document
    .querySelectorAll<HTMLAnchorElement>('a.VPLink.link[href^="/en"]')
    .forEach((a) => a.setAttribute("href", nextPath("en", pathname)));

  document
    .querySelectorAll<HTMLAnchorElement>(
      'a.VPLink.link[href^="/ko"], a.VPLink.link[href="/"]'
    )
    .forEach((a) => a.setAttribute("href", nextPath("ko", pathname)));
}
