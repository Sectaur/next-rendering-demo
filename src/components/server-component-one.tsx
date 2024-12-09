import fs from 'fs';

export default function ServerComponentOne() {
  fs.readFileSync('src/components/server-component-one.tsx', 'utf-8');
  return <h1>Server Component One</h1>;
}
