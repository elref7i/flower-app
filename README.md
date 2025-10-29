# 🌸 Flower E-Commerce App

A modern, responsive e-commerce application built with Next.js 14, featuring a beautiful flower and gift shop with internationalization support.

## ✨ Features

- 🌍 **Multi-language Support** - Arabic and English with Next.js i18n
- 📱 **Responsive Design** - Mobile-first approach with optimized breakpoints
- 🎨 **Modern UI** - Built with Tailwind CSS and Radix UI components
- 🔐 **Authentication** - NextAuth.js integration with secure login
- 🛒 **E-commerce** - Product catalog, categories, and shopping cart
- 🎁 **Gift Categories** - Specialized sections for different occasions
- ⚡ **Performance** - Optimized images, lazy loading, and code splitting
- 🌙 **Dark Mode** - Theme toggle with persistent preferences
- 📊 **Admin Dashboard** - Product and category management
- 🔍 **Search & Filters** - Advanced product filtering and search

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: NextAuth.js
- **State Management**: TanStack Query
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd flower-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables in `.env.local`:

   ```env
   API=https://flower.elevateegy.com/api/v1
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   NEXT_PUBLIC_API_URL=https://flower.elevateegy.com/api/v1
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build artifacts

## 🎨 Design System

The project uses a consistent design system with:

- **Responsive Utilities**: Custom CSS classes for consistent spacing and layout
- **Color Palette**: Maroon and pink theme with dark mode support
- **Typography**: Responsive text sizes with proper scaling
- **Components**: Reusable UI components with consistent styling

### CSS Utilities

- `.section-padding` - Responsive horizontal padding
- `.container-padding` - Container-specific padding
- `.section-margin` - Consistent vertical margins
- `.responsive-grid-*` - Responsive grid layouts
- `.responsive-text-*` - Responsive typography

## 🌐 Internationalization

The app supports multiple languages:

- **English** (en) - Default language
- **Arabic** (ar) - RTL support included

Language files are located in `src/i18n/messages/` and the app automatically detects the user's preferred language.

## 📱 Responsive Breakpoints

- **xs**: 320px - Extra small devices
- **sm**: 640px - Small devices
- **md**: 768px - Medium devices
- **lg**: 1024px - Large devices
- **xl**: 1280px - Extra large devices
- **2xl**: 1536px - 2X large devices

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository

2. **Configure Environment Variables**

   - Set all required environment variables in Vercel dashboard
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

3. **Deploy**
   - Click "Deploy" and wait for the build to complete

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── (website)/     # Public website pages
│   │   ├── admin/         # Admin dashboard
│   │   └── auth/          # Authentication pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── common/           # Common components
│   ├── features/         # Feature-specific components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
├── i18n/                 # Internationalization setup
└── hooks/                # Custom React hooks
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled UI components
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

For support, email support@example.com or create an issue in the repository.

---

Made with ❤️ using Next.js and modern web technologies.
