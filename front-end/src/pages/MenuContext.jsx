import React from "react";

import { createContext, useContext, useState } from "react";

const MenuProvider = createContext(null);

export const useMenu = () =>  useContext(MenuProvider);

 function Menu ({ children })  {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    
  return (
  
      <MenuProvider.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        {children}
      </MenuProvider.Provider>
 
    
  );
};

export default Menu;








// import { createContext, useContext, useState } from "react";

// const MenuContext = createContext(null);

// export const useMenu = () => useContext(MenuContext);

//  function MenuProvider({ children }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div>
//     <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
//       {children}
//     </MenuContext.Provider>


//     </div>
//   );
// }
// export default MenuProvider