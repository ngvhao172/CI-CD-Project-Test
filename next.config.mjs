import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/shared/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/* @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    compiler: {
      styledComponents: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ['@electric-sql/pglite'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-ap-northeast-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'ecbo-production.s3-ap-northeast-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'cloak.ecbo.io',
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
        },
        {
          protocol: 'https',
          hostname: 'ecbo-cloak-production.s3.ap-northeast-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn-poc-luggage-s3.s3.ap-northeast-1.amazonaws.com',
        },
      ],
    },
  }),
);

