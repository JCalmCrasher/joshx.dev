const highlights = [
  {
    label: "4+",
    text: "years experience",
    slug: "years-experience",
  },
  {
    label: "10+",
    text: "projects completed",
    slug: "projects-completed",
  },
];

const occupation = {
  label: "jollyboi",
  experience: "4 years",
  description: `I'm a Software Developer working mostly on frontend stuff.
  I like to craft solid and performant solutions with elegant user experiences.
  I can't shut up about <code>SOLID</code> principles and utiility-first CSS.`,
};

const limelights = [
  {
    title: "Analysis",
    logo: "",
    description:
      "I'm meticulous in gathering requirements, anticipating technical hurdles, interpreting user's jargon and using the data to craft accessible and performant solutions.",
    number: 10,
  },
  {
    title: "Design",
    logo: "",
    description: `I equip myself with state-of-the-art tools to develop smooth and solid web apps with great User Experience.

    I'm probably not Tom Scott but I take great care in writing robust and well documented APIs that ease human life.`,
    number: 10,
  },
];

const works = [
  {
    project: "react-creditcard",
    description: "Package to help format and validate credit card input fields ",
    stacks: ["typescript"],
    url: {
      sourceCode: "https://github.com/abayomi1196/react-creditcard-validator",
      live: "https://www.npmjs.com/package/react-creditcard-validator",
    },
  },
  {
    project: "number-js-formatter",
    description: "Formats numbers in a human-friendly way.",
    stacks: ["javascript", "typescript"],
    url: {
      sourceCode: "https://github.com/JCalmCrasher/number-js-formatter",
      live: "https://www.npmjs.com/package/number-js-formatter",
    },
  },
  {
    project: "github-repo",
    description: "Fetch details about github user.",
    stacks: ["graphql", "vue"],
    url: {
      sourceCode: "https://github.com/JCalmCrasher/github-repo",
      live: "https://github-repo-six.vercel.app/",
    },
  },
  {
    project: "solana-bulldogs",
    description: "Solana bulldogs is a collection of over 1,500 unique NFT Bulldogs built on the Solana Blockchain.",
    stacks: ["react", "tailwindcss"],
    url: {
      live: "https://solana-bulldogs.com",
    },
  },
  {
    project: "Designbuddy",
    description: "Platform to hire & find talents across Africa.",
    stacks: ["react", "tailwindcss"],
    url: {
      live: "https://designbuddy.org",
    },
  },
  {
    project: "agriple.com",
    description: "Agrotech platform for buyers and farmers.",
    stacks: ["tailwindcss", "vue"],
    url: {
      live: "https://agriple.com",
    },
  },
];

const about = {
  headline: "Over the past<br /> years,",
  story: `<p>I've built products for companies and businesses around the globe
   ranging from e-commerce web apps to enterprise solutions with focus on fast, performance and accessible user experiences.</p>
  <p>Presently, I work as a Frontend Engineer building and promoting success of web apps with state of the art technologies.</p>`,
};

const stuffIDo = [
  {
    title: "I build stuff",
    description: `Open source <br />projects,
    web apps.`,
    actionText: "see my work",
    actionURL: "works",
  },
  {
    title: "I write sometimes",
    description: `About frontend dev,<br />
    productivity and life.`,
    actionText: "read my articles",
    actionURL: "shelf",
  },
];

export { about, highlights, occupation, limelights, works, stuffIDo };
