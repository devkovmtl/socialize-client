const LabelForm = ({ htmlFor, labelName, isRequired, errors }) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-medium ${errors && 'text-red-600'}`}
  >
    {isRequired && <span className='text-red-600'>*</span>} {labelName}
  </label>
);

export default LabelForm;
