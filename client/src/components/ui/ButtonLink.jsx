import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-[#78350f] px-6 py-3 rounded-md">
    {children}
  </Link>
);
