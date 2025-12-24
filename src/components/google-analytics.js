"use client"

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
    if (!GA_TRACKING_ID) return

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `
    document.head.appendChild(script2)

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  // Track page views
  useEffect(() => {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
    if (!GA_TRACKING_ID || !window.gtag) return

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics({ GA_TRACKING_ID }) {
  if (!GA_TRACKING_ID) return null

  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}