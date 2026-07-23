import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../components/ThemeProvider";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import robotSvg from "../assets/robot.svg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-sm text-center">
        <img
          src={robotSvg}
          alt="Lost robot"
          className="mx-auto mb-8 w-48 h-48 opacity-80"
        />
        <h1 className="text-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-sm text-center">
        <img
          src={robotSvg}
          alt="Error robot"
          className="mx-auto mb-8 w-48 h-48 opacity-80"
        />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Irsyam Okta Pratama Riyadi | Fullstack Developer" },
      {
        name: "description",
        content: "Portfolio resmi Irsyam Okta Pratama Riyadi, seorang Fullstack Developer yang berfokus pada pengembangan aplikasi web, REST API, Laravel, dan teknologi cloud.",
      },
      {
        name: "keywords",
        content: "Irsyam Okta Pratama Riyadi, Irsyam Okta, Fullstack Developer Indonesia, Backend Developer Indonesia, Laravel Developer, Web Developer Indonesia, REST API Developer, Software Engineer, Portfolio Developer, Information Systems Developer",
      },
      { name: "author", content: "Irsyam Okta Pratama Riyadi" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Irsyam Okta Pratama Riyadi | Fullstack Developer" },
      {
        property: "og:description",
        content: "Explore projects, experience, and skills of Irsyam Okta Pratama Riyadi in web development, backend engineering, and digital solutions.",
      },
      { property: "og:image", content: "https://pratamaryd.space/og.png" },
      { property: "og:url", content: "https://pratamaryd.space" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Irsyam Okta Pratama Riyadi | Fullstack Developer" },
      {
        name: "twitter:description",
        content: "Portfolio website showcasing Irsyam Okta Pratama Riyadi's projects, skills, and experience in web development.",
      },
      { name: "twitter:image", content: "https://pratamaryd.space/og.png" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "YHTTNkmsgG_Rf5hmJpJWrzlq4-2qTvE-s1qVqfSi9S8" },
    ],
    links: [
      { rel: "canonical", href: "https://pratamaryd.space" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('vite-ui-theme') || 'dark';
                if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
