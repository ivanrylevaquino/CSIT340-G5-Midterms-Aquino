import FeatureCard from "./FeatureCard.jsx";

function Features() {
  const features = [
    {
      tag: "Free",
      title: "Open source",
      description: "Read the code and use it in any project.",
    },
    {
      tag: "Small",
      title: "Lightweight",
      description: "Import only the components the page uses.",
    },
    {
      tag: "Simple",
      title: "Easy to learn",
      description: "Every component takes a few plain props.",
    },
  ];

  return (
    <main className="grid grid-cols-3 gap-8 px-20">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          tag={feature.tag}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </main>
  );
}

export default Features;