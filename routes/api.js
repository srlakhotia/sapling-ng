/*
 * Serve JSON to our AngularJS client
 */

exports.data = [{
	id: 100000000000,
	name: "John Doe",
	des: "Mr.Fake"
}]

exports.pageTitle = function (req, res) {
    res.json({
        viewContacts: 'View Contacts',
        addContacts: 'Add Contacts',
        removeContacts: 'Remove Contacts'
    });
};

exports.contactList = function(req, res) {
	res.json(exports.data);
};

exports.contactList.add = function(req, res) {
	req.on('data', function(chunk){
		exports.data.push(JSON.parse(chunk.toString()));
		res.end('{"success" : "Updated Successfully", "status" : 200}');
	});
};

exports.contactList.remove = function(req, res) {
	req.on('data', function(chunk) {
		var contactArray = JSON.parse(chunk.toString()).idArray;
		for(var i = 0; i < contactArray.length; i++) {
			for(var j = 0; j < exports.data.length; j++) {
				if(exports.data[j].id === contactArray[i]) {
					exports.data.splice(j, 1);
					break;
				}
			}
		}
		res.end('{"success" : "Removed Successfully", "status" : 200}');
	});
}