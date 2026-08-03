import NextTopLoader from "nextjs-toploader";

export function NavigationLoader() {
  return (
    <NextTopLoader
      color="#FF6B00"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FF6B00,0 0 5px #FF6B00"
    />
  );
}
