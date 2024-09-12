import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src="/logo.png" width={200} height={200} alt="TUMVision Logo" />
      <h1 className="text-2xl font-bold">TUMVision</h1>
      <h2 className="text-lg font-bold">3D Computer Vision Club</h2>
      <h4 className="text-lg">This site is a work in progress.</h4>
      <h4 className="text-lg">Please come back later.</h4>
    </main>
  );
}
