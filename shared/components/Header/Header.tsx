import { type FC, type PropsWithChildren, type ReactNode } from 'react';

type Props = PropsWithChildren;

const HeaderRoot: FC<Props> = ({ children }): ReactNode => {
  return (
    <header className='bg-primary bg-opacity-80 fixed backdrop-blur-sm text-foreground z-50 w-full h-16 flex items-center justify-center sm:justify-between px-5 md:px-8 py-1'>
      {children}
    </header>
  );
};

export { HeaderRoot };
