using JobAppTracker.Website.ApiModels.Contacts;
using JobAppTracker.Website.Data;
using JobAppTracker.Website.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace JobAppTracker.Website.Controllers.Api
{
	[Produces("application/json")]
	[Route("api/Contacts")]
	[Authorize]
	public class ContactsController : Controller
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<ApplicationUser> _userManager;

		public ContactsController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
		{
			_context = context;
			_userManager = userManager;
		}

		// GET: api/Contacts
		[HttpGet]
		public IEnumerable<GetApiModel> GetContacts()
		{
			var model = new List<GetApiModel>();
			var contacts = _context.Contacts.Where(c => c.User.Id == _userManager.GetUserAsync(HttpContext.User).Result.Id).OrderBy(c => c.Name);
			foreach (var contact in contacts)
			{
				model.Add(new GetApiModel(contact));
			}

			return model;
		}

		// GET: api/Contacts/5
		[HttpGet("{id}")]
		public async Task<IActionResult> GetContact([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var contact = await _context.Contacts.SingleOrDefaultAsync(c => c.Id == id && c.User.Id == _userManager.GetUserAsync(HttpContext.User).Result.Id);
			if (contact == null)
				return NotFound();

			var model = new GetApiModel(contact);

			return Ok(model);
		}

		// PUT: api/Contacts/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutContact([FromRoute] int id, [FromBody] PutApiModel model)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			if (id != model.Id)
				return BadRequest();

			try
			{
				var contact = await _context.Contacts.SingleOrDefaultAsync(c => c.Id == id && c.User.Id == _userManager.GetUserAsync(HttpContext.User).Result.Id);
				if (contact == null)
					return NotFound();

				contact.Name = model.Name;
				contact.Email = model.Email;
				contact.Phone = model.Phone;

				await _context.SaveChangesAsync();
			}
			catch (Exception ex)
			{
				return StatusCode((int)HttpStatusCode.InternalServerError, ex);
			}

			return NoContent();
		}

		// POST: api/Contacts
		[HttpPost]
		public async Task<IActionResult> PostContact([FromBody] PostApiModel model)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			var contact = new Contact()
			{
				Name = model.Name,
				Email = model.Email,
				Phone = model.Phone,
				User = _userManager.GetUserAsync(HttpContext.User).Result
			};

			_context.Contacts.Add(contact);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetContact", new { id = contact.Id }, model);
		}

		// DELETE: api/Contacts/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteContact([FromRoute] int id)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			var contact = await _context.Contacts.SingleOrDefaultAsync(c => c.Id == id && c.User.Id == _userManager.GetUserAsync(HttpContext.User).Result.Id);
			if (contact == null)
				return NotFound();

			_context.Contacts.Remove(contact);
			await _context.SaveChangesAsync();

			return Ok(contact);
		}
	}
}