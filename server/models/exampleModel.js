class ModelExample extends RocketChat.models._Base {
		constructor() {
	super(...arguments);
	this.tryEnsureIndex({'_id': 1});
	this.tryEnsureIndex({'example_field': 1});
}

findOneById(_id, options) {

  var query = {
    _id: _id
  };
  return this.findOne(query, options);
}

findByCourseName(course_name) {

  var query = {
    course_name: course_name
  };
  return this.find(query);
}

findOneNotHiddenById(_id) {

  var query = {
    _id: _id,
    hidden: {
      $ne: true
    }
  };
  return this.findOne(query);
}

findByIds(_id) {

  if (_id == null) {
    _id = [];
  }
  _id = [].concat(_id);
  var query = {
    _id: {
      $in: _id
    }
  };
  return this.find(query);
}

findByRole(role, options) {

  var query = {
    role: role
  };
  return this.find(query, options);
}

findPublic(options) {

  var query = {
    "public": true
  };
  return this.find(query, options);
}

findNotHiddenPublic(ids) {
  var filter;
  if (ids == null) {
    ids = [];
  }
  filter = {
    hidden: {
      $ne: true
    },
    "public": true
  };
  if (ids.length > 0) {
    filter._id = {
      $in: ids
    };
  }
  return this.find(filter, {
    fields: {
      _id: 1,
      value: 1
    }
  });
}

findNotHiddenPublicUpdatedAfter(updatedAt) {
  var filter;
  filter = {
    hidden: {
      $ne: true
    },
    "public": true,
    _updatedAt: {
      $gt: updatedAt
    }
  };
  return this.find(filter, {
    fields: {
      _id: 1,
      value: 1
    }
  });
}

findNotHiddenPrivate() {
  return this.find({
    hidden: {
      $ne: true
    },
    "public": {
      $ne: true
    }
  });
}

findNotHidden(options) {
  return this.find({
    hidden: {
      $ne: true
    }
  }, options);
}

findNotHiddenUpdatedAfter(updatedAt) {
  return this.find({
    hidden: {
      $ne: true
    },
    _updatedAt: {
      $gt: updatedAt
    }
  });
}

updateValueNotHiddenById(_id, value) {

  var query = {
    _id: _id,
    hidden: {
      $ne: true
    },
    blocked: {
      $ne: true
    }
  };
  var update = {
    $set: {
      value: value
    }
  };
  return this.update(query, update);
}

updateOptionsById(_id, options) {

  var query = {
    blocked: {
      $ne: true
    },
    _id: _id
  };
  var update = {
    $set: options
  };
  return this.update(query, update);
}

createWithIdAndValue(_id, value) {
  var record;
  record = {
    _id: _id,
    value: value,
    _createdAt: new Date
  };
  return this.insert(record);
}

removeById(_id) {

  var query = {
    blocked: {
      $ne: true
    },
    _id: _id
  };
  return this.remove(query);
}


}

RocketChat.models.example = new ModelExample('example', true);
RocketChat.models.example.cache.load();
