import { showcaseItems } from "../constants/const";

function Cards() {
  return (
    <section className="mt-16 flex flex-col gap-6 md:-mx-64">
      <div className="auto-scroll-wrapper">
        <div className="auto-scroll-track">
          {showcaseItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="card-surface shrink-0 w-60 md:w-72 rounded-3xl p-6 flex flex-col gap-4"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#f5c2c7]">
                {item.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <span className="auto-scroll-fade left hidden md:block" />
        <span className="auto-scroll-fade right hidden md:block" />
      </div>
    </section>
  );
}

export default Cards;
