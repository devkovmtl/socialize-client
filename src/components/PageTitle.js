const PageTitle = ({ title, color }) => {
  return (
    <h1
      className={`text-center text-5xl font-bold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ${color}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
