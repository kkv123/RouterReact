import { useParams } from "react-router-dom";

export default function User() {
    const {userId}= useParams();
  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">User Page {userId}</h1>
    </div>
  );
}