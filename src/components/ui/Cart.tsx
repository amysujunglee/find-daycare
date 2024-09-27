const Card = (props: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 h-full">
      {props.children}
    </div>
  );
};

export default Card;
