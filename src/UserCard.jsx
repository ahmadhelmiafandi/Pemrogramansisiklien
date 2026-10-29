import { useState } from "react";

function UserCard({ name, email, street, city, ...rest }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {`${street}, ${city}`}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        onClick={() => setClicked(true)}
        className={`${
          clicked ? "bg-special-green" : "bg-gray-01"
        } text-white p-2 rounded-md mt-4`}
      >
        {clicked ? "Tombol sudah diklik" : "Silahkan klik"}
      </button>
    </div>
  );
}

export default UserCard;
