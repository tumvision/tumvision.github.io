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
    </main>
  );
}
