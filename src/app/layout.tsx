import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Provider } from "@components/ui/provider";
import { Box, Button, Flex, Separator } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipes collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Flex flexDir="column" height="100%">
            <nav>
              <Flex gap="4" alignItems="center" padding="5">
                <Link href="/">
                  <h1>Recipes</h1>
                </Link>
                <Button asChild>
                  <Link href="/new">New</Link>
                </Button>
              </Flex>
            </nav>
            <Separator />
            <Box as="main" flex={1} p="5">
              {children}
            </Box>
            <Box as="footer" p="5">
              Glyn Lewington
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
