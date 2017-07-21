using JobAppTracker.Website.Data;
using JobAppTracker.Website.Models;
using JobAppTracker.Website.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Threading.Tasks;

namespace JobAppTracker.Website
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

			if (env.IsDevelopment())
			{
				// For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
				builder.AddUserSecrets<Startup>();
			}

			builder.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services.AddIdentity<ApplicationUser, ApplicationRole>(options => {
				options.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents
				{
					OnRedirectToLogin = ctx =>
					{
						if (ctx.Request.Path.StartsWithSegments("/api") && ctx.Response.StatusCode == (int)HttpStatusCode.OK)
						{
							ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
						}
						else
						{
							ctx.Response.Redirect(ctx.RedirectUri);
						}
						return Task.FromResult(0);
					}
				};
			}).AddEntityFrameworkStores<ApplicationDbContext, int>().AddDefaultTokenProviders();

			services.AddMvc();

			// Add application services.
			services.AddTransient<IEmailSender, AuthMessageSender>();
			services.AddTransient<ISmsSender, AuthMessageSender>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage();
				app.UseBrowserLink();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseIdentity();

			// Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});

			app.MapWhen(x => !x.Request.Path.Value.StartsWith("/api"), builder =>
			{
				builder.UseMvc(routes =>
				{
					routes.MapSpaFallbackRoute(
						name: "spa-fallback",
						defaults: new { controller = "Pages", action = "App" });
				});
			});
		}
	}
}