import "./ProjectCard.css";

function ProjectCard(props) {
  const {
    eachProject: { project_name, deployed, participants, start_date, end_date },
  } = props;

  return (
    <li className="card">
      <button className="close">✖️</button>
      <h3>{project_name}</h3>
      <p>Start date: {start_date}</p>
      <p>End date: {end_date}</p>
      <p>Deployed: {deployed ? "✅" : "❌"}</p>
      <h4>Participants:</h4>
      <ul>
        {participants.map((participant, index) => {
          return <li key={index}>{participant}</li>;
        })}
      </ul>
    </li>
  );
}

export default ProjectCard;
