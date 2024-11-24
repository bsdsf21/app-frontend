const Header = () => (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">NEWSLETTER</h1>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li>Politics</li>
            <li>World</li>
            <li>Economy</li>
            <li>Science & Tech</li>
            <li>Business</li>
            <li>Travel</li>
          </ul>
        </nav>
        <span className="text-sm">Search</span>
      </div>
    </header>
  );
  export default Header;
  