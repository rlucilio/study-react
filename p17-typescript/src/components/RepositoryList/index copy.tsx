import React, { Component } from 'react'

interface Repository {
  id: number
  name: string
}

interface Props {
  repositories: Repository[]
}

interface State {
  newRepository?: string
}

export default class index extends Component<Props, State> {
  state = {
    newRepository: ''
  }

  render() {
    const { repositories } = this.props
    
    return (
      <div>
        {repositories.map(repository => <li key={repository.id}>{repository.name}</li>)}
      </div>
    )
  }
}
