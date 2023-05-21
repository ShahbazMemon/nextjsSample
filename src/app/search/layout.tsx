import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ display: "flex" }}>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <Search />
        {children}
      </div>
    </main>
  );
}
