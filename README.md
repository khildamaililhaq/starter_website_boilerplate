# Modern Tech Startup Landing Page

A modern, SEO-friendly landing page built with Next.js 16, featuring Google Analytics and Google Ads integration, dark/light mode, and professional animations.

## Features

- 🚀 **Next.js 16** with App Router
- 🎨 **Modern UI** with shadcn/ui components
- 🌙 **Dark/Light Mode** with next-themes
- 📱 **Mobile-First** responsive design
- 🎭 **Framer Motion** animations
- 🔍 **SEO Optimized** with structured data
- 📊 **Google Analytics** integration
- 📢 **Google Ads** conversion tracking
- ⚡ **Performance Optimized**

## Getting Started

### 1. Clone and Install

```bash
git clone <repository-url>
cd starter_website
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

The `.env.example` file contains all required environment variables with placeholder values. Edit `.env.local` with your actual values:

```env
# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Google Ads
NEXT_PUBLIC_GADS_CONVERSION_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GADS_CONVERSION_LABEL=XXXXXXXXXXXXX

# Website Configuration
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_SITE_NAME=Your Company Name
```

### 3. Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add it to `NEXT_PUBLIC_GA_TRACKING_ID`

### 4. Google Ads Setup

1. Go to [Google Ads](https://ads.google.com/)
2. Navigate to Tools & Settings > Measurement > Conversions
3. Create a new conversion action
4. Get your Conversion ID and Conversion Label
5. Add them to `NEXT_PUBLIC_GADS_CONVERSION_ID` and `NEXT_PUBLIC_GADS_CONVERSION_LABEL`

### 5. SEO Configuration

Update the following files with your actual information:

- `src/app/layout.js` - Update metadata, verification codes
- `public/robots.txt` - Update sitemap URL
- `src/app/sitemap.js` - Already configured for environment variables

### 6. Run Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph and Twitter Card support
- ✅ Structured data (JSON-LD)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt optimization
- ✅ Canonical URLs
- ✅ Mobile-friendly design

## Analytics & Ads Integration

- ✅ Google Analytics 4 tracking
- ✅ Google Ads conversion tracking
- ✅ Automatic page view tracking
- ✅ Form submission conversion tracking
- ✅ Environment-based configuration

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with analytics
│   ├── page.js            # Home page
│   ├── about/
│   │   └── page.js        # About page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── google-analytics.js    # GA integration
│   ├── google-ads.js          # Google Ads integration
│   ├── navigation.js          # Site navigation
│   └── theme-provider.js      # Theme management
└── lib/
    └── seo.js             # SEO utilities
```

## Customization

### Colors and Branding
Update `tailwind.config.js` and CSS variables in `globals.css` for custom branding.

### Content
Edit the section components in `src/app/sections/` to update content.

### Images
Replace images in `public/img/` with your own assets.

## GitHub Copilot Guidelines

This boilerplate includes comprehensive guidelines for customizing and extending the landing page. See [`GITHUB_COPILOT_GUIDELINES.md`](GITHUB_COPILOT_GUIDELINES.md) for:

- Detailed customization instructions
- SEO and analytics setup
- Best practices for client projects
- Development workflow guidelines
- Common customization patterns

## Performance

- Lighthouse score: 95+ (typical)
- Core Web Vitals optimized
- Images automatically optimized
- Fonts preloaded
- CSS/JS minified

## Support

For questions or issues, please check the Next.js documentation or create an issue in the repository.
