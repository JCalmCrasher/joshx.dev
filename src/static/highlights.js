const highlights = [
  {
    label: '3+',
    text: "years experience",
    slug: 'years-experience'
  },
  {
    label: '20',
    text: "projects completed",
    slug: 'projects-completed'
  }
];

const occupation = {
  label: 'jollyboi',
  experience: '4 years',
  description: `I'm a Software Developer working mostly on frontend stuff. I like to craft solid and performant solutions with elegant user experiences. I can't shut up about <code>SOLID</code> principles and utiility-first CSS.`
};

const projects = [
  {
    title: "Analysis",
    logo: "",
    description:
      "I'm meticulous in gathering requirements, anticipating technical hurdles, interpreting user's jargon and using the data to craft accessible and performant solutions.",
    number: 10,
  },
  {
    title: "Engineering",
    logo: "",
    description: `I'm equipped with state-of-the-art tools to develop smooth and solid web apps with great User Experience.

    I'm probably not Tom Scott but I take great care in writing robust and well documented APIs that ease human life.`,
    number: 10,
  },
];

const works = [
  {
    project: 'number-js-formatter',
    description: 'Formats numbers in a human-friendly way.',
    stacks: ['javascript', 'typescript'],
    url: {
      sourceCode: 'https://github.com/JCalmCrasher/number-js-formatter',
      live: 'https://www.npmjs.com/package/number-js-formatter'
    }
  },
  {
    project: 'joshx.dev',
    description: 'My personal portfolio.',
    stacks: ['tailwind', 'vue'],
    url: {
      sourceCode: 'https://github.com/JCalmCrasher/joshx.dev',
      live: 'https://joshx-dev.vercel.app/'
    }
  },
  {
    project: 'github-repo',
    description: 'Fetch details about github user.',
    stacks: ['graphql', 'vue'],
    url: {
      sourceCode: 'https://github.com/JCalmCrasher/github-repo',
      live: 'https://github-repo-six.vercel.app/'
    }
  }
];

const about = {
  headline: 'Over the past<br /> few years,',
  story: `In consequat elit eu excepteur magna ex laboris aute excepteur est ea in.
  Labore aute nostrud do deserunt laborum labore ullamco fugiat esse nostrud
  consequat in adipisicing mollit.Officia incididunt fugiat culpa velit
  nostrud aliqua sint ut occaecat id Lorem ex nisi.Aliquip pariatur
  excepteur do fugiat qui officia aute voluptate qui excepteur magna
  adipisicing non proident.`
};

export { about, highlights, occupation, projects, works };