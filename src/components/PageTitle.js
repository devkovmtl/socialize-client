const PageTitle = ({ title, color }) => {
  return (
    <h1
      className={`font-lobster text-center text-3xl font-bold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ${color}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
