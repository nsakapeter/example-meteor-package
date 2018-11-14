Meteor.publish('examplePublication', function(example_parameter) {
  var fields, options;

  fields = {
    field_1: 1,
    field_2: 1,
    field_3: 1,
    field_4: 1,
    field_5: 1,
    field_6: 1,
  };
  options = {
    fields: fields,
    sort: {
      _createdAt: 1
    }
  };
  return RocketChat.models.example.find({
    _id: {
      "$in": example_parameter
    }
  }, options);
});
