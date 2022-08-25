import React, { Component } from 'react';
import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule }) => (
  <div>
    <p>
      Módulo: <strong>{activeModule?.title}</strong>
    </p>
    <p>
      Aula: <span>{activeLesson?.title}</span>
    </p>
  </div>
);

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
