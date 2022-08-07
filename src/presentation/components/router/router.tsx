import React from 'react'
import { Signup } from '@/presentation/pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
};

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
