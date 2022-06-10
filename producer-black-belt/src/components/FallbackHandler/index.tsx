import React, { ErrorInfo } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  fallback: React.ReactNode | string;
  children: React.ReactNode;
};

export default class FallbackHandler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Ocorreu um erro</p>;
    }

    return <React.Suspense fallback={<div>Loading...</div>}>{this.props.children}</React.Suspense>;
  }
}
