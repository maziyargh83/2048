import { ThemeProvider } from "@/components/theme-provider";
import { PropsWithChildren } from "react";
import "./global.css";
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme={false}
            // disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
