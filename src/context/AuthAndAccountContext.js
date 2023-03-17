import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //connect json file and store your array here->
  const accountsArray = [
    {
      name: "raj",
      accNo: "1",
      balance: 60000,
      type: "savings",
      password: "abc",
      address: "sodfja",
    },
    {
      name: "Neha",
      accNo: "2",
      balance: 50000,
      type: "savings",
      password: "abc",
      address: "lsjdlfj",
    },
    {
      name: "Bjaj",
      accNo: "3",
      balance: 40000,
      type: "current",
      verified: true,
      password: "abc",
      address: "lsjdlfj",
      licence: "jslajf",
    },
    {
      name: "Tata",
      accNo: "4",
      balance: 70000,
      type: "current",
      verified: true,
      password: "abc",
      address: "lsjdlfj",
      licence: "jslajf",
    },
  ];
  const [accounts, setAccounts] = useState(accountsArray);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) console.log(`user change: ${user.name}`);
  }, [user]);

  const addAccount = (details) => {
    setAccounts((oldAccounts) => [...oldAccounts, details]);
    console.log(`details added`);
  };

  const uploadDocs = ({ index, address, licence }) => {
    const newAccounts = [...accounts];
    newAccounts[index].address = address;
    newAccounts[index].licence = licence;
    setAccounts(newAccounts);
  };

  const authenticate = ({ name, password }) => {
    let isCorrect = false;
    console.log(
      `accNO : ${name} type: ${typeof name},, pas: ${password}: type: ${typeof password}`
    );
    accounts.forEach((account, index) => {
      console.log(`no: ${account.name}, pass: ${account.password}`);
      if (account.name === name) {
        console.log(`in first if`);
        if (account.password === password) {
          console.log(`in second if what`);
          isCorrect = true;
          setUser(accounts[index]);
        } else {
          isCorrect = false;
        }
      }
    });
    return isCorrect;
  };

  const isAccountPresent = (name) => {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].name === name) return accounts[i];
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        accounts,
        addAccount,
        authenticate,
        isAccountPresent,
        user,
        uploadDocs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
