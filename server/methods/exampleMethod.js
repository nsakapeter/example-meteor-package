Meteor.methods({
	examplemethod({rid, blocked}) {

		// check(rid, String);
		// check(blocked, String);

		// if (!Meteor.userId()) {
		// 	throw new Meteor.Error('error-invalid-user', 'Invalid user', { method: 'blockUser' });
		// }
		//
		// const subscription = MeteorWebApp.models.Subscriptions.findOneByRoomIdAndUserId(rid, Meteor.userId());
		// const subscription2 = MeteorWebApp.models.Subscriptions.findOneByRoomIdAndUserId(rid, blocked);
		//
		// if (!subscription || !subscription2) {
		// 	throw new Meteor.Error('error-invalid-room', 'Invalid room', { method: 'blockUser' });
		// }
		//
		// MeteorWebApp.models.exampleModel.exampleFunction(rid, blocked, Meteor.userId());

		// return true;
	}
});
