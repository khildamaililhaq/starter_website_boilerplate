# GitHub Copilot Guidelines: Modern Landing Page Boilerplate

## Overview
This is a production-ready, modern landing page boilerplate built with Next.js 16, featuring SEO optimization, Google Analytics integration, and a clean, professional design. Perfect for tech startups, SaaS companies, and digital agencies.

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.js                # Root layout with SEO & analytics
│   ├── page.js                  # Home page
│   ├── about/                   # About page
│   │   ├── layout.js           # Page-specific metadata
│   │   ├── page.js             # About page component
│   │   └── sections/           # About page sections
│   ├── contact/                 # Contact page
│   │   ├── layout.js           # Page-specific metadata
│   │   ├── page.js             # Contact page component
│   │   └── sections/           # Contact page sections
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── ui/                     # shadcn/ui components
│   ├── navigation.js           # Main navigation
│   ├── footer.js               # Site footer
│   ├── theme-provider.js       # Dark/light theme
│   ├── google-analytics.js     # GA4 integration
│   ├── google-ads.js           # Google Ads tracking
│   └── main-layout.js          # Layout wrapper
└── lib/                        # Utility functions
    └── seo.js                  # SEO helpers
```

## 🎨 Customization Guide

### 1. Content Customization

#### Hero Section (`src/app/hero-section.js`)
```javascript
// Update these values for each client:
const heroContent = {
  title: "Your Compelling Headline",
  subtitle: "Your value proposition here",
  ctaPrimary: "Primary CTA Text",
  ctaSecondary: "Secondary CTA Text",
  image: "/your-hero-image.jpg"
}
```

#### Company Information
Update in multiple files:
- `src/app/layout.js` - Site metadata
- `src/lib/seo.js` - Structured data
- Contact information in contact sections
- Footer component

### 2. Branding & Styling

#### Colors (`src/app/globals.css`)
```css
:root {
  --primary: your-brand-color;
  --secondary: your-secondary-color;
}
```

#### Logo & Images
- Replace `/public/logo.png`
- Update `/public/og-image.jpg` for social sharing
- Add client-specific images to `/public/img/`

### 3. SEO Configuration

#### Basic SEO (`src/app/layout.js`)
```javascript
export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
  keywords: ["your", "keywords"],
}
```

#### Google Analytics & Ads (`.env.local`)
```env
NEXT_PUBLIC_GA_TRACKING_ID=G-YOUR-GA-ID
NEXT_PUBLIC_GADS_CONVERSION_ID=AW-YOUR-ADS-ID
NEXT_PUBLIC_GADS_CONVERSION_LABEL=YOUR-CONVERSION-LABEL
```

### 4. Adding New Sections

#### Create Section Component
```javascript
// src/app/sections/new-section.js
export function NewSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Your section content */}
      </div>
    </section>
  )
}
```

#### Add to Page
```javascript
// src/app/page.js
import { NewSection } from "./new-section"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <NewSection />  {/* Add here */}
      <FeaturesSection />
      <CTASection />
    </MainLayout>
  )
}
```

## 📱 Responsive Design Guidelines

### Breakpoint Strategy
- `sm:` 640px+ (mobile landscape)
- `md:` 768px+ (tablet)
- `lg:` 1024px+ (desktop)
- `xl:` 1280px+ (large desktop)

### Mobile-First Approach
```javascript
// Always start with mobile styles, then enhance
className="text-sm md:text-base lg:text-lg"
```

## 🔍 SEO Best Practices

### Page-Specific SEO
1. Create `layout.js` in each page directory
2. Include relevant keywords in metadata
3. Add canonical URLs
4. Optimize images with alt text

### Content SEO
- Use semantic HTML (`<h1>`, `<h2>`, etc.)
- Include target keywords naturally
- Add internal linking
- Optimize meta descriptions (150-160 characters)

## 📊 Analytics & Tracking

### Google Analytics Setup
1. Get GA4 property ID
2. Update `.env.local`
3. Verify tracking in GA dashboard

### Google Ads Conversion Tracking
1. Create conversion in Google Ads
2. Get conversion ID and label
3. Update environment variables
4. Test conversion tracking

## 🎯 Conversion Optimization

### CTA Best Practices
- Use action-oriented language
- Create urgency when appropriate
- A/B test different variations
- Track conversions properly

### Form Optimization
- Keep forms short (3-5 fields max)
- Use clear labels and placeholders
- Add validation feedback
- Include privacy assurance

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Update all content and branding
- [ ] Configure SEO metadata
- [ ] Set up analytics tracking
- [ ] Test all forms and CTAs
- [ ] Optimize images
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS

### Environment Setup
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in actual values
- [ ] Test in staging environment
- [ ] Verify analytics tracking

## 🛠️ Development Workflow

### Adding New Features
1. Create component in appropriate directory
2. Follow existing naming conventions
3. Add proper TypeScript types if needed
4. Test across all breakpoints
5. Update documentation

### Code Quality
- Follow SOLID principles
- Keep components under 100 lines
- Use semantic class names
- Add comments for complex logic
- Test builds regularly

## 📋 Client Onboarding Template

When using this boilerplate for clients:

1. **Discovery Phase**
   - Gather brand assets and content
   - Define target audience and goals
   - Identify key messaging and CTAs

2. **Setup Phase**
   - Clone repository
   - Configure environment variables
   - Update branding and content
   - Set up analytics

3. **Customization Phase**
   - Modify sections as needed
   - Add client-specific features
   - Optimize for conversions
   - Test thoroughly

4. **Launch Phase**
   - Deploy to production
   - Verify analytics setup
   - Monitor performance
   - Plan optimization iterations

## 🔧 Common Customizations

### E-commerce Integration
- Add product catalog sections
- Integrate payment forms
- Add shopping cart functionality
- Implement user authentication

### Blog/News Section
- Add dynamic routing for articles
- Create blog listing and detail pages
- Add category/tag filtering
- Implement search functionality

### Multi-language Support
- Add internationalization (i18n)
- Create language switcher
- Translate all content
- Handle RTL languages if needed

## 📞 Support & Maintenance

### Regular Maintenance
- Update dependencies quarterly
- Monitor analytics performance
- Refresh content regularly
- Backup configurations

### Performance Monitoring
- Use Lighthouse for performance scores
- Monitor Core Web Vitals
- Track conversion rates
- A/B test improvements

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

This boilerplate provides a solid foundation for modern web development with best practices built-in. Customize thoughtfully and maintain code quality for long-term success.