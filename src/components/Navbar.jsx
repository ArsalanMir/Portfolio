function Navbar(){
    return(
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
            <div className="text-2xl font-bold hidden md:inline">Arsalan</div>
            <div className="space-x-6">
                <a href="#home" className="hover:text-gray-400">Home</a>
                <a href="#about" className="hover:text-gray-400">About Me</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
                <a href="#project" className="hover:text-gray-400">Projects</a>
            </div>
            <button className="bg-white text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Mode</button>
        </div>
    </nav>
    )
}
export default Navbar