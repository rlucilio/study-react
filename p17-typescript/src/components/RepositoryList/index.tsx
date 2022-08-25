import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    this.props.loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories?.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ repositories }: ApplicationState) => ({
  repositories: repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
