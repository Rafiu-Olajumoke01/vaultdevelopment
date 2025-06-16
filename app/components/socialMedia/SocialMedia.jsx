export default function ContactHeader() {
   return (
       <div className="bg-white-700 text-gray py-2 px-4">
           <div className="w-full px-20 flex justify-between items-center">
               {/* Social Media Icons - Left Side */}
               <div className="flex gap-3">
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/facebook.svg" alt="Facebook" className="w-5 h-5" />
                   </a>
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/twitter-1.svg" alt="Twitter" className="w-5 h-5" />
                   </a>
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/instagram.svg" alt="Instagram" className="w-5 h-5" />
                   </a>
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/linkedin-1.svg" alt="LinkedIn" className="w-5 h-5" />
                   </a>
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/pinterest.svg" alt="Pinterest" className="w-5 h-5" />
                   </a>
                   <a href="#" className="hover:opacity-70">
                       <img src="https://www.techasoft.com/debug/img/youtube.svg" alt="YouTube" className="w-5 h-5" />
                   </a>
               </div>

               {/* Contact Info with Flags - Right Side */}
               <div className="flex flex-wrap gap-4 text-sm">
                   <a href="tel:+16474702985" className="hover:text-blue-300 flex items-center gap-1">
                       <img src="https://www.techasoft.com/debug/img/canada_watsapp.png" alt="Canada" className="w-10 h-10" />
                       +1 647 470 2985
                   </a>
                   <a href="tel:+16108800144" className="hover:text-blue-300 flex items-center gap-1">
                       <img src="https://www.techasoft.com/debug/img/usa_watsapp.png" alt="USA" className="w-10 h-10" />
                       +1 610 880 0144
                   </a>
                   <a href="tel:+971507557789" className="hover:text-blue-300 flex items-center gap-1">
                       <img src="https://www.techasoft.com/debug/img/dubai_whatapp.png" alt="UAE" className="w-10 h-10" />
                       +971 507557789
                   </a>
                   <a href="tel:+918884739988" className="hover:text-blue-300 flex items-center gap-1">
                       <img src="https://www.techasoft.com/debug/img/india_watsapp.png" alt="India" className="w-4 h-3" />
                       +91 8884 739 988
                   </a>
                   <a href="mailto:info@techasoft.com" className="hover:text-blue-300 flex items-center gap-1">
                       <img src="https://www.techasoft.com/debug/img/email-3.svg" alt="vaultImage" className="w-10 h-10" />
                       info@techasoft.com
                   </a>
               </div>
           </div>
           <div className="w-full h-px bg-gray-200"></div>
       </div>
   );
}