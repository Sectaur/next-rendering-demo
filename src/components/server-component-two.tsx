import fs from 'fs';
import ServerComponentOne from './server-component-one';

export default function ServerComponentTwo() {
  fs.readFileSync('src/components/server-component-two.tsx', 'utf-8');
  return (
    <>
      <ServerComponentOne />
      <h1>Server Component Two</h1>
    </>
  );
}
