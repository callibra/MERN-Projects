export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10  px-4 py-8">
      <p className="text-center">
        &copy;
        <a href="#"> Movie Application </a>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
