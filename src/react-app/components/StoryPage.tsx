import type { StoryPage as StoryPageType } from "../data/storyBigGame";

interface Props {
  page: StoryPageType;
  totalPages: number;
}

export default function StoryPage({ page, totalPages }: Props) {
  const isCover = page.pageNumber === 0;

  return (
    <div className={`story-page ${isCover ? "story-page--cover" : ""}`}>
      {/* Page number badge */}
      {!isCover && (
        <span className="story-page__number">
          Page {page.pageNumber} of {totalPages - 1}
        </span>
      )}

      {/* Image placeholder */}
      <div className="story-page__image" aria-label={page.imageAlt}>
        <div className="story-page__image-inner">
          <span className="story-page__image-icon">{isCover ? "📖" : "🎨"}</span>
          <p className="story-page__image-label">{page.imageAlt}</p>
        </div>
      </div>

      {/* Title (cover only) */}
      {isCover && page.title && (
        <h1 className="story-page__title">{page.title}</h1>
      )}

      {/* Story text */}
      <div className="story-page__text">
        {page.text.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : (
            <p key={i} className={isCover ? "story-page__subtitle" : "story-page__line"}>
              {line}
            </p>
          )
        )}
      </div>

      {/* Image prompt (for illustrators) */}
      <details className="story-page__prompt">
        <summary>🖌️ Illustration prompt</summary>
        <p>{page.imagePrompt}</p>
      </details>
    </div>
  );
}
