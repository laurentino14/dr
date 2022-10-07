import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {HeaderLogged} from "./HeaderLogged";

import {HeaderNotLogged} from "./HeaderNotLogged";

export const Header = () => {
  const {user} = useContext(AuthContext);
  return <>{user === null ? <HeaderNotLogged /> : <HeaderLogged />}</>;
};
