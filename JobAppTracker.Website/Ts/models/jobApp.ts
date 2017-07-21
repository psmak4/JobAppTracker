export class JobApp {
	public Id: number;
	public Title: string;
	public Location: string;
	public Type: string;

	constructor(id: number, title: string, location: string, type: string) {
		this.Id = id;
		this.Title = title;
		this.Location = location;
		this.Type = type;
	}
}