import * as ko from 'knockout';
import { Contact } from '../../models/contact';
import { ContactsService } from "../../services/contacts-service";

class CounterExampleViewModel {
	public Contacts = ko.observableArray<Contact>();

	private contactsService = new ContactsService();

	constructor() {
		this.GetContacts();
	}

	private async GetContacts() {
		this.Contacts(await this.contactsService.GetContacts());
	}
}

export default { viewModel: CounterExampleViewModel, template: require('./contacts.html') };
