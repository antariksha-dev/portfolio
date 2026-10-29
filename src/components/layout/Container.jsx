export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-3xl px-6 ${className}`}>{children}</div>
}
