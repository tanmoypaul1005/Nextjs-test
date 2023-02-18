import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {

  const router=useRouter();

  return (
    <div className={styles.container}>
      <title>Paul</title>
       
      <Link href="/blog/1" replace><h3 className="">Blog 1</h3></Link>
      <Link href="/blog/2" replace> <h3>Blog 2</h3></Link>
      <Link href="/blog/3" replace><h3>Blog 3</h3></Link>
      <Link href="/blog/4"  replace><h3>Blog 4</h3></Link>
      <Link href="/blog/5" replace><h3>Blog 5</h3></Link>

      <button onClick={()=>{router.push("/Person/Man")}}>Man</button>

    </div>
  );
}
