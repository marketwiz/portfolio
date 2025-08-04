import ClientPortfolioChart from "@/components/ClientPortfolioChart";

export default function Home() {
  return (
    <>
      <section id="home" className="card">
        <h2 className="text-3xl font-semibold mb-2">Welcome</h2>
        <p className="text-gray-700">
          Explore my work: projects, MN 500 portfolio, articles & publications.
        </p>
      </section>

      <section id="projects" className="card">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        {/* …project appendices… */}
      </section>

      <section id="portfolio" className="card">
        <h2 className="text-3xl font-semibold mb-4">MN 500 Holdings</h2>
        <ClientPortfolioChart />
      </section>

      <section id="articles" className="card">
        <h2 className="text-3xl font-semibold mb-4">Articles</h2>
        {/* …article links… */}
      </section>

      <section id="publications" className="card">
        <h2 className="text-3xl font-semibold mb-4">Publications</h2>
        {/* …publication list… */}
      </section>

      <section id="contact" className="card">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        {/* …email & socials… */}
      </section>
    </>
  );
}
