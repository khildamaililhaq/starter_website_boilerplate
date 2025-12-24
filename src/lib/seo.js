export function generateStructuredData({
  title,
  description,
  url,
  image,
  siteName,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description: description,
    url: url,
    image: image,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${url}/logo.png`
      }
    }
  }

  if (type === 'Article' && publishedTime) {
    baseData.datePublished = publishedTime
    baseData.dateModified = modifiedTime || publishedTime
    baseData.author = {
      '@type': 'Person',
      name: author
    }
    baseData.articleSection = section
    baseData.keywords = tags.join(', ')
  }

  // Add Organization structured data for business info
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: url,
    logo: `${url}/logo.png`,
    description: description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@techstart.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/yourcompany',
      'https://linkedin.com/company/yourcompany',
      'https://github.com/yourcompany'
    ]
  }

  return [baseData, organizationData]
}

export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}