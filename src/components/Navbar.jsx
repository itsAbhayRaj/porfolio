import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Abhay Raj Yadav</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
