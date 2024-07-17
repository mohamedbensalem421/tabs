import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.course-api.com/react-tabs-project"
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
      }
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h2>loading</h2>;
  }
  const { company, title, dates, duties } = jobs[value];
  return (
    <div className="container">
      <div className="company">
        {jobs.map(({ company }, index) => {
          return (
            <button
              className={`${index === value && "active"}`}
              onClick={() => {
                setValue(index);
              }}
              key={index}
            >
              {company}
            </button>
          );
        })}
      </div>
      {
        <div className="info">
          <h1>{title}</h1>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((ele, index) =>{
            return <article key={index}>
              <i class="fa-solid fa-angles-right"></i>
              <p>{ele}</p>
              </article>
          })}
        </div>
      }
    </div>
  );
}

export default App;
