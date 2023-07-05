import { Tooltip } from 'antd';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description?: string;
}

type Props = PropsWithChildren<ChartProps>;

const Chart: FC<Props> = (props) => {
  return (
    <div
      className={`bg-background max-h-[550px] px-1 md:p-6 pb-20 w-full aspect-auto ${
        props.className ?? ''
      }`}
    >
      <h1 className='text-foreground font-sans font-semibold text-lg text-center'>{props.title}</h1>
      <p className='text-foreground font-sans font-light text-lg text-center'>
        <Tooltip title={props.description} id={props.title} className='w-full'>
          <span>{props.subtitle}</span>
        </Tooltip>
      </p>
      <div className='max-h-[500px]'>{props.children}</div>
      <div>
        <p className='text-slate-500 text-sm'>Fonte: saude.rs.gov</p>
      </div>
    </div>
  );
};

export { Chart };
