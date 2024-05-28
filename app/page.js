import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/courses'}>
      Go to Course page
      </Link>
    </div>
  );
}
