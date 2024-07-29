import Empty from "/public/assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Empty />
      <h3 className="text-md text-rose-600 text-nowrap font-bold font-redhat">
        Your added items will appear here
      </h3>
    </div>
  );
};

export default EmptyCart;
