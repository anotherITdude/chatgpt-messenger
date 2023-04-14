import "./globals.css";
import SideBar from "../components/SideBar";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "../components/Login";
import { authOptions } from "./../pages/api/auth/[...nextauth]";

export const metadata = {
  title: "ChatGPT Messenger",
  description: "ChatCPT messenger built on NextJS & tailwindcss",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex flex-row">
              <div
                className="bg-[#202123] max-w-xs h-screen 
                overflow-y-auto md:min-w-[15rem]"
              >
                <SideBar />
              </div>
              <div className=" flex-1 bg-[#343541]">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
