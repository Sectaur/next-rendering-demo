import { cookies } from "next/headers";

export default function About() {
    const cookieStore = cookies();
    const theme = cookieStore.get('theme'); 

    console.log('server rendering about');
  return (
    <div>
      <h1>About Us {new Date().toLocaleTimeString()}</h1>
      <p>Theme: {theme?.value}</p>
    </div>
  );
}
