import { useState } from "react";
import { storyBigGame } from "../data/storyBigGame";
import StoryPage from "./StoryPage";

export default function StoryBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const total = storyBigGame.length;
  const page = storyBigGame[currentPage];

  function goTo(index: number) {
    setCurrentPage(Math.max(0, Math.min(total - 1, index)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="storybook">
      {/* Top navigation */}
      <nav className="storybook__nav" aria-label="Story navigation">
        <button
          className="storybook__btn"
          onClick={() => goTo(0)}
          disabled={currentPage === 0}
          aria-label="Go to cover"
        >
          ⏮ Cover
        </button>
        <button
          className="storybook__btn"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          ◀ Prev
        </button>

        {/* Page dots */}
        <div className="storybook__dots" role="list" aria-label="Page list">
          {storyBigGame.map((_, i) => (
            <button
              key={i}
              role="listitem"
              className={`storybook__dot ${i === currentPage ? "storybook__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={i === 0 ? "Cover" : `Page ${i}`}
              aria-current={i === currentPage ? "page" : undefined}
            />
          ))}
        </div>

        <button
          className="storybook__btn"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === total - 1}
          aria-label="Next page"
        >
          Next ▶
        </button>
        <button
          className="storybook__btn"
          onClick={() => goTo(total - 1)}
          disabled={currentPage === total - 1}
          aria-label="Go to last page"
        >
          End ⏭
        </button>
      </nav>

      {/* Current page */}
      <StoryPage page={page} totalPages={total} />

      {/* Bottom navigation */}
      <nav className="storybook__nav storybook__nav--bottom" aria-label="Story navigation bottom">
        <button
          className="storybook__btn storybook__btn--large"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          ◀ Previous
        </button>

        <span className="storybook__progress">
          {currentPage === 0 ? "Cover" : `${currentPage} / ${total - 1}`}
        </span>

        <button
          className="storybook__btn storybook__btn--large storybook__btn--primary"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === total - 1}
          aria-label="Next page"
        >
          Next ▶
        </button>
      </nav>
    </div>
  );
}
