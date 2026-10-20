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
  },
  {
    number: "05",
    title: "Hand finishing",
    text: "Buttonholes, pick stitching, linings and edges are completed with the quiet precision that defines true handmade.",
    image: images.sewing,
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
          <a href="#canvas" onClick={() => setMenuOpen(false)}>
            Our suits
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#atelier" onClick={() => setMenuOpen(false)}>
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
            <source src="/media/atelier-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light">Handmade tailoring · Est. 2021</p>
            <h1>
              Cut for a life
              <br />
              <em>well lived.</em>
            </h1>
            <p className="hero-copy">
              Hand-cut, hand-shaped and entirely yours. Discover the enduring comfort of a suit made
              with purpose.
            </p>
            <a className="text-link light-link" href="#process">
              Discover our process <Arrow />
            </a>
          </div>
          <div className="hero-index">
            <span>01</span>
            <span className="index-line" />
            <span>06</span>
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
        </section>

        <section className="intro section-pad" id="craft">
          <p className="eyebrow">The Aureline standard</p>
          <div className="intro-grid">
            <h2>
              Not simply made to measure.
              <br />
              <em>Made to belong.</em>
            </h2>
            <div className="intro-copy">
              <p>
                We believe a fine suit should never wear the man. It should move with him, speak
                quietly for him, and feel familiar from the very first fitting.
              </p>
              <a className="text-link" href="#canvas">
                Explore our construction <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="canvas-section" id="canvas">
          <div className="canvas-image-wrap">
            <img src={images.machine} alt="Handmade jacket being shaped in the atelier" />
            <div className="image-label">
              <span>Inside the jacket</span>
              <span>Structure / 01</span>
            </div>
          </div>
          <div className="canvas-content section-pad">
            <p className="eyebrow">Two expressions of craft</p>
            <h2>
              The hidden architecture
              <br />
              of a <em>beautiful suit.</em>
            </h2>
            <p className="canvas-lead">
              Canvas is the floating layer between cloth and lining that gives a jacket its shape,
              movement and longevity. The right construction depends on how you live.
            </p>
            <div className="canvas-options">
              <article>
                <div className="option-number">01</div>
                <div>
                  <h3>Half canvas</h3>
                  <p>
                    Natural structure through the chest with a lighter lower body. Supple,
                    breathable and ideal for everyday versatility.
                  </p>
                  <ul>
                    <li>Horsehair chest piece</li>
                    <li>Soft, modern drape</li>
                    <li>40+ hours of craft</li>
                  </ul>
                </div>
              </article>
              <article>
                <div className="option-number">02</div>
                <div>
                  <h3>Full canvas</h3>
                  <p>
                    A hand-padded canvas runs the full length of the jacket, slowly moulding to the
                    wearer for an unrivalled fit.
                  </p>
                  <ul>
                    <li>Full floating canvas</li>
                    <li>Exceptional longevity</li>
                    <li>70+ hours of craft</li>
                  </ul>
                </div>
              </article>
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
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className={`step-card step-${index + 1}`} key={step.number}>
                <div className="step-image">
                  <img src={step.image} alt="" />
                  <span>{step.number}</span>
                </div>
                <p className="step-kicker">Stage {step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-band" id="atelier">
          <img src={images.cutting} alt="Tailor cutting cloth by hand" />
          <div className="quote-card">
            <p className="eyebrow light">A philosophy in cloth</p>
            <blockquote>
              “True luxury is not what is seen. It is the care concealed in every stitch.”
            </blockquote>
            <p className="quote-credit">— Matteo Aureline, Master Tailor</p>
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
          <img src={images.suit} alt="Man wearing a custom tailored suit" />
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
