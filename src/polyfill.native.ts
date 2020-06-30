import MediaQueryList from "./MediaQueryList";

if (typeof window !== "undefined") {
  // @ts-ignore: does not properly extend MediaQueryList
  window.matchMedia = (query: string) => new MediaQueryList(query);
}
