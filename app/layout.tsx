import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClipClaw',
  description: 'Welcome to ClipClaw',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
