# 🚀 Formy.ai - The Intelligent AI-Powered Form Builder

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Kinde Auth](https://img.shields.io/badge/Auth-Kinde-000000?style=for-the-badge&logo=kinde&logoColor=white)](https://kinde.com/)

**Formy.ai** is a modern, high-performance form building platform that leverages **Artificial Intelligence** to help you design, deploy, and analyze high-converting forms in seconds. No coding, no friction—just smart forms that work.

---

## ✨ Key Features

- **🤖 AI Form Engine**: Generate complex form structures instantly using advanced AI prompts.
- **🎨 Custom Branding**: Total control over your form's identity with real-time primary and background color customization.
- **📊 Real-time Analytics**: Track views, total responses, and conversion rates directly from your professional dashboard.
- **🖱️ Drag-and-Drop Builder**: An intuitive, glassmorphic canvas interface built with `@dnd-kit`.
- **🔐 Secure Authentication**: Enterprise-grade security powered by **Kinde Auth**.
- **📱 Responsive by Design**: Forms that look stunning on every device—from desktop to mobile.
- **⚡ Built for Speed**: Powered by Next.js 14 and Neon DB for lightning-fast performance.
- **🔍 Professional SEO**: Fully optimized with dynamic meta tags, sitemaps, robots.txt, and JSON-LD structured data.
- **⏳ Expiry & Limit Rules**: Define response cut-offs seamlessly.
- **📧 Email Notifications**: Automated creator summaries on submission loops.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Prisma](https://www.prisma.io/) with [Neon (PostgreSQL)](https://neon.tech/)
- **Authentication**: [Kinde Auth](https://kinde.com/)
- **AI Integration**: [Google Gemini AI API](https://ai.google.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/1xcoder-1/formy_ai.git
cd formy_ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:

```env
# Database (Neon/Postgres)
DATABASE_URL="your-neon-db-url"
DIRECT_DATABASE_URL="your-neon-direct-url"

# Kinde Auth
KINDE_CLIENT_ID=your_id
KINDE_CLIENT_SECRET=your_secret
KINDE_ISSUER_URL=https://your-domain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

# AI Settings
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Migration
```bash
npx prisma db push
```

### 5. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start building!

---

## 📦 Deployment

Deploy easily on **Vercel** with these steps:
1. Connect your GitHub repository to Vercel.
2. Add all environment variables from your `.env` to the Vercel project settings.
3. Update your **Kinde Callback URLs** in the Kinde Dashboard to match your Vercel production URL.
4. Vercel will automatically run `npm run build` and `prisma generate`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information (if applicable).

Built with ❤️ by [1xcoder-1](https://github.com/1xcoder-1)









Email Notifications: Integrate a service like Resend or SendGrid to automatically email the form creator whenever a new response is submitted.


Form Expiry & Limits: Add settings for "Maximum Responses" or "Expiry Date" to the FormSettings model, automatically disabling the form when criteria are met.