// // if the database is empty on server start, create some sample data.
// Meteor.startup(function () {
// var data = List.find({}, {fields: {userId : this.userId}});
// // if (Lists.find({}, {fields: {userId : this.userId}}).count() === 0) {
// //if (Lists.find().count() === 0) {
//   //  if (List.find({}, {fields: {userId: this.userId}}) ){
//    // var data = [];

//     var timestamp = (new Date()).getTime();
//     for (var i = 0; i < data.length; i++) {
//       var list_id = Lists.insert({name: data[i].name}, {userId: this.userId});//id
//       for (var j = 0; j < data[i].contents.length; j++) {
//         var info = data[i].contents[j];
//         Todos.insert({
//                 //id 
//                       list_id: list_id,
//                       text: info[0],
//                       timestamp: timestamp,
//                       tags: info.slice(1)});

//         timestamp += 1; // ensure unique timestamp.
//       }
//     }
//   //}
// });



// if (Lists.find({}, {fields: {userId : this.userId}}).count() === 0) {
//     var data = [
//       {name: "Meteor Principles",
//        contents: [
//          ["Data on the Wire", "Simplicity", "Better UX", "Fun"],
//          ["One Language", "Simplicity", "Fun"],
//          ["Database Everywhere", "Simplicity"],
//          ["Latency Compensation", "Better UX"],
//          ["Full Stack Reactivity", "Better UX", "Fun"],
//          ["Embrace the Ecosystem", "Fun"],
//          ["Simplicity Equals Productivity", "Simplicity", "Fun"]
//        ],
//       },
//       {name: "Languages",
//        contents: [
//          ["Lisp", "GC"],
//          ["C", "Linked"],
//          ["C++", "Objects", "Linked"],
//          ["Python", "GC", "Objects"],
//          ["Ruby", "GC", "Objects"],
//          ["JavaScript", "GC", "Objects"],
//          ["Scala", "GC", "Objects"],
//          ["Erlang", "GC"],
//          ["6502 Assembly", "Linked"]
//          ]
//       },
//       {name: "Favorite Scientists",
//        contents: [
//          ["Ada Lovelace", "Computer Science"],
//          ["Grace Hopper", "Computer Science"],
//          ["Marie Curie", "Physics", "Chemistry"],
//          ["Carl Friedrich Gauss", "Math", "Physics"],
//          ["Nikola Tesla", "Physics"],
//          ["Claude Shannon", "Math", "Computer Science"]
//        ]
//       }
//     ];

