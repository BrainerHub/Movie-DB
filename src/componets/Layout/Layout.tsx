import Header from "../header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default Layout
