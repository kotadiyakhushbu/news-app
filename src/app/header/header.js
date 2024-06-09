"use client";
import "../custom.css";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <nav>
        <ul className="custom-ul-list">
          <li>
            <Link href="../newsapp"> News App</Link>{" "}
          </li>
          <li>
            <Link href="../jokes">All Jokes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
