import Link from "next/link";
import Button from "./form/Button";

const Analytics = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div>
        <p className=" font-bold lg:text-xl md:text-lg text-base">
          Location:
          <span className="font-normal text-black">
            &nbsp; Amsterdam, NL (Remote)
          </span>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-black text-lg lg:text-xl">
          The Opportunity:
        </h1>
        <p className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
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
        </p>
      </div>
      <div className="text-base">
        <h1 className="font-semibold text-black text-lg lg:text-xl">
          What You’ll Bring:
        </h1>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Programming skills in SQL required. Must have the ability to write
          complex, highly-optimized queries across multiple tables, data sources
          , and granularities of detail.
        </li>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Experience working with BI tools (Looker, Tableau, PowerBI, Cognos,
          etc.) to create efficient and accurate reporting and dashboards.
        </li>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Ability to translate complex business concepts into new SQL
          tables/definitions used to support both regular reporting and ad hoc
          requests.
        </li>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Excellent analytical skills, ability to build models and findings into
          actionable next steps with an understanding of Customer LTV, CAC,
          customer modeling and cohorting.
        </li>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Eye for detail and demonstrated ability to solve problems logically
          and systemically while ensuring information is accurate and consistent
          across reporting.
        </li>
        <li className="text-lg lg:text-xl lg:leading-[30px] leading-7 md:leading-8">
          Strong written and verbal communication skills to effectively present
          complex information to stakeholders in an easy-to-understand manner.
        </li>
      </div>
      <Link href="#">
        <Button className="my-4 lg:mt-8 !px-8 py-2">Apply now</Button>
      </Link>
    </div>
  );
};

export default Analytics;
