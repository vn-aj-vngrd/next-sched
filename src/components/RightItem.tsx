import { ItemProps } from "../types";

const RightItem = (props: ItemProps) => {
  return (
    <div className="flex flex-col mb-32 space-y-6 md:w-3/4">
      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            {props.days?.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.timeRange?.map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RightItem;
