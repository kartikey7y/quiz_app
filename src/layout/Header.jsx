const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#E1F396] shadow-md">
      <div className="flex justify-between py-[1.5rem] px-4">
        <span className="font-bold">Quiz App</span>
        <div>
          <span className="mr-4">Sign up</span>
          <span className="py-[0.8rem] px-[1.2rem] bg-[#015055] text-white rounded-[2rem] cursor-pointer">
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
