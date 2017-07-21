using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobAppTracker.Website.Controllers
{
	public class PagesController : Controller
	{
		[Authorize]
		public IActionResult App()
		{
			return View();
		}
	}
}