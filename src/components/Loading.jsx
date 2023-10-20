import React from 'react';
import '../styles/Loading.scss';

const Loading = ({ isLoading }) => {
  return isLoading ? <span className="loading" /> : null;
};

export default Loading;
