import React from 'react';
import { Globe2, Clock, Code2, Mail } from 'lucide-react';
import { FeatureCard, TechStackCard, CodeSnippet } from './components';
import { featuresConfig } from './config';
import { GradientText } from '../ui';

const Features = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Client Collaboration Card */}
        <FeatureCard
          icon={<Globe2 className="w-6 h-6 text-purple-400" />}
          title={
            <h3 className="text-2xl font-bold mb-4">
              I prioritize client collaboration, fostering{' '}
              <GradientText>open communication</GradientText>
            </h3>
          }
          image="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        {/* Timezone Card */}
        <FeatureCard
          icon={<Clock className="w-6 h-6 text-purple-400" />}
          title={
            <h3 className="text-2xl font-bold mb-4">
              I'm very flexible with{' '}
              <GradientText>timezone communications</GradientText>
            </h3>
          }
          content={
            <div className="flex gap-4 mt-4">
              {featuresConfig.timezones.map((zone) => (
                <span
                  key={zone}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm"
                >
                  {zone}
                </span>
              ))}
            </div>
          }
        />

        {/* Tech Stack Card */}
        <TechStackCard />

        {/* Contact Card */}
        <FeatureCard
          icon={<Mail className="w-6 h-6 text-purple-400" />}
          title={
            <h3 className="text-2xl font-bold mb-4">
              Do you want to start{' '}
              <GradientText>a project together?</GradientText>
            </h3>
          }
          content={
            <button className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/15 transition-colors inline-flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Copy my email address
            </button>
          }
        />
      </div>
    </section>
  );
};

export default Features;
