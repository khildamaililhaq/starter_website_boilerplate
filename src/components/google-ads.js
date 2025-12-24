"use client"

import { useEffect } from 'react'

export function GoogleAds({ GADS_CONVERSION_ID, GADS_CONVERSION_LABEL }) {
  useEffect(() => {
    if (!GADS_CONVERSION_ID) return

    // Load Google Ads script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GADS_CONVERSION_ID}`
    document.head.appendChild(script)

    const configScript = document.createElement('script')
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GADS_CONVERSION_ID}');
    `
    document.head.appendChild(configScript)

    return () => {
      // Cleanup scripts on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(configScript)) {
        document.head.removeChild(configScript)
      }
    }
  }, [GADS_CONVERSION_ID])

  // Function to track conversions (can be called from forms, buttons, etc.)
  useEffect(() => {
    if (!GADS_CONVERSION_ID || !GADS_CONVERSION_LABEL) return

    window.trackConversion = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': `${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}`,
          'value': 1.0,
          'currency': 'USD'
        })
      }
    }
  }, [GADS_CONVERSION_ID, GADS_CONVERSION_LABEL])

  return null
}

// Helper function to track conversions from anywhere in the app
export const trackGoogleAdsConversion = () => {
  if (typeof window !== 'undefined' && window.trackConversion) {
    window.trackConversion()
  }
}