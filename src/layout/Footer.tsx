const updateYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-4">
      <p className="text-sm text-gray-700">
        Copyright &copy; {updateYear} Amy Lee. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
