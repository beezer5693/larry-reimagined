import thinkDifferently from "../../public/assets/home/thinking.jpg";
import leadership from "../../public/assets/home/leadership.jpg";
import grit from "../../public/assets/home/grit.jpg";
import courage from "../../public/assets/home/courage-2.jpg";
import awareness from "../../public/assets/home/awareness.jpg";

export const NEGATIVE_THOUGHTS = [
  {
    thought: "Impostor Syndrome",
    description:
      "Feeling like a fraud and believing that your achievements are undeserved, which can hinder self-confidence and career progression.",
  },
  {
    thought: "Fear of Failure",
    description:
      "Constantly worrying about making mistakes or failing in my personal life or business endeavors, leading to hesitancy and missed opportunities.",
  },
  {
    thought: "Comparing to Others",
    description:
      "Continuously comparing oneself to colleagues, competitors, and others, making us feel inadequate, which can undermine our self-esteem and innovation.",
  },
  {
    thought: "Lack of Self-Confidence",
    description:
      "Believing you are not qualified or capable of taking on challenging roles or responsibilities, which can limit personal and career growth.",
  },
  {
    thought: "Avoiding Risk",
    description:
      "Being overly risk-averse and shying away from innovative ideas, ventures, and other personal opportunities which can stifle development and growth in all areas of our lives.",
  },
  {
    thought: "Overthinking",
    description:
      "Dwelling on negative possibilities or scenarios, which can lead to indecision and missed opportunities.",
  },
  {
    thought: "Negative Self-Talk",
    description:
      "Engaging in self-criticism and negative internal dialogue, which can erode self-esteem and motivation.",
  },
  {
    thought: "Insecurity About Networking",
    description:
      "Feeling inadequate or unworthy when interacting with colleagues or potential business connections, which can impede professional relationships and growth.",
  },
  {
    thought: "Resistance to Change",
    description:
      "Being resistant to change can lead to missed opportunities, stagnation, and a failure to adapt to evolving circumstances, ultimately hindering personal and professional growth.",
  },
  {
    thought: "Discounting Achievements",
    description:
      "Downplaying or dismissing one's successes and accomplishments, can erode self-confidence and hinder your motivation to pursue new goals, limiting your overall potential for success and personal fulfillment.",
  },
];

export const NAV_LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "talks", label: "Talks", href: "/Talks" },
  { key: "contact", label: "Contact", href: "/contact" },
  { key: "podcast", label: "Podcast", href: "/podcast" },
];

export const KEYS_TO_MASTER = [
  {
    title: "Thinking differently",
    description: "A positive mindset shift sparks positive life outcomes.",
    imageSrc: thinkDifferently,
    style: "object-right",
  },
  {
    title: "self-leadership",
    description: "Take control of your own actions and decisions.",
    imageSrc: leadership,
    style: "object-center",
  },
  {
    title: "Developing grit",
    description: "Overcome hurdles with determination and resilience",
    imageSrc: grit,
    style: "object-center",
  },
  {
    title: "Embracing courage",
    description: "Face challenges with bravery and determination.",
    imageSrc: courage,
    style: "object-right",
  },
  {
    title: "Becoming aware",
    description: "Understand your thoughts, emotions, and behaviors.",
    imageSrc: awareness,
    style: "object-right",
  },
];
