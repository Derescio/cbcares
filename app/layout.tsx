import { Layout } from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CB Cares",
  description: "Community-Based Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider theme={theme}>
      <Layout>
      {children}
          </Layout>
        </ChakraProvider>
        </body>
    </html>
  );
}
