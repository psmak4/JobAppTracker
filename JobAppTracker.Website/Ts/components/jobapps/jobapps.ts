import * as ko from 'knockout';
import { JobApp } from '../../models/jobApp';
import { JobAppsService } from "../../services/jobApps-service";

class HomePageViewModel {
	public JobApps = ko.observableArray<JobApp>();

	private jobAppsService = new JobAppsService();

	constructor() {
		this.GetJobApps();
	}

	private async GetJobApps() {
		this.JobApps(await this.jobAppsService.GetJobApps());
	}
}

export default { viewModel: HomePageViewModel, template: require('./jobapps.html') };
