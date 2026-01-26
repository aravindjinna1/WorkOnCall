// import React, { Children } from 'react'

// import {createContext, useContext, useState} from 'react'

// const SearchValueProvider = createContext(null);
// export const useSearchInp =() => useContext(SearchValueProvider);

// const SearchContext = ({ Children }) => {

//     const [searchInp, setSearchInp] = useState();

//   return (
//     <div>
//       <SearchValueProvider.Provider value={{ searchInp, setSearchInp } }>
//        {Children}
//       </SearchValueProvider.Provider>
//     </div>
//   )
// }

// export default SearchContext














import React from "react";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
