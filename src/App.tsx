import { useEffect, useState } from "react";

const images = {
  suit: "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?auto=format&fit=crop&w=1800&q=88",
  machine:
    "https://images.unsplash.com/photo-1618866903271-595806e0679d?auto=format&fit=crop&w=1400&q=88",
  sewing:
    "https://images.unsplash.com/photo-1739117441029-9f2a8e59e8b2?auto=format&fit=crop&w=1400&q=88",
  cutting:
    "https://images.unsplash.com/photo-1718184021018-d2158af6b321?auto=format&fit=crop&w=1600&q=88",
  jacket:
    "https://images.unsplash.com/photo-1628565931779-4f4f0b4f578a?auto=format&fit=crop&w=1200&q=88",
  detail:
    "https://images.unsplash.com/photo-1628565663674-de1c8161d72c?auto=format&fit=crop&w=1200&q=88",
};

const suitGallery = [
  { id: "vS0Kya7E5V4", label: "Half canvas suit" },
  { id: "Uw3OfKz2J-0", label: "Full canvas suit" },
  { id: "HgyAIYvMWkw", label: "Half canvas suit" },
  { id: "hDANeGXvWRw", label: "Full canvas suit" },
  { id: "YxbwyTb5ijs", label: "Half canvas suit" },
  { id: "NxtxmmHc2OE", label: "Full canvas suit" },
  { id: "ZHmES480_XE", label: "Half canvas suit" },
  { id: "ECJWF1NxSpM", label: "Full canvas suit" },
];

const pantsGallery = [
  "-eb0moHDPBI",
  "2qGXz5A17mc",
  "tFaLxWkeEnA",
  "SRBHZzeNi6Q",
  "1mdpEQXnJ0A",
  "4L-ZdOiSONs",
  "Kbl1RYTPIDA",
  "WNYmTVGVDhA",
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
    {diagonal ? (
      <path d="M7 17 17 7M8 7h9v9" />
    ) : (
      <path d="M5 12h14m-5-5 5 5-5 5" />
    )}
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="menu-icon">
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
  </svg>
);

