Template.example_template.helpers({
  example_helper() {
    return Template.instance().example_variable.get();
  },
});

Template.example_template.events({
  'click #example_button'(event, instance) {
    event.preventDefault();
    event.stopPropagation();

    // Meteor.call("exampleMethod", exampleParameter);
  },
});

Template.example_template.onCreated(function() {
  this.example_list = new ReactiveVar([]);
  this.example_variable = new ReactiveVar();

  //Example of setting the value of a reactiveVar
  this.example_variable.set("example_value");
  let example_options = {
      fields: {
          course: 1,
          image_url: 1,
          title: 1,
          content: 1,
          link: 1,
          link_label: 1
      }
  };
  var example_query;
  example_query = {
      _id: this.example_variable.get()
  };

  this.subscribe('examplePublication', example_parameter);
  this.example_list.set(example_collection.find(example_query, example_options).fetch());
});

Template.example_template.onRendered(function() {

});

Template.example_template.onDestroyed(function() {

});

Meteor.startup(function() {

});
