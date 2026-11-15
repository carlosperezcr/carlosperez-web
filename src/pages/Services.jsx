import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Services.css';

const content = {
  es: {
    eyebrow: 'ÁREAS DE COLABORACIÓN',
    title: 'La experiencia técnica.',
    accent: 'Una visión más amplia.',
    intro: 'De la infraestructura crítica a la transformación digital. Soluciones pensadas desde el criterio, la experiencia y las personas.',
    talk: 'Conversemos sobre tu proyecto',
    heading: 'Donde puedo aportar valor.',
    description: 'Acompaño proyectos que requieren infraestructura confiable, soluciones tecnológicas efectivas y una ruta clara de transformación y crecimiento.',
    explore: 'Conversemos sobre este enfoque',
    services: [
      ['Ingeniería e infraestructura', 'Diseño y evolución de redes, telecomunicaciones, interconexión, centros de datos e infraestructura crítica, con foco en resiliencia y continuidad.'],
      ['Consultoría tecnológica', 'Diagnóstico, arquitectura, evaluación de soluciones y acompañamiento técnico para tomar decisiones con criterio y contexto.'],
      ['Transformación digital', 'Optimización de procesos, automatización e integración de tecnología para generar mejoras reales en la operación.'],
      ['Presencia digital', 'Sitios profesionales, catálogos digitales y soluciones prácticas para pymes, con un enfoque sencillo, seguro y sostenible.']
    ],
    methodEyebrow: 'FORMA DE TRABAJAR',
    methodTitle: 'De la necesidad a la solución.',
    methodLead: 'Un enfoque práctico y colaborativo. Cada proyecto comienza por comprender el desafío, no por elegir una herramienta.',
    steps: [
      ['Comprender', 'Escuchar el desafío, identificar necesidades y restricciones.'],
      ['Diseñar', 'Proponer una solución proporcional al problema y al presupuesto.'],
      ['Implementar', 'Ejecutar directamente o colaborar con especialistas según el alcance.'],
      ['Evolucionar', 'Evaluar resultados, documentar y proponer mejoras.']
    ],
    collaboration: 'Trabajo de manera independiente y, cuando el proyecto lo requiere, puedo colaborar con otros especialistas.',
    finalTitle: 'Conversemos sobre tu proyecto.',
    finalText: 'Contame tu idea, un desafío o una necesidad. Analicemos juntos cómo la tecnología puede aportar valor.',
    finalButton: 'Contactarme'
  },
  en: {
    eyebrow: 'AREAS OF COLLABORATION',
    title: 'Technical experience.',
    accent: 'A broader perspective.',
    intro: 'From critical infrastructure to digital transformation. Solutions grounded in sound judgment, experience, and people.',
    talk: "Let's discuss your project",
    heading: 'Where I can add value.',
    description: 'I support projects that need reliable infrastructure, effective technology, and a clear path to transformation and growth.',
    explore: 'Discuss this approach',
    services: [
      ['Engineering & infrastructure', 'Design and evolution of networks, telecommunications, interconnection, data centers, and critical infrastructure, with a focus on resilience and continuity.'],
      ['Technology consulting', 'Assessment, architecture, solution evaluation, and technical guidance to support informed decisions.'],
      ['Digital transformation', 'Process improvement, automation, and technology integration to deliver meaningful operational improvements.'],
      ['Digital presence', 'Professional websites, digital catalogs, and practical solutions for small businesses, designed to be simple, secure, and sustainable.']
    ],
    methodEyebrow: 'HOW I WORK',
    methodTitle: 'From challenge to solution.',
    methodLead: 'A practical, collaborative approach. Every project begins with understanding the challenge, not choosing a tool.',
    steps: [
      ['Understand', 'Listen to the challenge and identify needs and constraints.'],
      ['Design', 'Propose a solution appropriate to the problem and budget.'],
      ['Implement', 'Deliver directly or collaborate with specialists when needed.'],
      ['Evolve', 'Evaluate outcomes, document findings, and recommend improvements.']
    ],
    collaboration: 'I work independently and collaborate with other specialists when a project calls for it.',
    finalTitle: "Let's talk about your project.",
    finalText: 'Share an idea, challenge, or need. Together we can explore how technology can add value.',
    finalButton: 'Get in touch'
  }
};
const icons = [
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="7" width="32" height="10" rx="2"/><rect x="8" y="20" width="32" height="10" rx="2"/><rect x="8" y="33" width="32" height="8" rx="2"/><path d="M14 12h2M14 25h2M14 37h2M22 17v3M22 30v3"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="10" y="8" width="28" height="25" rx="2"/><path d="M5 38h38l-4-5H9l-4 5Z"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m24 5 18 10-18 10L6 15 24 5ZM6 24l18 10 18-10M6 33l18 10 18-10"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="5" y="8" width="38" height="32" rx="3"/><path d="M5 17h38M18 24l-6 5 6 5M30 24l6 5-6 5M27 22l-6 14"/></svg>
];

export default function Services() {
  const { i18n } = useTranslation();
  const c = content[i18n.language?.startsWith('en') ? 'en' : 'es'];
  return (
    <main className="cp-services">
      <section className="cp-services-hero">
        <div className="cp-services-grid-art" aria-hidden="true" />
        <div className="cp-services-wrap cp-services-hero-inner">
          <p className="cp-services-eyebrow">{c.eyebrow}</p>
          <h1>{c.title}<br /><span>{c.accent}</span></h1>
          <p className="cp-services-lead">{c.intro}</p>
          <Link to="/contact/" className="cp-services-button">{c.talk}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="cp-services-offerings" id="areas">
        <div className="cp-services-wrap">
          <p className="cp-services-eyebrow cp-services-eyebrow-light">01 / {c.eyebrow}</p>
          <h2>{c.heading}</h2>
          <p className="cp-services-section-lead">{c.description}</p>
          <div className="cp-services-cards">
            {c.services.map(([title, description], index) => (
              <article className="cp-services-card" key={title}>
                <span className="cp-services-card-number">0{index + 1}</span>
                <div className="cp-services-icon">{icons[index]}</div>
                <div className="cp-services-card-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to="/contact/" className="cp-services-text-link">{c.explore} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cp-services-method">
        <div className="cp-services-wrap">
          <p className="cp-services-eyebrow">{c.methodEyebrow}</p>
          <h2>{c.methodTitle}</h2>
          <p className="cp-services-method-lead">{c.methodLead}</p>
          <ol className="cp-services-steps">
            {c.steps.map(([title, description], index) => (
              <li key={title}><span className="cp-services-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
          <p className="cp-services-collaboration">{c.collaboration}</p>
        </div>
      </section>
      <section className="cp-services-end">
        <div className="cp-services-wrap cp-services-end-inner">
          <div><p className="cp-services-eyebrow">{c.eyebrow}</p><h2>{c.finalTitle}</h2><p>{c.finalText}</p></div>
          <Link to="/contact/" className="cp-services-button">{c.finalButton}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
