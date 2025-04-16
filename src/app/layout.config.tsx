import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v3" />
          <path d="M18.5 4.5 16 7" />
          <path d="M21 12h-3" />
          <path d="M18.5 19.5 16 17" />
          <path d="M12 21v-3" />
          <path d="M5.5 19.5 8 17" />
          <path d="M3 12h3" />
          <path d="M5.5 4.5 8 7" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
        Decorated Factory
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
