import  "./ResearchPapers.css";

const researchPapers = [
  {
    title: "Beyond Ideology",
    author: "Mary Watkins",
    link: "https://link.springer.com/chapter/10.1057/9780230227736_3",
  },
  {
    title: "Beyond Development",
    author: "Mary Watkins",
    link: "https://link.springer.com/chapter/10.1057/9780230227736_4",
  },
  {
    title: "The diagnosis of mild cognitive",
    author: "Marilyn S. Albert",
    link: "https://alz-journals.onlinelibrary.wiley.com/doi/abs/10.1016/j.jalz.2011.03.008",
  },
  {
    title: "Chiral phase transition of a dense",
    author: "S.M.A. Tabatabaee Mehr",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0003491623001434",
  },
  {
    title: "probing the formation of quark matter",
    author: "Gao-Chan Yong",
    link: "https://www.sciencedirect.com/science/article/pii/S0370269323003854",
  },
  {
    title: "The vehicle routing problem",
    author: "Peter L. Hammer",
    link: "https://epubs.siam.org/doi/pdf/10.1137/1.9780898718515.fm",
  }
];

const ResearchPapers = () => {
  return (
    <section className="research-papers bg-cyan-100 rounded-2xl">
      <h2 className="text-center sm:text-2xl sm:mb-7 md:text-4xl text-cyan-600 font-bold italic">Recommended Research Papers</h2>
      <div className="paper-list text-center pb-6 pt-2">
        {researchPapers.map((paper, index) => (
          <div key={index} className="paper">
            <h3 className="text-2xl text-cyan-700 font-bold italic my-2">{paper.title}</h3>
            <p className="text-center text-lg text-cyan-700 font-bold italic"><span className="font-extrabold text-cyan-800">Author</span> : {paper.author}</p>
            <a className="text-center text-lg text-cyan-700 font-bold italic" href={paper.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline btn-md my-2 italic capitalize">Read Paper</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
