import React, { Fragment } from 'react'
import { Router } from 'vtex.my-account-commons';

const Example = () => <span>Hello <strong>KOR!!!</strong></span>


const UserSupportPage = () => (
  <Fragment>
    <Router.Route path="/suport" exact component={(
      <span>Hello <strong>KOR!!!</strong></span>
    )} />
  </Fragment>
)

export default Example