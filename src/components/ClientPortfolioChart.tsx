'use client';

import dynamic from 'next/dynamic';

// dynamically load the real chart, only on the client
const PortfolioChart = dynamic(
  () => import('@/components/PortfolioChart'),
  { ssr: false }
);

export default function ClientPortfolioChart() {
  return <PortfolioChart />;
}
