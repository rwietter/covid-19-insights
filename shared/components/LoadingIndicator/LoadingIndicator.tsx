import { type ReactNode, useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';

const LoadingIndicator = (): ReactNode => {
  const [progress, setProgress] = useState(false);

  LoaderRouterIndicator.config({
    barColors: {
      0: '#DA22FF',
      1.0: '#00dbde',
    },
    barThickness: 4,
    shadowBlur: 2,
    shadowColor: 'rgba(0, 0, 0, .7)',
  });

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
  });

  return <div>{progress && <LoaderRouterIndicator />}</div>;
};

export { LoadingIndicator };
