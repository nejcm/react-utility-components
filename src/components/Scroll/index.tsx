import {useEffect} from 'react';

export const ScrollToTop: React.SFC = () => {
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const ScrollToTopOnMount: React.SFC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export const ScrollToFragment: React.SFC = () => {
  const hash = window.location.hash;

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.pageYOffset;
        window.scrollTo(0, top);
      }
    }
  }, [hash]);
  return null;
};
