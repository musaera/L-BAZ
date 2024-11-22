const ProfileCards = () => {
  const profiles = [
    {
      name: "Adli Fathi Rayhan",
      profession: "Frontend",
      image: "https://i.imgur.com/ZsKds9w.jpeg",
    },
    {
      name: "Muhamad Faiq Mustanir",
      profession: "Fronted & UI/UX",
      image: "https://i.imgur.com/2kFfn7b.jpeg",
    },
    {
      name: "Diandra Vieri Dwi Airlangga",
      profession: "Fullstack",
      image: "https://i.imgur.com/km4eBTP.jpeg",
    },
    {
      name: "Muhammad Saeful Ramadhan",
      profession: "Backend",
      image: "https://i.imgur.com/Kh4JcmR.jpeg",
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
              <h3 className="text-lg font-medium sm:text-xl text-center">{profile.name}</h3>
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
