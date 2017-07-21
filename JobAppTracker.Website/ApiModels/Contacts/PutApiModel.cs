using System.ComponentModel.DataAnnotations;

namespace JobAppTracker.Website.ApiModels.Contacts
{
	public class PutApiModel
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }

		public string Phone { get; set; }

		public string Email { get; set; }
	}
}