const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Selamat datang di Portofolio Game Saya!
        </h1>
        <p className="text-lg mb-6">
          Dibangun menggunakan <strong>Next.js</strong>,
          <strong> ShadcnUI</strong>, <strong>Redux</strong>, dan
          <strong>TypeScript</strong>. Proyek ini adalah karya saya dalam
          menerapkan praktik terbaik dalam pengembangan React. Data game diambil
          dari
          <a
            href="https://rapidapi.com/accujazz/api/rawg-video-games-database"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            RAWG Video Games Database
          </a>
          melalui Rapid API. Selama proses development, saya menggunakan
          data.json untuk mengurangi jumlah request, dan nantinya akan kembali
          terhubung langsung dengan API.
        </p>
        <p className="text-lg mb-6">
          Proyek ini juga mengimplementasikan berbagai konsep React modern,
          seperti komponen
          <a
            href="https://github.com/iqmalr/iqmalr-game-list/tree/master/src/utils/EachUtils.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            EachUtils
          </a>
          untuk efisiensi pengolahan data serta
          <a
            href="https://github.com/iqmalr/iqmalr-game-list/tree/master/src/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            custom hooks
          </a>
          untuk penanganan data secara modular.
        </p>
      </div>
    </section>
  );
};

export default Hero;
