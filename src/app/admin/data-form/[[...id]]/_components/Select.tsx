const Select = ({ optionList, ...props }: { optionList: string[] }) => {
  return (
    <select className={'w-full border rounded-md px-3 py-2'} {...props}>
      {optionList.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default Select;
