import { useParams } from "react-router-dom";

export default function ShowDe() {
  const { id } = useParams();
  return <div>ShowDe/{id}</div>;
}
