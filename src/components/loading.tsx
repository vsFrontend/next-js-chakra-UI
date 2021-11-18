import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "./loadingSpinner";
export default function LoadingScreen({ ...other }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleStart = (url) => url !== router.asPath && setLoading(true);
  const handleComplete = (url) => setLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? <LoadingSpinner /> : null;
}
