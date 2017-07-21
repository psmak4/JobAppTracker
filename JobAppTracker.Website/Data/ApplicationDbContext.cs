using JobAppTracker.Website.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace JobAppTracker.Website.Data
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int>
	{
		public DbSet<Contact> Contacts { get; set; }
		public DbSet<JobApp> JobApps { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<ApplicationUser>(i =>
			{
				i.ToTable("Users");
				i.HasKey(x => x.Id);
			});

			builder.Entity<ApplicationRole>(i =>
			{
				i.ToTable("Roles");
				i.HasKey(x => x.Id);
			});

			builder.Entity<IdentityUserRole<int>>(i =>
			{
				i.ToTable("UserRoles");
				i.HasKey(x => new { x.RoleId, x.UserId });
			});

			builder.Entity<IdentityUserLogin<int>>(i =>
			{
				i.ToTable("UserLogins");
				i.HasKey(x => new { x.ProviderKey, x.LoginProvider });
			});

			builder.Entity<IdentityRoleClaim<int>>(i =>
			{
				i.ToTable("RoleClaims");
				i.HasKey(x => x.Id);
			});

			builder.Entity<IdentityUserClaim<int>>(i =>
			{
				i.ToTable("UserClaims");
				i.HasKey(x => x.Id);
			});

			builder.Entity<IdentityUserToken<int>>(i =>
			{
				i.ToTable("UserTokens");
				i.HasKey(x => new { x.UserId, x.LoginProvider, x.Name });
			});

			builder.Entity<Contact>().HasOne(i => i.User).WithMany(x => x.Contacts).IsRequired().OnDelete(DeleteBehavior.Restrict);

			builder.Entity<JobApp>().HasOne(i => i.User).WithMany(x => x.JobApps).IsRequired().OnDelete(DeleteBehavior.Restrict);

			builder.Entity<JobApp>().HasOne(i => i.Contact).WithMany(x => x.JobApps).IsRequired().OnDelete(DeleteBehavior.Restrict);
		}
	}
}