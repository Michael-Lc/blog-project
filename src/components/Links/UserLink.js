import React from 'react';
import { Link } from 'react-router-dom';

import { CreateUserLink } from '../../utils/FormLinks';

export default function UserLink({ user }) {
  const userLink = CreateUserLink(user)

  return <Link to={`/${userLink}`} state={{ user }} className='usernameLink d-block'><b>{user}</b></Link>;
}
