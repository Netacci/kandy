const Team = () => {
  return (
    <section className="mb-16 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Meet Our Team
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { name: "Anny Wilcox", role: "Director" },
          { name: "Tonye", role: "Head mistress" },
          { name: "Ego", role: "Head of Nursery" },
          { name: "Michael Brown", role: "Head of Primary" },
        ].map((member, index) => (
          <div
            key={index}
            className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border-4 border-green-100">
              <span className="text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-bold text-green-700 mb-1 text-lg">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
