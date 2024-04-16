import {useQuery} from "@apollo/client"

import Projects from "../../grapql/query/projects";

export const useProjects = () =>{
  const {data,loading,error} = useQuery(Projects,{
    fetchPolicy:"cache-and-network"
  });
  return{
    loading,
    error,
    projects: data.projects || [],
  }
};
