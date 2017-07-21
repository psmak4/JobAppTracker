using JobAppTracker.Website.Models;

namespace JobAppTracker.Website.ApiModels.Contacts
{
	public class GetApiModel
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Phone { get; set; }

		public string Email { get; set; }

		public GetApiModel(Contact contact)
		{
			Id = contact.Id;
			Name = contact.Name;
			Phone = contact.Phone;
			Email = contact.Email;
		}
	}
}