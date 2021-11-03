import { useEffect, useState, RefObject } from "react";

const useIntersectionObserver = (
  ref: RefObject<Element>,
  { threshold = 0.7, root = null, rootMargin = "0%" }: IntersectionObserverInit
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    let node = ref?.current;
    let hasIOSupport = !!window.IntersectionObserver;

    //    if for some reason element ref is undefined or browser does not support intersection observer then return
    if (!node || !hasIOSupport) return;

    const observerParams = { threshold, root, rootMargin };
    let observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin]);

  return entry;
};

export default useIntersectionObserver;
