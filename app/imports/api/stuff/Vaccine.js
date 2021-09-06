import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class VaccineCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VaccineCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      patientID: { type: String, optional: true },
      vaccineType: {
        type: String,
        allowedValues: ['Moderna', 'Pfizer', 'J&J', 'Other'],
        defaultValue: 'Moderna',
      },
      dose1: Date,
      clinic1: String,
      dose2: Date,
      clinic2: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const Vaccine = new VaccineCollection();
