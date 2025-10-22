import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedCard } from '@/components/AnimatedCard';
import { toast } from '@/hooks/use-toast';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const pillars = [
  { title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
  { title: 'Collaboration', description: 'Working together to achieve excellence' },
  { title: 'Excellence', description: 'Delivering quality in every project' }
];

const values = [
  'Integrity', 'Creativity', 'Customer Focus',
  'Quality', 'Accountability', 'Passion'
];

export const AboutSection = () => {
  const titleRef = useTextReveal(true);
  const pillarsRef = useStaggerAnimation(true, '.pillar-card');
  const valuesRef = useStaggerAnimation(true, '.value-card');

  const handleManifestoClick = () => {
    toast({
      title: "Our Manifesto",
      description: "We believe in transforming ordinary ideas into extraordinary outcomes through creativity and innovation.",
    });
  };

  return (
    <div className="w-screen min-h-screen bg-background px-4 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-8">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-foreground tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
            Inside the Lens: Our Story
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
            gumming4u is a digital marketing agency dedicated to crafting exceptional
            digital experiences. Founded by visionaries Aryaan Alam and Isaac Vivian,
            we transform brands through strategic creativity and cutting-edge technology.
          </p>
        </div>

        {/* Company Story */}
        <AnimatedCard className="p-8 bg-card">
          <h3 className="text-3xl font-light mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">Company Story</h3>
          <p className="text-muted-foreground leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
            Founded in 2018, gumming4u emerged from a vision to revolutionize digital marketing.
            What started as a small team of passionate creatives has grown into a full-service
            agency serving clients across 8+ industries. Our journey has been marked by innovation,
            dedication, and a commitment to delivering extraordinary outcomes for every client.
          </p>
        </AnimatedCard>

        {/* Mission */}
        <div className="text-center">
          <h3 className="text-3xl font-light mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Our Mission</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            To empower businesses through strategic digital marketing, creative excellence,
            and cutting-edge technology, transforming ordinary ideas into extraordinary outcomes.
          </p>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-3xl font-light text-center mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard className="p-8 bg-card">
              <h4 className="text-2xl font-light mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Aryaan Alam</h4>
              <p className="text-muted-foreground mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Managing Director</p>
              <p className="text-muted-foreground leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Visionary leader with a passion for innovation and strategic thinking.
                Aryaan drives the company's growth and ensures excellence in every project.
              </p>
            </AnimatedCard>
            <AnimatedCard className="p-8 bg-card">
              <h4 className="text-2xl font-light mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Isaac Vivian</h4>
              <p className="text-muted-foreground mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Marketing Director</p>
              <p className="text-muted-foreground leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Creative genius specializing in brand strategy and digital campaigns.
                Isaac leads our marketing initiatives with creativity and precision.
              </p>
            </AnimatedCard>
          </div>
        </div>

        {/* Three Pillars */}
        <div ref={pillarsRef}>
          <h3 className="text-3xl font-light text-center mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Three Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <AnimatedCard key={pillar.title} className="pillar-card p-8 bg-card text-center">
                <h4 className="text-2xl font-light mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{pillar.title}</h4>
                <p className="text-muted-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">{pillar.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef}>
          <h3 className="text-3xl font-light text-center mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <AnimatedCard key={value} className="value-card p-6 bg-card text-center">
                <p className="text-xl font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{value}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <AnimatedButton
            onClick={handleManifestoClick}
            size="lg"
            className="text-lg px-8 py-6"
          >
            Read Our Manifesto
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};
