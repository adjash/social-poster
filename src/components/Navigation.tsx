import Link from "next/link";
const Navigation = () => {
  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/profile",
      text: "Profile",
    },
  ];
  return (
    <nav className="border-b-2 border-gray-400 mb-2">
      <ul>
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
