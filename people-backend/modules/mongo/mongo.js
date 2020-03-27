class DB {
  constructor(mongo) {
    const peopleSchema = new mongo.Schema({
      name: String,
      isGroup: Boolean,
      group: String,
      title: String
    })
    this.db = mongo.createConnection('mongodb://mongo/peopledb');
    this.model = this.db.model('person', peopleSchema, 'people');
  }

  addPerson(person) {
    this.model.create([person]);
  }

  getPeople() {
    return new Promise((resolve, reject) => {
      this.model.find({}, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    })
  }
}

module.exports = DB;