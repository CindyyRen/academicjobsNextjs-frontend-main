import Link from 'next/link';
import Image from 'next/image';

type NavLinkProps = {
  url: string;
  icon?: string;
  navLink: string;
  forceClass?: string;
};

export default function NavLink({
  url,
  icon,
  navLink,
  forceClass,
}: NavLinkProps) {
  const iconWidth = 22;
  const iconHeight = 22;
  return (
    <Link href={url} passHref>
      <div className="nav-link nav-link-ltr whitespace-nowrap text-gray-900">
        <span className="flex flex-row items-center justify-center gap-1 m-auto">
          {icon && (
            <Image
              className={`nav-icon ${forceClass}`}
              src={icon ? icon : '#'}
              alt={navLink}
              width={iconWidth}
              height={iconHeight}
              style={{ height: `${iconHeight}px`, marginLeft: '-12px' }}
            />
          )}
          <span className="flex flex-col">
            <span>{navLink}</span>
          </span>
        </span>
      </div>
    </Link>
  );
}
