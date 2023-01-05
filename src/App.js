import { data } from "./assets/data.js";
import JobItem from "./components/JobItem";
import cuid from "cuid";
import { useEffect, useState } from "react";
import FiltersRow from "./components/FiltersRow.jsx";

function App() {
  const [jobs, setJobs] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const filteredJobs = data.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return selectedTags.every((selectedTag) => {
        return jobTags.includes(selectedTag);
      });
    });
    setJobs(filteredJobs);
  }, [selectedTags]);
  return (
    <div className="main-container">
      <div className="listing-container">
        {selectedTags.length !== 0 ? (
          <FiltersRow
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        ) : (
          ""
        )}
        {jobs.map((job) => (
          <JobItem key={cuid()} setSelectedTags={setSelectedTags} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;
