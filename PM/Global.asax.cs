using System.Web.Mvc;
using System.Web.Routing;

namespace PM
{
    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("ProjectList", "Projects", new {controller = "Projects", action = "List"}, new { httpMethod = new HttpMethodConstraint("GET") });
            routes.MapRoute("ProjectGet", "Projects/{id}", new {controller = "Projects", action = "Get"}, new { httpMethod = new HttpMethodConstraint("GET") });
            routes.MapRoute("ProjectDelete", "Projects/{id}", new {controller = "Projects", action = "Delete"}, new { httpMethod = new HttpMethodConstraint("DELETE") });
            routes.MapRoute("ProjectCreate", "Projects", new {controller = "Projects", action = "Create"}, new { httpMethod = new HttpMethodConstraint("POST") });
            routes.MapRoute("ProjectUpdate", "Projects/{id}", new {controller = "Projects", action = "Update"}, new { httpMethod = new HttpMethodConstraint("PUT") });

            routes.MapRoute("TaskList", "projects/{projectId}/Tasks", new {controller = "Tasks", action = "List"}, new {httpMethod = new HttpMethodConstraint("GET")});
            routes.MapRoute("TaskGet", "projects/{projectId}/Tasks/{id}", new {controller = "Tasks", action = "Get"}, new {httpMethod = new HttpMethodConstraint("GET")});
            routes.MapRoute("TaskDelete", "projects/{projectId}/Tasks/{id}", new {controller = "Tasks", action = "Delete"}, new {httpMethod = new HttpMethodConstraint("DELETE")});
            routes.MapRoute("TaskCreate", "projects/{projectId}/Tasks", new {controller = "Tasks", action = "Create"}, new {httpMethod = new HttpMethodConstraint("POST")});
            routes.MapRoute("TaskUpdate", "projects/{projectId}/Tasks/{id}", new {controller = "Tasks", action = "Update"}, new {httpMethod = new HttpMethodConstraint("PUT")});

            routes.MapRoute("Default", "{controller}/{action}/{id}", new { controller = "Main", action = "Index", id = UrlParameter.Optional });
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);
        }
    }
}