const PageDescription = ({ description, color }) => {
  return (
    <p className={`max-w-md mx-auto mt-4 text-center text-gray-500 ${color}`}>
      {description}
    </p>
  );
};

export default PageDescription;
