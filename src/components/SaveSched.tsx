type SaveSchedProps = {
  isButton: boolean;
};

const SaveSched = ({ isButton }: SaveSchedProps) => {
  return (
    <>
      {isButton ? (
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
        >
          Save Schedule
        </button>
      ) : (
        <button className="block px-4 py-2 text-sm"> Save Schedule</button>
      )}
    </>
  );
};

export default SaveSched;
