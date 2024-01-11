import "./header.css";
import Logo from "../../assets/nutri.dev_logo.png";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} />
      <h1 className="title">Diário Alimentar</h1>
    </div>
  );
}

export default Header;
