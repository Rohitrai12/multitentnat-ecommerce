export const Footer = () => {
    return (
      <footer className="flex border-t justify-between items-center font-medium p-6 w-full">
        <div className="flex items-center gap-2">
          <p>© {new Date().getFullYear()} funroad, Inc.</p>
        </div>
        {/* Optional right section */}
        <div className="hidden md:flex gap-4 text-sm text-gray-500">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </footer>
    )
  }
  