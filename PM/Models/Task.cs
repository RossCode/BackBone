using System.Web.Script.Serialization;

namespace PM.Models
{
    public class Task
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public bool isCompleted { get; set; }
        public int priority { get; set; }
        [ScriptIgnore]
        public Project project { get; set; }
    }
}