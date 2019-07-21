import React from 'react';
import { Switch, Route } from 'react-router'
import Home from '../home/HomeView'
import ResizeDraggRotateView from '../resizeDraRotate/ResizeDraggRotateView'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resize-drag-rotate" component={ResizeDraggRotateView} />
    </Switch>
  );
}

export default Routes;
