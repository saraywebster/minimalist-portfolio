export const Footer = () => {
  return (
    <footer className="bg-indigo-50 w-full py-6 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-sm font-light font-sans">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold tracking-wide text-indigo-600">
            saraywebster.dev
          </span>
        </p>

        <p className="text-gray-500 text-xs">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
