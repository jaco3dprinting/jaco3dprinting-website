export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27731018848"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-600
        hover:bg-green-700
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        font-semibold
        transition-all
        duration-300
      "
    >
      💬 WhatsApp
    </a>
  );
}