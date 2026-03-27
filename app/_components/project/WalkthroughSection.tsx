import { WalkthroughSection as SectionType } from "@/data/work";

type Props = {
  section: SectionType;
};

export function WalkthroughSection({ section }: Props) {
  return (
    <section className="py-10 border-t border-[#c2d3c7]/40">
      <h2 className="text-xl font-semibold text-[#102018] mb-4">
        {section.title}
      </h2>

      <p className="text-base text-[#405347] leading-relaxed">
        {section.content}
      </p>

      {section.highlights && section.highlights.length > 0 && (
        <ul className="mt-6 space-y-2">
          {section.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#405347]">
              <span className="text-[#9bb7a5] mt-1">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
