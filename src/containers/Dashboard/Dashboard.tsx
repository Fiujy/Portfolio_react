import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='size-full'>
      <Outlet />
    </div>
  )
}

export default Dashboard