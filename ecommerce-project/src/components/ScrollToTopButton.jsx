import './ScrollToTopButton.css';

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      Scroll to top
    </button>
  );
}