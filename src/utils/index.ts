export const getActiveLink = (pathname: string, path: string): boolean =>
  pathname === path || pathname.includes(path) || pathname.startsWith(path);
