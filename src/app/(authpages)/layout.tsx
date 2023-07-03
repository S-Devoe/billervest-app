export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>NavBar III</nav>

      {children}
    </>
  );
}
