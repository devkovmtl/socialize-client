const InputField = ({
  type,
  id,
  name,
  placeholder,
  register,
  errors,
  rules,
}) => {
  return (
    <div className='relative mt-1'>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm ${
          errors[name] && 'border-red-600'
        }`}
        {...register(name, { ...rules })}
      />

      {errors && errors[name] && (
        <span className='absolute inset-y-0 inline-flex items-center right-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            className='w-5 h-5 text-red-600'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
            <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
          </svg>
        </span>
      )}
    </div>
  );
};

export default InputField;
