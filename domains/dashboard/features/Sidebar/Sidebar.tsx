import Link from 'next/link';
import { RiPieChartLine } from 'react-icons/ri';
import { TfiDownload } from 'react-icons/tfi';
import { BiHomeAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

const linkStyle =
  'bg-foregroundLight rounded-full p-3 hover:bg-foregroundExtraLight transition duration-300 ease-in';

const Sidebar = (): ReactNode => {
  const { asPath } = useRouter();

  const isColorActive = (path: string): string => {
    return asPath === path ? '#ffff' : '#999999';
  };

  const isLinkActive = (path: string): string => {
    return asPath === path ? linkStyle : '';
  };

  return (
    <aside className='bg-primary bg-opacity-80 fixed w-full h-16 bottom-0 md:h-screen md:w-16 md:left-0 z-0 flex items-center justify-center md:flex-col backdrop-blur-sm'>
      <Link href='/' className={isLinkActive('/')}>
        <BiHomeAlt size={23} color={isColorActive('/')} />
      </Link>
      <Link href='/dashboard' className={`mx-8 md:my-8 ${isLinkActive('/dashboard')}`}>
        <RiPieChartLine size={23} color={isColorActive('/dashboard')} />
      </Link>
      <Link href='/download' type='button' className={isLinkActive('/download')}>
        <TfiDownload size={23} color={isColorActive('/download')} />
      </Link>
    </aside>
  );
};

export { Sidebar };
