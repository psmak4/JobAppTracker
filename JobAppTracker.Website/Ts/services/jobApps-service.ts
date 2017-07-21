import { JobApp } from '../models/jobApp';

export class JobAppsService {
	constructor() {
	}

	public async GetJobApps() {
		let jobApps = new Array<JobApp>();
		await fetch('api/jobapps', {
			credentials: 'same-origin'
		}).then((response) => {
			return response.json() as Promise<Array<any>>;
		}).then((json) => {
			for (let jobApp of json) {
				jobApps.push(new JobApp(jobApp.id, jobApp.title, jobApp.location, jobApp.type));
			}
		}).catch((error) => {
			console.log(error);
			return [];
		});

		return jobApps;
	}
}