import ArrowIcon from '../components/ArrowIcon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { publicAsset } from '../utils/publicAsset';
import './Ideas.css';

const FEATURED_EVENTS = ['Euro-IX 43', 'LACNIC 44 LAC-IX Technical Meeting', 'Texas Tech University'];
const optimizedEventImage = image => publicAsset({
  '/euroix43.jpg': '/euroix43.webp',
  '/lacnic.jpg': '/lacnic.webp',
  '/texastech.jpg': '/texastech.webp',
}[image] || image);

function EventLinks({ talk, t }) {
  const links = [
    talk.Publicacion && { href: talk.Publicacion, text: t('ideas.view') },
    talk.slides && { href: talk.slides, text: t('talks.slides') },
    talk.video && { href: talk.video, text: t('talks.video') },
  ].filter(Boolean);
  return links.length ? <div className="ideas-v3-event-links">{links.map(link =>
    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.text} <ArrowIcon direction="upRight" /></a>
  )}</div> : null;
}

export default function Ideas() {
  const { t, i18n } = useTranslation();
  const en = i18n.language?.startsWith('en');
  const items = t('talks.items', { returnObjects: true });
  const talks = Array.isArray(items) ? FEATURED_EVENTS.map(event => items.find(item => item.event === event)).filter(Boolean) : [];
  const topics = en ? [
    { number: '01', category: 'ENGINEERING · SECURITY', title: 'Trust in Internet routing', description: 'Routing security, RPKI and the operational decisions behind resilient networks.' },
    { number: '02', category: 'LEADERSHIP · TRANSFORMATION', title: 'From operations to strategy', description: 'Connecting technical decisions with people, organizational goals and digital transformation.' },
    { number: '03', category: 'INFRASTRUCTURE · RESILIENCE', title: 'Infrastructure that lasts', description: 'Capacity, availability and simplicity in critical digital environments.' },
  ] : [
    { number: '01', category: 'INGENIERÍA · SEGURIDAD', title: 'Confianza en el enrutamiento de Internet', description: 'Seguridad del enrutamiento, RPKI y las decisiones operativas detrás de redes resilientes.' },
    { number: '02', category: 'LIDERAZGO · TRANSFORMACIÓN', title: 'De la operación a la estrategia', description: 'Conectar las decisiones técnicas con las personas, los objetivos y la transformación digital.' },
    { number: '03', category: 'INFRAESTRUCTURA · RESILIENCIA', title: 'Infraestructura que perdura', description: 'Capacidad, disponibilidad y simplicidad en entornos digitales críticos.' },
  ];

  return <main className="ideas-v3">
    <header className="ideas-v3-hero">
      <div className="container ideas-v3-hero-inner">
        <div className="ideas-v3-hero-copy">
          <p className="ideas-v3-eyebrow">{en ? 'IDEAS / ENGINEERING / PERSPECTIVE' : 'IDEAS / INGENIERÍA / PERSPECTIVA'}</p>
          <h1>{en ? 'Thinking beyond technology.' : 'Pensar más allá de la tecnología.'}</h1>
          <p className="ideas-v3-intro">{en
            ? 'Reflections, experience and analysis on digital infrastructure, network operations, security, resilience and technological transformation.'
            : 'Reflexiones, experiencias y análisis sobre infraestructura digital, operación de redes, seguridad, resiliencia y transformación tecnológica.'}</p>
          <a className="ideas-v3-button" href="#perspectivas">{en ? 'Explore perspectives' : 'Explorar perspectivas'} <ArrowIcon direction="downRight" /></a>
        </div>
        <div className="ideas-v3-portrait-wrap">
          <img src={publicAsset('/ideas-portrait.webp')} alt={en ? 'Editorial portrait of Carlos Pérez' : 'Retrato editorial de Carlos Pérez'} width="850" height="1132" fetchPriority="high" decoding="async" />
        </div>
      </div>
    </header>

    <section className="ideas-v3-perspectives" id="perspectivas" aria-labelledby="ideas-v3-perspectives-title">
      <div className="container">
        <div className="ideas-v3-heading"><div><p className="ideas-v3-eyebrow">01 / {en ? 'PERSPECTIVES' : 'PERSPECTIVAS'}</p><h2 id="ideas-v3-perspectives-title">{en ? 'Ideas worth exploring' : 'Ideas para explorar'}</h2></div><span>{en ? 'Engineering meets strategy' : 'Ingeniería y visión estratégica'}</span></div>
        <Link to="/article/rpki-ghost/" className="ideas-v3-featured">
          <div className="ideas-v3-featured-art"><img src={publicAsset('/rpki-ghost-editorial.webp')} alt="" width="1200" height="675" loading="lazy" decoding="async" /></div>
          <div className="ideas-v3-featured-copy"><span className="ideas-v3-tag">{en ? 'PUBLISHED ARTICLE · ROUTING SECURITY' : 'ARTÍCULO PUBLICADO · SEGURIDAD DE RUTAS'}</span><h3>{t('article.title')}</h3><p>{en ? 'By Carlos Pérez' : 'Por Carlos Pérez'}</p><span className="ideas-v3-link">{t('ideas.read')} <ArrowIcon direction="upRight" /></span></div>
        </Link>
        <div className="ideas-v3-topic-grid" aria-label={en ? 'Editorial themes' : 'Líneas editoriales'}>
          {topics.map(topic => <article className="ideas-v3-topic" key={topic.number}><span className="ideas-v3-topic-number">{topic.number}</span><p className="ideas-v3-eyebrow">{topic.category}</p><h3>{topic.title}</h3><p>{topic.description}</p></article>)}
        </div>
        <p className="ideas-v3-topic-note">{en ? 'These are editorial themes, not links to unpublished articles.' : 'Estas son líneas editoriales, no enlaces a artículos aún no publicados.'}</p>
      </div>
    </section>

    <section className="ideas-v3-community" aria-labelledby="ideas-v3-community-title">
      <div className="container">
        <div className="ideas-v3-heading"><div><p className="ideas-v3-eyebrow">02 / {en ? 'COMMUNITY' : 'COMUNIDAD'}</p><h2 id="ideas-v3-community-title">{en ? 'Participation & community' : 'Participación y comunidad'}</h2></div></div>
        <p className="ideas-v3-community-intro">{en ? 'Professional and academic spaces for sharing experiences, learning from others and contributing to the technical community.' : 'Espacios profesionales y académicos para compartir experiencias, aprender de otras personas y contribuir a la comunidad técnica.'}</p>
        <div className="ideas-v3-event-list">{talks.map(talk => <article className="ideas-v3-event" key={talk.event}>
          <div className="ideas-v3-event-photo"><img src={optimizedEventImage(talk.images?.[0] || '/euroix43.jpg')} alt={talk.event} loading="lazy" decoding="async" /></div>
          <div className="ideas-v3-event-copy"><p className="ideas-v3-eyebrow">{talk.event} · {talk.year}</p><h3>{talk.title}</h3><p>{talk.description}</p><EventLinks talk={talk} t={t}/></div>
        </article>)}</div>
        <p className="ideas-v3-disclaimer">{en ? 'Participation references describe professional experience and do not imply institutional endorsement of independent consulting services.' : 'Las referencias a participaciones describen experiencia profesional y no implican respaldo institucional a servicios de consultoría independientes.'}</p>
      </div>
    </section>
    <section className="ideas-v3-outro"><div className="container"><p className="ideas-v3-eyebrow">{en ? 'LET’S CONNECT' : 'SIGAMOS CONVERSANDO'}</p><h2>{en ? 'Good ideas start with a conversation.' : 'Las buenas ideas comienzan con una conversación.'}</h2><Link to="/contact/">{t('ideas.contact')} <ArrowIcon direction="upRight" /></Link></div></section>
  </main>;
}
