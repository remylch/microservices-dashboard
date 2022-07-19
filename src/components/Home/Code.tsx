import React from "react";
import { IoGitCommit } from "react-icons/io5";
import { fetchGitlabProjects, fetchProjectCommits } from "../../api/gitlabAPI";
import TopBar from "../Settings/TopBar";

const Code = () => {
  const [idProjectSelected, setIdProjectSelected] = React.useState<
    number | undefined
  >();

  const [commits, setCommits] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    fetchGitlabProjects().then((res: any) => {
      setProjects(res.data);
    });
  }, []);

  React.useEffect(() => {
    if (idProjectSelected)
      fetchProjectCommits(idProjectSelected).then((res) => {
        console.log(res);
        setCommits(res.data);
      });
    return () => {
      setCommits([]);
    };
  }, [idProjectSelected]);

  return (
    <div className="h-full w-full flex flex-1 flex-col min-h-screen">
      <TopBar projects={projects} setIdProjectSelected={setIdProjectSelected} />
      <div className="p-10 flex h-full w-full flex-col gap-5">
        {idProjectSelected ? (
          <>
            <h3 className="text-gray-400 ">Latests commits</h3>
            {commits.map((commit: any) => {
              const date = commit.created_at.split("T")[0];
              const hour = date.split("+")[0];

              return (
                <div className="flex flex-col px-5 py-2" key={commit.id}>
                  <div className="font-ligh text-sm text-gray-500 flex gap-3">
                    <label>{date}</label>
                    <label>{hour}</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-black">{commit.author_name}</span>
                    <IoGitCommit className="w-5 h-5 pt-1" />
                    <q className="text-gray-600 text-sm font-semibold">
                      {commit.message}
                    </q>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="flex font-semibold flex-1 justify-center items-center text-gray-500">
            <h1>No project selected.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Code;
