import Error from "../components/Error";

export default function Custom500(props) {
  return (
    <Error
      code="500"
      title="Server-side error"
      description="Please try again later."
    />
  );
}
