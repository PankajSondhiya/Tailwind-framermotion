const Grid = () => {
  return (
    <div className="bg-amber-50 max-w-7xl mx-auto min-h-screen border-b-amber-50 dark:bg-neutral-900">
      <div className="grid grid-col-2 divide-x-2 divide-y-2 divide-gray-300 p-4">
        <div className="col-span-1 bg-red-300">
          <Card>
            <CardHeader>Bento grid </CardHeader>
            <CardDescription>
              {" "}
              Learinig about Grid using tailwind css classes
            </CardDescription>
            <CardBody className="bg-red-200"></CardBody>
          </Card>
        </div>
        <div className="col-span-1 bg-blue-400">
          {" "}
          <Card>
            <CardHeader>Bento grid </CardHeader>
            <CardDescription>
              {" "}
              Learinig about Grid using tailwind css classes
            </CardDescription>
            <CardBody className="bg-green-200"></CardBody>
          </Card>
        </div>
        <div className="col-span-2 bg-green-300">
          {" "}
          <Card>
            <CardHeader>Bento grid </CardHeader>
            <CardDescription>
              Learinig about Grid using tailwind css classes{" "}
            </CardDescription>
            <CardBody className="bg-blue-200"></CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grid;
export const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-full w-full">
      {children}
    </div>
  );
};
export const CardHeader = ({ children }) => {
  return <div className=" pb-2">{children}</div>;
};

export const CardDescription = ({ children }) => {
  return <div className="text-gray-600">{children}</div>;
};
export const CardBody = ({ children, className }) => {
  return <div className={`mb-4 w-full h-60 ${className}`}>{children}</div>;
};
