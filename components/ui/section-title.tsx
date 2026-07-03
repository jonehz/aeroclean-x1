type Props = {
  badge: string;
  title: string;
  description: string;
};

export function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className="
          rounded-full
          bg-green-100
          px-4
          py-2
          text-sm
          font-medium
          text-green-700
          dark:bg-green-950
          dark:text-green-300
        "
      >
        {badge}
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-lg
          text-slate-600
          dark:text-slate-300
        "
      >
        {description}
      </p>
    </div>
  );
}