import React from "react";

// Create New Society Component
const CreateNewSociety = () => {
  return (
    <div className="relative flex items-center justify-center bg-white shadow-lg rounded-lg p-10 w-full max-w-md h-80">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800">Create New Society</h3>
        <p className="text-gray-600 mt-4">
          Start your journey by creating a new society.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 mt-8 rounded-lg hover:bg-blue-600 transition duration-300">
          Create Now
        </button>
      </div>
    </div>
  );
};

// Society Article (Already Created Society) Component
const SocietyArticle = ({ society }) => {
  return (
    <div
      className="relative bg-white shadow-lg rounded-lg p-10 w-full max-w-md h-80 bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: `url(${society.backgroundImage})`,
        border: "1px solid red",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

      {/* Title in the center with larger font size */}
      <div
        className="relative z-10 flex justify-center items-center h-full"
        style={{ paddingTop: "4px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          {society.name}
        </h2>
      </div>

      {/* Founder and View Details button at the bottom */}
      <div className="relative z-10 flex justify-between items-center w-full mt-auto">
        <div className="flex items-center space-x-4">
          <img
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white"
            src={society.imageUrl}
            alt={`${society.name} logo`}
          />
          <div className="text-white">
            <p className="font-semibold text-base">{society.president}</p>
            <p className="text-gray-300 text-sm">Founder</p>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

// Main Component to display both components in a row for desktop and column for mobile
const SocietyRow = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-7xl">
        {/* Create New Society Component */}
        <CreateNewSociety />

        {/* Already Created Society Component */}
        <SocietyArticle
          society={{
            name: "Tech Enthusiasts Club",
            president: "Jane Doe",
            imageUrl:
              "https://i.pinimg.com/550x/eb/d2/2e/ebd22e59d2788984176c91d24e2f855d.jpg",
            backgroundImage:
              "https://i.pinimg.com/736x/d6/10/61/d6106180dfa5720c098722f1c6ecbbee.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default SocietyRow;
