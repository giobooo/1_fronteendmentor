import './App.css'
import HeaderT from './Header'
import Content from './Content'
import { useEffect, useState } from 'react'
import { filtersContext } from './filtesContext'
import { JobListing } from './CardComponent'
import data from "./data.json";



function App() {

  const [filters, updateFilters] = useState([]);
  const [jobslist, updateJobList] = useState([]);


  function filterJobs(job:JobListing)
  {
      let toReturn = true;
      console.log(filters);
      if(Array.isArray(filters)){
        filters.forEach(element => {
          if (job.languages.includes(element)){
              toReturn=false;
          }
      });
      }
      else{
        if (job.languages.includes(filters)){
          toReturn=false;
      }
      }

      return toReturn;
  }


  useEffect(() => {

    console.log("fire");
    const newArray = data.filter(filterJobs);
    console.log(newArray);
    updateJobList(newArray);


}, [filters]);




  return (
    <>
    <filtersContext.Provider value={{filters, updateFilters}}>
      <HeaderT />
      <Content jobs={jobslist} />
    </filtersContext.Provider>
    </>
  )
}

export default App
