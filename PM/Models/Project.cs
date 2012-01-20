using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace PM.Models
{
    public class Project
    {
        public int id { get; set; }
        public string projectName { get; set; }
        [ScriptIgnore]
        public List<Task> tasks { get; set; }

        public Project()
        {
            tasks = new List<Task>();
        }
    }
}