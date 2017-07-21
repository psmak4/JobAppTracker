using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;

namespace JobAppTracker.Website.Models
{
	public class ApplicationUser : IdentityUser<int>
	{
		public ICollection<Contact> Contacts { get; set; }
		public ICollection<JobApp> JobApps { get; set; }
	}
}