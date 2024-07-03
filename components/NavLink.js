import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, classnametopass }) => {
  const router = usePathname();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={` ${classnametopass[0]} ${isActive ? classnametopass[1] : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
