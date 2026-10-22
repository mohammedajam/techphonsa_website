const FinalCTA = () => {
  return (
    <section className="home-cta section" aria-labelledby="about-cta-heading">
      <div className="container">
        <div className="home-cta__inner">
          <h2 className="home-cta__title" id="about-cta-heading">Work with us.</h2>
          <p className="home-cta__description">
            If you're a small business that needs a real website or a way to stop doing repetitive work by hand, we should talk.
          </p>
          <a href="#contact" className="btn-primary btn-primary--primary">
            Let's talk about what you need
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
