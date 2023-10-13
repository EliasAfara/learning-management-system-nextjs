import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className='p-0 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
