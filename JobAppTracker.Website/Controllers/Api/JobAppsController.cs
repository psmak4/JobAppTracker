using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JobAppTracker.Website.Data;
using JobAppTracker.Website.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using JobAppTracker.Website.ApiModels.JobApps;

namespace JobAppTracker.Website.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/JobApps")]
	[Authorize]
	public class JobAppsController : Controller
    {
        private readonly ApplicationDbContext _context;
		private readonly UserManager<ApplicationUser> _userManager;

		public JobAppsController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
			_userManager = userManager;
		}

		// GET: api/JobApps
		[HttpGet]
        public IEnumerable<GetApiModel> GetJobApps()
        {
			var model = new List<GetApiModel>();
			var jobApps = _context.JobApps.Where(j => j.User.Id == _userManager.GetUserAsync(HttpContext.User).Result.Id);
			foreach (var jobApp in jobApps)
			{
				model.Add(new GetApiModel(jobApp));
			}

			return model;
        }

        // GET: api/JobApps/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJobApp([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var jobApp = await _context.JobApps.SingleOrDefaultAsync(m => m.Id == id);

            if (jobApp == null)
            {
                return NotFound();
            }

            return Ok(jobApp);
        }

        // PUT: api/JobApps/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobApp([FromRoute] int id, [FromBody] JobApp jobApp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobApp.Id)
            {
                return BadRequest();
            }

            _context.Entry(jobApp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobAppExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/JobApps
        [HttpPost]
        public async Task<IActionResult> PostJobApp([FromBody] JobApp jobApp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.JobApps.Add(jobApp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobApp", new { id = jobApp.Id }, jobApp);
        }

        // DELETE: api/JobApps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobApp([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var jobApp = await _context.JobApps.SingleOrDefaultAsync(m => m.Id == id);
            if (jobApp == null)
            {
                return NotFound();
            }

            _context.JobApps.Remove(jobApp);
            await _context.SaveChangesAsync();

            return Ok(jobApp);
        }

        private bool JobAppExists(int id)
        {
            return _context.JobApps.Any(e => e.Id == id);
        }
    }
}