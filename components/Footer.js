import { FaDiscord, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Nganya</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white">
              <FaDiscord size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTelegramPlane size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
          </div>
          <p className="text-xs mb-2">
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Nganya
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-medium mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">App Features</a></li>
            <li><a href="#" className="hover:text-white">Download</a></li>
            <li><a href="#" className="hover:text-white">Nganya Web</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Branding</a></li>
            <li><a href="#" className="hover:text-white">Help / Forums</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-medium mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">User Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