const steps = [
  {
    number: "01",
    title: "The consultation",
    text: "We begin with how you live, move and want to feel. Every commission starts as a conversation, never a catalogue.",
    image: images.suit,
  },
  {
    number: "02",
    title: "Cloth selection",
    text: "Choose from a considered library of worsted wool, cashmere, linen and silk sourced from storied European mills.",
    image: images.detail,
    video: "/media/WhatsApp%20Video%202026-10-20%20at%2015.29.30.mp4",
  },
  {
    number: "03",
    title: "Your unique pattern",
    text: "Over twenty measurements are translated by hand into a paper pattern drafted solely for your posture and proportion.",
    image: images.cutting,
  },
  {
    number: "04",
    title: "The first fitting",
    text: "A basted garment reveals balance and line. We pin, mark and sculpt it on the body before final construction begins.",
    image: images.machine,
    video: "/media/WhatsApp%20Video%202026-10-20%20at%2015.29.30%20%281%29.mp4",
  },
  {
    number: "05",
    title: "Hand finishing",
    text: "Buttonholes, pick stitching, linings and edges are completed with the quiet precision that defines true handmade.",
    image: images.sewing,
    video: "/WhatsApp%20Video%202026-10-20%20at%2015.29.31.mp4",
  },
  {
    number: "06",
    title: "The final reveal",
    text: "After a final press and fitting, your suit leaves the atelier ready to become more personal with every wear.",
    image: images.jacket,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Aureline home">
          <span>A</span>
          Aureline
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#craft" onClick={() => setMenuOpen(false)}>
            The craft
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Our suits
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#appointment" onClick={() => setMenuOpen(false)}>
            Atelier
          </a>
        </nav>
        <a className="header-cta" href="#appointment">
          Book a fitting
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={images.suit}
          >
            <source src="/media/WhatsApp%20Video%202026-10-20%20at%2015.29.30.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light">Custom Made</p>
            <a className="text-link light-link" href="#appointment">
              Book an appointment <Arrow />
            </a>
          </div>
        </section>

        <section className="suit-gallery section-pad" aria-label="Suits and jackets gallery">
          <div className="suit-gallery-track" role="region" aria-label="Suits and jackets gallery" tabIndex={0}>
            {suitGallery.map((item) => (
              <figure className="suit-gallery-card" key={item.id} tabIndex={0}>
                <img
                  src={`https://unsplash.com/photos/${item.id}/download?force=true`}
                  alt={item.label}
                  loading="lazy"
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="pants-gallery section-pad" aria-label="Tailored pants gallery">
          <div className="suit-gallery-track" role="region" aria-label="Pants gallery" tabIndex={0}>
            {pantsGallery.map((id, index) => (
              <figure className="suit-gallery-card" key={id}>
                <img
                  src={`https://unsplash.com/photos/${id}/download?force=true`}
                  alt={`Tailored pants, photo ${index + 1}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="construction-statement section-pad" aria-labelledby="construction-statement-title">
          <p className="eyebrow light">Our construction philosophy</p>
          <h2 id="construction-statement-title">
            TFAWE prioritizes <em>half-canvas and full-canvas construction</em> for better structure,
            comfort, and longevity.
          </h2>
          <p className="statement-index" aria-hidden="true">
            01 <span /> 02
          </p>
          <figure className="canvas-comparison">
            <img
              src="/media/canvas-construction-comparison.jpg"
              alt="Side-by-side comparison showing the internal structure of half-canvas and full-canvas suit jackets"
            />
            <figcaption>
              <span>Half canvas</span>
              <span>Construction comparison</span>
              <span>Full canvas</span>
            </figcaption>
          </figure>
        </section>

        <section className="fused-section" aria-labelledby="fused-section-title">
          <div className="fused-copy">
            <p className="eyebrow">The construction we refuse</p>
            <h2 id="fused-section-title">
              Why we don’t make <em>fused suits.</em>
            </h2>
            <p className="fused-lead">
              Fused jackets can develop bubbles and wrinkles over time, lose their shape after
              repeated dry cleaning, and feel stiff rather than draping naturally.
            </p>
            <div className="fused-standard">
              <span>Our standard</span>
              <p>Half canvas. Full canvas. Never fused.</p>
            </div>
          </div>
          <div className="fused-image-wrap">
            <img
              src="/media/fused-jacket-construction.jpg"
              alt="Fused suit jacket showing bubbling and wrinkling across the chest beside its glued internal structure"
            />
            <div className="fused-image-label">
              <span>Fused construction</span>
              <span>What we avoid / 01</span>
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="process-heading">
            <div>
              <p className="eyebrow">The Handmade journey</p>
              <h2>
                From first measure
                <br />
                to <em>final stitch.</em>
              </h2>
            </div>
            <p>
              One pair of hands guides your garment through every stage. No shortcuts. No anonymous
              production line. Only patience, skill and a shared pursuit of the exceptional.
            </p>
          </div>
          <div className="steps-grid" role="region" aria-label="Handmade journey stages" tabIndex={0}>
            {steps.map((step, index) => (
              <article className={`step-card step-${index + 1}`} key={step.number}>
                <div className="step-image">
                  {step.video ? (
                    <video
                      className="step-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={step.image}
                      aria-hidden="true"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={step.image} alt="" />
                  )}
                  <span>{step.number}</span>
                </div>
                <p className="step-kicker">Stage {step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="details section-pad">
          <div className="details-copy">
            <p className="eyebrow">The difference is in the details</p>
            <h2>
              Quiet signatures,
              <br />
              <em>made by hand.</em>
            </h2>
            <p>
              From working buttonholes and hand-set sleeves to a personal monogram tucked inside,
              each element is a decision made with you—not for you.
            </p>
          </div>
          <div className="detail-image large">
            <img src={images.sewing} alt="Artisan sewing fabric in the atelier" />
            <span>Hand finishing</span>
          </div>
          <div className="detail-image small">
            <img src={images.detail} alt="Close detail of a tailored jacket" />
            <span>Personal expression</span>
          </div>
        </section>

        <section className="appointment" id="appointment">
          <div className="appointment-copy">
            <p className="eyebrow light">Begin your commission</p>
            <h2>
              Your suit starts
              <br />
              with a <em>conversation.</em>
            </h2>
            <p>
              Visit our atelier for a private consultation. Allow us an hour to understand the
              garment you have in mind—and the life you’ll live in it.
            </p>
            <a className="button-light" href="mailto:atelier@aureline.com">
              Request an appointment <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="wordmark footer-wordmark" href="#top">
            <span>A</span>
            Aureline
          </a>
          <p>Handmade tailoring for a life well lived.</p>
        </div>
        <div className="footer-links">
          <div>
            <p>Visit</p>
            <span>18 Savile Row</span>
            <span>London W1S 3PW</span>
          </div>
          <div>
            <p>Contact</p>
            <a href="mailto:atelier@aureline.com">atelier@aureline.com</a>
            <a href="tel:+442079460280">+44 (0)20 7946 0280</a>
          </div>
          <div>
            <p>Follow</p>
            <a href="#top">Instagram</a>
            <a href="#top">Journal</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Aureline Tailoring</span>
          <span>By appointment, Monday—Saturday</span>
        </div>
      </footer>
    </div>
  );
}
