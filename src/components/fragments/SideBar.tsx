import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white">
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mb-4">
            <Link href="/platforms">Platforms</Link>
          </li>
          <li className="mb-4">
            <Link href="/error">testing error</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
