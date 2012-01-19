using System.Collections.Generic;

namespace PM.Models
{
    public class Project
    {
        public int id { get; set; }
        public string projectName { get; set; }
        public List<Task> tasks { get; set; }

        public Project()
        {
            tasks = new List<Task>();
        }
    }
}