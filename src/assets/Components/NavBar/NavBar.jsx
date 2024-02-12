import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Navar() {
  return (
    <header>
      <Link to="/">
        <img width={50} src="/atomo.png"/>
      </Link>
      <nav>
        <NavLink to="/category/Teclados">Teclados</NavLink>
        <NavLink to="/category/Ratones">Ratones</NavLink>
        <NavLink to="/category/Auriculares">Auriculares</NavLink>
        <NavLink to="/"><CiShoppingCart /></NavLink>
      </nav>
    </header>
  );
}
