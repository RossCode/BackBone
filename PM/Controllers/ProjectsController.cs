using System.Collections.Generic;
using System.Web.Mvc;
using PM.Models;

namespace PM.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly IProjectRepository projectRepository;
        
        public ProjectsController()
        {
            projectRepository = new CacheProjectRepository();    
        }

        public ActionResult List()
        {
            return Json(projectRepository.List(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Get(int id)
        {
            return Json(projectRepository.Get(id), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create(Project project)
        {
            projectRepository.Save(project);
            return Json(project);
        }

        public ActionResult Update(Project project)
        {
            projectRepository.Save(project);
            return Json(project);
        }

        public ActionResult Delete(int id)
        {
            var project = projectRepository.Get(id);

            if (project != null)
            {
                projectRepository.Delete(project);
            }

            return Json(true);
        }
    }
}
