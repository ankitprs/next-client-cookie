
interface CookieValues {
  value: string,
  key: string
}

const getCookieForClient = (key: string): CookieValues | undefined => {
  if (!document) return undefined;

  const cookies = document.cookie.split('; ');
  const cookieMap: any = {};
  cookies.forEach(cookie => {
    const [name, value] = cookie.split('=');
    cookieMap[name] = value;
  });
  if (!cookieMap[key]) {
    return undefined
  }
  return { value: cookieMap[key], key: key };
}

export { getCookieForClient, CookieValues }