import { useEffect, useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  const handleAddRepository = () => {
    setRepositories([...repositories, { id: Math.random(), name: 'novo-repo' }]);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/rlucilio/repos');
      const data = await response.json();
      setRepositories(data);
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter((repo) => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  const handleFavorite = (id) => {
    const newRepositories = repositories.map((repo) => (repo.id === id ? { ...repo, favorite: !repo.favorite } : repo));
    setRepositories(newRepositories);
  };

  return (
    <>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.name} {repo.favorite && <span>Favorito</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar repositório</button>
    </>
  );
}

export default App;
