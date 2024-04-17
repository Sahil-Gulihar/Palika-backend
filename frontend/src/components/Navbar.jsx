import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="text-white ">
      <ul className="flex justify-center p-8">
        <li className="p-4"><Link to="/">Home</Link></li>
        <li className="p-4"><Link to='/categories'>Categories</Link></li>
        <li className="p-4"><Link to='/xyz'>Shops</Link></li>
        <li className="p-4"><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
};
