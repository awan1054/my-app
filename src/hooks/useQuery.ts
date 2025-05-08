import { use } from "react";

const promisseCache = new Map();

export default function useQuery({ fn, key }) {
  // console.log(promisseCache);
  if (!promisseCache.has(key)) {
    promisseCache.set(key, fn());
  }

  const promise = promisseCache.get(key);
  const result = use(promise);
  return result;
}
