const CodingProfiles = () => {
  const codingProfiles = [
    {
      name: "View Leetcode Profile",
      url: "https://leetcode.com/dhruv_bajaj/",
      icon: "/Icons/leetcode.svg",
    },
    {
      name: "View Github Profile",
      url: "https://github.com/dhruv-bajaj",
      icon: "/Icons/github.svg",
    },
    {
      name: "View LinkedIn Profile",
      url: "https://www.linkedin.com/in/dhruv-bajaj-0a7a86182",
      icon: "/Icons/linkedin.svg",
    },
    {
      name: "dhruvbajaj854@gmail.com",
      url: "mailto:dhruvbajaj854@gmail.com",
      icon: "/Icons/gmail.svg",
    },
  ];
  return (
    <div className="flex flex-col md:w-3/4 w-full m-auto gap-4">
      {codingProfiles.map((ele) => {
        return (
          <a
            href={ele.url}
            target="_blank"
            className="flex flex-row 
          md:justify-start"
          >
            <img src={ele.icon} alt={ele.name} className="h-5 mr-2" />
            {ele.name}
          </a>
        );
      })}
    </div>
  );
};

export default CodingProfiles;
