using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using PM.Models;

namespace PM.Controllers
{
    public class TasksController : Controller
    {
        private readonly IProjectRepository projectRepository;
        
        public TasksController()
        {
            projectRepository = new CacheProjectRepository();    
        }

        public ActionResult List(int projectId)
        {
            var project = projectRepository.Get(projectId);
            if (project != null)
            {
                return Json(project.tasks, JsonRequestBehavior.AllowGet);
            }
            return Json(new List<Task>(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Get(int projectId, int id)
        {
            var project = projectRepository.Get(projectId);
            var task = project.tasks.FirstOrDefault(t => t.id == id);
            return Json(task, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create(int projectId, Task task)
        {
            var project = projectRepository.Get(projectId);
            project.tasks.Add(task);
            projectRepository.Save(project);
            return Json(task);
        }

        public ActionResult Update(int projectId, Task task)
        {
            var project = projectRepository.Get(projectId);
            var oldTask = project.tasks.FirstOrDefault(t => t.id == task.id);
            project.tasks.Remove(oldTask);
            project.tasks.Add(task);
            projectRepository.Save(project);
            return Json(task);
        }

        public ActionResult Delete(int projectId, int id)
        {
            var project = projectRepository.Get(projectId);

            if (project != null)
            {
                var task = project.tasks.FirstOrDefault(t => t.id == id);
                if (task != null)
                {
                    project.tasks.Remove(task);
                    projectRepository.Delete(project);
                }
            }

            return Json(true);
        }
    }
}
