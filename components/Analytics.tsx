const Analytics = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div>
        <p className="text-base font-semibold">
          Location:
          <span className="font-normal text-gray-700">
            &nbsp; Amsterdam, NL (Remote)
          </span>
        </p>
      </div>
      <div className="text-base">
        <h1 className="font-semibold text-gray-700">The Opportunity:</h1>
        <h1>
          As a Sr. Business Analyst you will own key customer metrics, reporting
          and analytics for Vivid Picks. You will serve as the analytical guru
          working closely with Product, Marketing and the Vivid Picks team to
          extract key data points and model the impact of new marketing
          channels, campaigns and strategic projects. You will build dashboards,
          analyze data, and provide modeling expertise to generate actionable
          insights that will drive business decisions. The Sr. Business Analyst
          position provides a high-performing, analytically inclined individual
          the opportunity to own Vivid Picks reporting and analytics, learn the
          business by working across multiple functional areas, and have close
          visibility with business leaders. The ideal candidate is both data
          savvy, utilizing SQL and various BI tools to gather and organize data,
          as well as adept at modeling and analyzing new ideas.
        </h1>
      </div>
      <div className="text-base">
        <h1 className="font-semibold text-gray-700">What You’ll Bring:</h1>
        <li>
          Programming skills in SQL required. Must have the ability to write
          complex, highly-optimized queries across multiple tables, data sources
          , and granularities of detail.
        </li>
        <li>
          Experience working with BI tools (Looker, Tableau, PowerBI, Cognos,
          etc.) to create efficient and accurate reporting and dashboards.
        </li>
        <li>
          Ability to translate complex business concepts into new SQL
          tables/definitions used to support both regular reporting and ad hoc
          requests.
        </li>
        <li>
          Excellent analytical skills, ability to build models and findings into
          actionable next steps with an understanding of Customer LTV, CAC,
          customer modeling and cohorting.
        </li>
        <li>
          Eye for detail and demonstrated ability to solve problems logically
          and systemically while ensuring information is accurate and consistent
          across reporting.
        </li>
        <li>
          Strong written and verbal communication skills to effectively present
          complex information to stakeholders in an easy-to-understand manner.
        </li>
      </div>
      <button className="text-sm rounded-full bg-red-500 text-white w-max px-4 py-2 mt-4">
        Apply now
      </button>
    </div>
  );
};

export default Analytics;
