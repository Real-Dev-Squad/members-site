import Image from "next/image";
import Link from "next/link";

export default function Socials({
  url,
  icon,
  alt,
}: {
  url: string;
  icon: string;
  alt: string;
}) {
  return (
    <Link onClick={(e) => e.stopPropagation()} target="_blank" href={url}>
      <Image src={icon} alt={alt} width={44} height={44} />
    </Link>
  );
}
