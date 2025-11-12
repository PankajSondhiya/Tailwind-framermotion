export const Group = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-start p-2 rounded-md has-[input:focus:invalid]:bg-red-400">
      {children}
    </div>
  );
};

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`focus:outline-none w-[300px] focus:ring-2   border focus:ring-neutral-500 rounded-lg py-2 px-4 mt-2 ring-1 focus:ring-offset-2 focus:bg-neutral-100 transition-all duration-200
                 ${className}`}
      {...props}
    />
  );
};
