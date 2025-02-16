'use client'

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

const Dashboard = () => {
  return (
    <div>Dashboard (Authenticated) <br/> <LogoutLink>Logout</LogoutLink>
    </div>
  )
}

export default Dashboard