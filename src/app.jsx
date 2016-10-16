var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {
    thumbnailData: [
        {
            number: 53,
            title: 'Inbox',
            header: 'Learn React',
            description: 'React is awesome, check it out! React is awesome, check it out! React is awesome, check it out! React is awesome, check it out!',
            imageUrl: 'http://placehold.it/200x200',


        },
        {
            number: 123,
            title: 'Spam',
            header: 'Learn Crap',
            description: 'Something else awesome, check it out! Something else awesome, check it out! Something else awesome, check it out! ',
            imageUrl: 'http://placehold.it/205x205',


        },
    ]
};

// render the class

var element = React.createElement(ThumbnailList, options);

// tell it where it goes

React.render(element, document.querySelector('.target'));