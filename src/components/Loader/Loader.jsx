import { Hourglass } from 'react-loader-spinner';

export function Loader() {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#121821']}
    />
  );
}
