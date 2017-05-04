$(function() {

  // Initialize Masonry grid library
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // Template for one square
  const Square = ({title, tag, text}) => `
    <div class="grid-item">
      <div class="image"></div>
      <div class="content">
        <div class="title">${title}</div>
        <div class="food-tag ${tag}">${tag}</div>
        <div>${text}</div>
        <div class="more-info">More info</div>
      </div>
    </div>
  `;

  // Fill squares with data
  $('.grid').html([
    { title: 'Apple', tag: 'fruit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Aubergine', tag: 'vegetable', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Banana', tag: 'fruit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Broccoli', tag: 'vegetable', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Chicken', tag: 'meat', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Orange', tag: 'fruit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Beff', tag: 'meat', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Zucchini', tag: 'vegetable', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ].map(Square).join(''));

  // Listener function for checkbox click
  $('input[type="checkbox"]').change(function(e) {
    filter(e.target.id, $(this).is(":checked"));
  });

  // Showing and hiding squares
  function filter(selectorName, isChecked) {
    var selector = '.' + selectorName;
    if (isChecked) {
      $(selector).closest('.grid-item').show();
    } else {
      $(selector).closest('.grid-item').hide();
    }
  }

});