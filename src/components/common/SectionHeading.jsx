export default function SectionHeading({ children, id }) {
  return (
    <h2 id={id} className="text-xl font-semibold text-heading sm:text-2xl">
      {children}
    </h2>
  )
}
