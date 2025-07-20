import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Scroll Down</h1>
      {[...Array(100)].map((_, i) => (
        <p key={i}>This is line #{i + 1}</p>
      ))}
      <ScrollToTopButton />
    </div>
  );
}