import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex flex-row w-full justify-between">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default Layout;
