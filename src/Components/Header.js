import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./img/logo.svg" />
        <h1>AntonK</h1>
      </div>
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
