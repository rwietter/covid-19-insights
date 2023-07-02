import { type FC } from 'react';
import { VscDesktopDownload } from 'react-icons/vsc';

interface Props {
  action: () => void;
}

const DownloadImage: FC<Props> = (props) => {
  return (
    <button onClick={props.action} className='self-end'>
      <VscDesktopDownload
        size={22}
        className='fill-indigo-400 hover:fill-indigo-300 transition-colors'
      />
    </button>
  );
};

export { DownloadImage };
