import Error from "../components/Error";

export default function Custom500() {
  return (
    <Error
      code="500"
      title="Server-side error occurred"
      description="Please try again later."
    />
  );
}
