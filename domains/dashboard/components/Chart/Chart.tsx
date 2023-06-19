import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
}

type Props = PropsWithChildren<ChartProps>;

const Chart: FC<Props> = (props) => {
  return (
    <div
      className={`bg-background max-h-[550px] px-1 md:p-6 pb-20 w-full aspect-auto ${props.className ?? ''}`}
    >
      <h1
        className='text-foreground font-sans font-semibold text-lg text-center'
      >
        {props.title}
      </h1>
      <p
        className='text-foreground font-sans font-light text-lg text-center'
      >
        {props.subtitle}
      </p>
      {props.children}
    </div>
  );
};

export { Chart };
