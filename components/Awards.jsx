import Image from 'next/image';
import SectionObserver from './SectionObserver';
import { awardsData } from '@/data/portfolio';

export default function Awards() {
  return (
    <SectionObserver id="awards">
      <h2>Awards & Recognition</h2>
      <div className="awards-grid">
        {awardsData.map((award) => (
          <div key={award.id} className="award-card">
            <div className="award-image">
              <Image src={award.image} alt={award.title} width={80} height={80} />
            </div>
            <div className="award-content">
              <h3>{award.title}</h3>
              <p className="award-issuer">{award.issuer}</p>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionObserver>
  );
}