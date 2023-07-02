import Link from 'next/link';
import { RiPieChartLine } from 'react-icons/ri';
import { BiHomeAlt, BiCloudDownload } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

const prettyUrl =
  'bg-foregroundLight rounded-full p-2 hover:bg-foregroundExtraLight transition-all duration-300 ease-in';

const Sidebar = (): ReactNode => {
  const { asPath } = useRouter();

  const isColorActive = (path: string): string => (asPath === path ? '#ffff' : '#999999');
  const isLinkActive = (path: string): string => (asPath === path ? prettyUrl : '');

  return (
    <aside className='bg-primary bg-opacity-80 fixed z-10 w-full h-16 bottom-0 md:h-screen md:w-16 md:left-0 flex items-center justify-center md:flex-col backdrop-blur-sm'>
      <Link href='/' className={`p-2 ${isLinkActive('/')}`}>
        <BiHomeAlt size={23} color={isColorActive('/')} />
      </Link>
      <Link href='/dashboard' className={`p-2 mx-5 md:my-5 ${isLinkActive('/dashboard')}`}>
        <RiPieChartLine size={23} color={isColorActive('/dashboard')} />
      </Link>
      <Link href='/download' type='button' className={`p-2 ${isLinkActive('/download')}`}>
        <BiCloudDownload size={20} color={isColorActive('/download')} />
      </Link>
    </aside>
  );
};

export { Sidebar };
