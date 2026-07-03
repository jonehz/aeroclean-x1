type Props = {
  label: string;
  value: string;
};

export function SpecCard({
  label,
  value,
}: Props) {
  return (
    <article
      className="
        rounded-3xl
        border
        p-8
        text-center
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-widest
          text-slate-500
        "
      >
        {label}
      </p>

      <h3
        className="
          mt-4
          text-3xl
          font-bold
        "
      >
        {value}
      </h3>
    </article>
  );
}