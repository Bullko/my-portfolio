import HeaderStyles from "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>AntonK</h1>
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
