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

const projects = [
  {
    title: "Analysis",
    logo: "",
    description:
      "I'm meticulous in gathering requirements, anticipating technical hurdles, interpreting user's jargon and using the data to craft an accessible and performant solution.",
    number: 10,
  },
  {
    title: "Hitting those keys!",
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

export { highlights, projects, works };