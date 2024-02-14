function Body() {
  return (
    <div className="bg-black h-[800px]">
      <div className="pt-32">
        <ol className="photo bg-yellow-400 h-[600px] w-[80%] pl-10 ml-40 mb-0 font-roboto ">
          <li className="flex">
            <img
              className="pt-[20px]"
              src="/cat.jpg"
              width="500"
              height="500"
              alt="cat"
            />
            <div>
              <h1 className="flex ml-12 mt-4 font-bold">Über uns</h1>
              <h5 className="flex ml-12 mr-40">
                Wir sind die glücklichen Besitzer dieses besonderen Ortes, wo
                jeder Tag mit Freude und Liebe für unsere wunderbaren Haustiere
                gefüllt ist. Unsere kleine Familie besteht aus zwei Menschen und
                unseren treuen Freunden - Katzen und Kätzchen.
                <br /> Wir sind stolz auf unsere einzigartigen Katzenrassen, die
                für ihre Freundlichkeit, Zuneigung und außergewöhnliche
                Intelligenz bekannt sind. Unsere Kätzchen sind wahre
                Sonnenscheine, immer zum Spielen bereit und umwerfend in ihrer
                Schönheit, Anmut und Freundlichkeit. <br /> Wir kümmern uns sehr
                um unsere Haustiere und versorgen sie mit allem, was sie für ein
                angenehmes Leben und Unterhaltung brauchen. In unserem Haus
                stehen unseren Katzen immer alle Türen offen, denn sie sind
                vollwertige Mitglieder unserer Familie, die immer ein Lächeln
                und Freude in unser Leben bringen.
              </h5>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Body;
