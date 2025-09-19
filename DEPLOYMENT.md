# Deployment Guide

## Vercel Deployment

### Prerequisites

- Vercel account
- GitHub repository with the project
- Environment variables configured

### Environment Variables Required

Set these in your Vercel dashboard under Project Settings > Environment Variables:

```
API=https://flower.elevateegy.com/api/v1
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_API_URL=https://flower.elevateegy.com/api/v1
NODE_ENV=production
```

### Deployment Steps

1. **Connect Repository**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**

   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install`

3. **Set Environment Variables**

   - Add all required environment variables in Vercel dashboard
   - Make sure to set them for Production, Preview, and Development environments

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be available at `https://your-project.vercel.app`

### Performance Optimizations

The project includes several performance optimizations:

- **Image Optimization**: Next.js Image component with WebP/AVIF formats
- **Bundle Optimization**: Tree shaking and code splitting
- **Caching**: Static assets cached for 1 year
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **SEO**: Proper meta tags and structured data

### Monitoring

- Use Vercel Analytics for performance monitoring
- Set up error tracking with Sentry (optional)
- Monitor Core Web Vitals in Google Search Console

### Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable SSL (automatic with Vercel)

### Troubleshooting

**Build Failures:**

- Check environment variables are set correctly
- Verify API endpoints are accessible
- Review build logs for specific errors

**Performance Issues:**

- Use Vercel Analytics to identify bottlenecks
- Optimize images and reduce bundle size
- Implement proper caching strategies

**API Issues:**

- Verify API_URL environment variable
- Check CORS settings on your API
- Ensure API endpoints are accessible from Vercel's IPs
