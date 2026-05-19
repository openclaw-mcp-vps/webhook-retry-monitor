import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Retry Monitor — Track Delivery Failures & Retry Patterns',
  description: 'Monitor webhook delivery success rates, failure reasons, and retry attempts across multiple services. Real-time analytics for SaaS developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fb8e0c62-00a0-4585-90bd-77f25a1faac1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
