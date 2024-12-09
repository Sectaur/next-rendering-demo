import ImageSlider from '@/components/ImageSlider';
import { ServerSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  console.log('Server route rendered...');
  const result = ServerSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
