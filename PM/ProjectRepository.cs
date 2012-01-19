using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Caching;
using PM.Models;

namespace PM
{
    public interface  IProjectRepository
    {
        void Save(Project project);
        void Delete(Project project);
        Project Get(int id);
        IQueryable<Project> List();
    }

    public class CacheProjectRepository : IProjectRepository
    {
        private IList<Project> Projects
        {
            get
            {
                if (HttpContext.Current.Cache["Projects"] == null)
                {
                    var projectList = new List<Project>
                                          {
                                              new Project {id = 1, projectName = "Project 1"},
                                              new Project {id = 2, projectName = "Project 2"},
                                              new Project {id = 3, projectName = "Project 3"}
                                          };

                    var project = projectList.First();
                    project.tasks = new List<Task>
                                        {
                                            new Task {id = 1, description = "Task 1", title = "title task 1", isCompleted = false, priority = 1, project = project},
                                            new Task {id = 2, description = "Task 2", title = "title task 2", isCompleted = false, priority = 2, project = project},
                                            new Task {id = 3, description = "Task 3", title = "title task 3", isCompleted = false, priority = 3, project = project},
                                        };

                    HttpContext.Current.Cache.Add("Projects", projectList, null, DateTime.MaxValue, new TimeSpan(10, 0, 0, 0), CacheItemPriority.Normal, null);
                }
                return HttpContext.Current.Cache.Get("Projects") as List<Project>;
            }
        } 

        public void Save(Project project)
        {
            if (project.id <= 0)
            {
                project.id = Projects.Any() ? Projects.Max(p => p.id) + 1 : 1;
            }
            if (Projects.Any() && Projects.Any(p => p.id == project.id))
            {
                Projects.First(p => p.id == project.id).projectName = project.projectName;
            } 
            else
            {
                Projects.Add(project);    
            }
        }

        public void Delete(Project project)
        {
            var projectToRemove = Projects.FirstOrDefault(p => p.id == project.id);

            if (projectToRemove != null)
            {
                Projects.Remove(projectToRemove);
            }
        }

        public Project Get(int id)
        {
            return Projects.FirstOrDefault(p => p.id == id);
        }

        public IQueryable<Project> List()
        {
            return Projects.AsQueryable();
        }
    }
}