import AdvantagesList from "../../Components/Lists/AdvantagesList/AdvantagesList";
import LinkList from "../../Components/Lists/LinksList/LinkList";
import "./styled.css";

function OurServices() {
  return (
    <div className="ourServicesContainer">
      <span>OUR SERVICES</span>
      <div className="listsContainer">
        <LinkList
          items={[
            "General PR Strategy (Strategy)",
            "Media Relations (Media)",
            "Pitch Deck Creation (Pitch)",
            "Content Creation (Content)",
            "Investor Relations Support(Investors)",
          ]}
        />
        <AdvantagesList
          items={[
            {
              head: `"Your roadmap to PR success."`,

              text: `We analyze your communication and create a comprehensive plan with clear objectives, audiences, and action steps.`,
            },
            {
              head: `"Get your story heard by the right voices."`,

              text: `We build strong media connections and craft newsworthy content to maximize your visibility.`,
            },
            {
              head: `"Investor-ready decks that win attention."`,

              text: `Compelling presentations that tell your story and capture investor interest.`,
            },
            {
              head: `"Content that keeps your audience engaged."`,

              text: `Social media, blog, and newsletter management that resonates with your audience.`,
            },
            {
              head: `"Position your business to attract investors."`,

              text: `Visibility on investor platforms, pitches, and impactful meetings.`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default OurServices;
