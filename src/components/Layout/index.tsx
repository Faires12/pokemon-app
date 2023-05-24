import { ReactNode } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pokedéx",
    path: "/list",
  },
  {
    name: "Legendaries",
    path: "/legendaries",
  },
];

export const Layout = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.main}>
        <img src="/Logo.png" className={styles.image}/>
        <div className={styles.paths}>
          {nav.map((path) => (
            <p
              className={styles.path}
              style={{
                textDecoration:
                  location.pathname === path.path ? "underline" : "none",
              }}
              onClick={() => navigate(path.path)}
            >
              {path.name}
            </p>
          ))}
        </div>
      </div>
      {children}
    </>
  );
};
