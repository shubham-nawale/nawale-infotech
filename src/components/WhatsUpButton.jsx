function WhatsUp(){
    return(
        <div className="fixed bottom-10 left-4 z-50">
            {/* WhatsApp Button */}
        <a
          href="https://wa.me/919561349346?text=Hello%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-xs"
        >
          <i className="fab fa-whatsapp text-base"></i>
          <span>Chat on WhatsApp</span>
        </a>
        </div>
    )
}

export default WhatsUp;