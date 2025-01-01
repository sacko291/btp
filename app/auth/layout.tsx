

export default function AuthLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 h-screen">
            {children}
        </div>
    );
  }