import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository;
}

type Props = OwnProps;

export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>;
}
