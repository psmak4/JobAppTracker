using JobAppTracker.Website.Models;

namespace JobAppTracker.Website.ApiModels.JobApps
{
	public class GetApiModel
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public string Location { get; set; }

		public string Type { get; set; }

		public GetApiModel(JobApp jobApp)
		{
			Id = jobApp.Id;
			Title = jobApp.Title;
			Location = jobApp.Location;
			Type = jobApp.Type;
		}
	}
}