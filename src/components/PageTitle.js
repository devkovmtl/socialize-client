const PageTitle = ({ title, color }) => {
  return (
    <h1
      className={`font-lobster text-center text-3xl font-bold sm:text-5xl ${color}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
