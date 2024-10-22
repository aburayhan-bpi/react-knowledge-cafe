import Profile from "../../assets/profile.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 m-4 border-b-2 w-10/12 mx-auto">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </header>
  );
};

export default Header;
