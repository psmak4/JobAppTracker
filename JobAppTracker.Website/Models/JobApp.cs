using System.ComponentModel.DataAnnotations;

namespace JobAppTracker.Website.Models
{
	public class JobApp
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Location { get; set; }
		public string Type { get; set; }

		[Required]
		public Contact Contact { get; set; }

		[Required]
		public ApplicationUser User { get; set; }
	}
}