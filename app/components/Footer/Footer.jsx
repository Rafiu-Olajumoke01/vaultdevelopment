<footer className="bg-[#387CEF] text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Company Info */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Vault Company</h4>
      <p className="text-sm leading-relaxed">
        Empowering businesses through innovative digital solutions. We deliver top-notch web, app, and tech services tailored for your growth.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Portfolio</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Services</h4>
      <ul className="space-y-2 text-sm">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Cloud Solutions</li>
        <li>Consulting</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4 text-white text-xl">
        <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>

  <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
    &copy; {new Date().getFullYear()} Vault Company. All rights reserved.
  </div>
</footer>
