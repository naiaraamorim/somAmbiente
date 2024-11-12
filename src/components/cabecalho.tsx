import logo from "../assets/svg/logo.svg";

export const Cabecalho = () => {
  return (
    <div className="w-full flex items-center p-6 ">
      <div className="flex items-center">
        <img src={logo} alt="Logo do sistema" className="w-20" />
      </div>
      <div className="flex-grow flex justify-center">
        {/* <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-500-500 to-sky-500 font-fontTitulo font-bold text-center tracking-wide drop-shadow-md hover:cursor-pointer transition-transform duration-300 animate-gradient">
          Som Ambiente
        </span> */}
      </div>
    </div>
  );
};
