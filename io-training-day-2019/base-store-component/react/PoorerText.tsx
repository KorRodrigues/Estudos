import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl';

const PoorerText: FunctionComponent<PoorerTextProps> = props => {
  return (
    <div><FormattedMessage id="store/hello" /></div>
  )
}

interface PoorerTextProps {
  
}

export default PoorerText