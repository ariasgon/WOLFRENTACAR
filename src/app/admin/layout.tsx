export const metadata = {
  title: "Admin · Wolf Rent a Car",
  robots: { index: false, follow: false },
};

// Pass-through layout. The gated pages get their chrome from
// `(gated)/layout.tsx`; the login page renders full-bleed without chrome.
export default function AdminPassThroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
