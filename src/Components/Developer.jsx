const Developer = () => {
  const profiles = [
    {
      name: "John Doe",
      profession: "Web Developer",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Jane Smith",
      profession: "Graphic Designer",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Alice Johnson",
      profession: "UI/UX Designer",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Michael Brown",
      profession: "Software Engineer",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <a
            href="#"
            key={index}
            className="group relative block h-64 sm:h-80 lg:h-96"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform flex-col items-center justify-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              {/* Foto */}
              <img
                src={profile.image}
                alt={`${profile.name}'s Profile Picture`}
                className="mb-4 h-32 w-32 rounded-full border-2 border-black object-cover"
              />
              {/* Nama */}
              <h3 className="text-lg font-medium sm:text-xl">{profile.name}</h3>
              {/* Profesi */}
              <p className="mt-2 text-sm text-gray-600">{profile.profession}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;
