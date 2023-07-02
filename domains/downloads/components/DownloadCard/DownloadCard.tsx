import { type ReactNode } from 'react';
import { downloadUrls } from '@/domains/downloads/lib/download-urls';

const DownloadCard = (): ReactNode => {
  return (
    <>
      {downloadUrls.map((link) => (
        <a
          key={link.download}
          href={link.download}
          target='_blank'
          rel='noreferrer'
          className={`bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-indigo-400 transition-colors shadow-2xl p-5 rounded-md ${link.span}`}
        >
          <h1 className='text-sm font-medium font-secondary text-center'>{link.title}</h1>
        </a>
      ))}
    </>
  );
};

export { DownloadCard };
