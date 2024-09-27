import Card from "../ui/Cart";

const DaycareItem = (props: any) => {
  return (
    <li key={props.id}>
      <Card>
        <div className="bg-gray-300 h-[200px] mb-4">
          {props.image && (
            <img
              src={props.image}
              alt={props.name}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {props.name && (
          <p>
            <span>Name: </span>
            {props.name}
          </p>
        )}
        {props.region && (
          <p>
            <span>Region: </span>
            {props.region}
          </p>
        )}
        {props.type && (
          <p>
            <span>Type: </span>
            {props.type}
          </p>
        )}
        {props.maxCap && (
          <p>
            <span>Max Capacity: </span>
            {props.maxCap}
          </p>
        )}
        {props.owner && (
          <p>
            <span>Owner: </span>
            {props.owner}
          </p>
        )}
        {props.address && (
          <p>
            <span>Address: </span>
            {props.address}
          </p>
        )}
        {props.dphoneNumber && (
          <p>
            <span>Phone number: </span>
            {props.phoneNumber}
          </p>
        )}
        {props.google && (
          <p>
            <span>Google Reviews/Ratings: </span>
            {props.google}
          </p>
        )}
        {props.FHreport && (
          <p>
            <span>Fraser Health report: </span>
            <a
              href={props.FHreportUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {props.FHreport}
            </a>
          </p>
        )}
      </Card>
    </li>
  );
};

export default DaycareItem;
