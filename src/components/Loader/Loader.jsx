import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <p>Loading contacts ...</p>
      <InfinitySpin
        visible={true}
        width="200"
        color="#ffd311"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
