import 'isomorphic-fetch';

import React from 'react';
import Link from 'next/link';

//Stateless component

const Home = ({ repositories }) => (
  <div>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
    {repositories.map((repo) => (
      <h2 key={repo.ids}>{repo.name}</h2>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = await response.json();

  return { repositories };
};

export default Home;
