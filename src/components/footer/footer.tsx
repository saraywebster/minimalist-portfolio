export const Waves = () => {
  return (
    <div className="absolute bottom-0  w-full left-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E8EAF6"
          fill-opacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,112C384,107,480,53,576,26.7C672,0,768,0,864,53.3C960,107,1056,213,1152,213.3C1248,213,1344,107,1392,53.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-gray-50 w-full py-6 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto text-center space-y-2 relative z-10 ">
        <p className="text-sm font-light font-sans">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold tracking-wide text-indigo-600">
            saraywebster.dev
          </span>
        </p>

        <p className="text-gray-500 text-xs">Todos os direitos reservados.</p>
      </div>

      <Waves />
    </footer>
  );
};
