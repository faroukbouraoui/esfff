import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
function ScrollToTop({ history, children }) {
  useEffect(() => {
      
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [ window.scrollTo(0, 0)]);
  return <Fragment>{children}</Fragment>;
}
export default withRouter(ScrollToTop);